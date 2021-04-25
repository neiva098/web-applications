import axios from "axios";
import { AddressInterface, CreateAddressInterface } from "../interfaces/address";
import { CreateAppointmentInterface } from "../interfaces/appointament";
import { AuthResponse, CreateUserInterface } from "../interfaces/user";
import { setUserDataOnLocalStorage } from "../utils/user";
import { clearSession } from "./auth";

export const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        authorization: localStorage.getItem("@lavacuna") || "invalid",
    },
});

export const logIn = async (
    email: string,
    password: string
): Promise<AuthResponse> => {
    clearSession();

    const apiResponse = await api.post("/api/users/auth", {
        email,
        password,
    });

    setUserDataOnLocalStorage(apiResponse.data);
    api.defaults.headers.authorization = apiResponse.data.token;

    return apiResponse.data;
};

export const createAddress = async (
    address: CreateAddressInterface
) => {
    const apiResponse = await api.post("/api/address", address);

    return apiResponse.data
}

export const createUser = async (
    user: CreateUserInterface
) => {
    const apiResponse = await api.post("/api/users", user);

    return apiResponse.data
}

export const findAddress = async (
    cep: string,
): Promise<AddressInterface | undefined> => {
    const apiResponse = await api.get("/api/address", {
        params: {
            cep,
        }
    });

    return apiResponse.data
}

export const getAvaliableEspecialidades = async () => {
    const apiResponse = await api.get("/api/medic/especialidades");

    return apiResponse.data
}

export const getMedicsByEspecialidade = async (especialidade: string) => {
    const apiResponse = await api.get("/api/medic/especialidade", {
        params: {
            especialidade
        }
    });

    return apiResponse.data
}

export const getAvaliableAppointaments = async (medic: string) => {
    const apiResponse = await api.get(`/api/appointament/avaliable/${medic}`);

    return apiResponse.data
}

export const getAvaliablePatient = async (medic: string) => {
    const apiResponse = await api.get(`/api/patient/appointament/avaliable/${medic}`);

    return apiResponse.data
}

export const createAppointament = async (body: CreateAppointmentInterface) => {
    const apiResponse = await api.post("/api/appointament", body);

    return apiResponse.data
}

export const getAllPatients = async () => {
    const apiResponse = await api.get("/api/patient");

    return apiResponse.data
}

export const getAllEmployees = async () => {
    const apiResponse = await api.get("/api/users/employees");

    return apiResponse.data
}

export const getAppointaments = async () => {
    const apiResponse = await api.get("/api/appointament");

    return apiResponse.data
}

export const getAddresses = async () => {
    const apiResponse = await api.get("/api/address/all");

    return apiResponse.data
}

export const getAppointamentsByMedic = async (medic: string) => {
    const apiResponse = await api.get(`/api/appointament/${medic}`);

    return apiResponse.data
}
