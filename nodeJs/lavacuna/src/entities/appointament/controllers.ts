import * as repository from './repository';
import { CreateAppointmentInterface } from './interfaces';
import { HttpError } from '../../utils/errors/HttpError';
import { Appointament } from '../../database/entities/Appointment';
import { getAppointamentsAvaliable } from './utils';

export const create = async (
    appointamentBody: CreateAppointmentInterface,
): Promise<Appointament> => {
    try {
        return await repository.create(appointamentBody);
    } catch {
        throw new HttpError(400, 'Dados de agendamento inválidos');
    }
};

export const getAvaliable = async (
    codigoMedico: string,
): Promise<{ data: string; horarios: string[] }[]> => {
    const appointaments = await repository.getAppointments(codigoMedico);

    return getAppointamentsAvaliable(appointaments);
};

export const getAppointaments = async (): Promise<Appointament[]> => {
    return repository.getAll();
};

export const getAppointmentsByMedico = async (
    codigoMedico: string,
): Promise<Appointament[]> => {
    return repository.getAppointmentsByMedic(codigoMedico);
};
