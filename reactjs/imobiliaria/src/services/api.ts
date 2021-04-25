import axios from "axios";
import {
    CreatePropertieInterface,
    PropertieInterface,
    QueryPropertiesInterface,
    UpdatePropertieInterface,
} from "../interfaces/propertie";
import { AuthResponse } from "../interfaces/user";
import { VisitInterface } from "../interfaces/visit";
import { setUserDataOnLocalStorage } from "../utils/user";
import { clearSession } from "./auth";

const baseUrl = "http://localhost:3333";

export const publicApi = axios.create({
    baseURL: baseUrl,
});

export const privateApi = axios.create({
    baseURL: baseUrl,
    headers: {
        authorization: localStorage.getItem("@yahooRespostas") || "invalid",
    },
});

privateApi.defaults.validateStatus = (status: number) => {
    if (status >= 400) {
        return false;
    }

    return true;
};

export const logIn = async (
    email: string,
    password: string
): Promise<AuthResponse> => {
    clearSession();

    const apiResponse = await publicApi.post("/api/users/authenticate", {
        email,
        password,
    });

    setUserDataOnLocalStorage(apiResponse.data);
    privateApi.defaults.headers.authorization = apiResponse.data.token;

    return apiResponse.data;
};

export const createPropertie = async (
    propertie: CreatePropertieInterface
): Promise<PropertieInterface> => {
    const apiResponse = await privateApi.post("/api/properties", propertie);

    return apiResponse.data;
};

export const listProperties = async (
    query: QueryPropertiesInterface
): Promise<PropertieInterface[]> => {
    const apiResponse = await privateApi.get("/api/properties", {
        params: query,
    });

    return apiResponse.data;
};

export const getPropertieById = async (
    id: string
): Promise<PropertieInterface> => {
    const apiResponse = await privateApi.get(`/api/properties/${id}`);

    return apiResponse.data;
};

export const deletePropertie = async (id: string): Promise<void> => {
    await privateApi.delete(`/api/properties/${id}`);
};

export const createVisit = async (propertieId: string, dataHora: string) => {
    await privateApi.post(`/api/visits`, {
        propertieId,
        dataHora,
    });
};

export const updatePropertie = async (
    id: string,
    propertie: UpdatePropertieInterface
): Promise<void> => {
    await privateApi.put(`/api/properties/${id}`, propertie);
};

export const getVisits = async (propertieId: string): Promise<VisitInterface[]> => {
    const res = await privateApi.get('/api/visits', {
        params: {
            propertieId,
        }
    })

    return res.data
}

export const deleteVisit = async (id: string): Promise<void> => {
    await privateApi.delete(`/api/visits/${id}`);
};
