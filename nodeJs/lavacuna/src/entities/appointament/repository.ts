import { getRepository } from 'typeorm';
import { Appointament } from '../../database/entities/Appointment';
import { CreateAppointmentInterface } from './interfaces';

export const create = async (
    appointment: CreateAppointmentInterface,
): Promise<Appointament> => {
    const appointmentEntity = Object.assign(new Appointament(), appointment);

    return getRepository(Appointament).save(appointmentEntity);
};

export const getAppointments = async (
    codigoMedico: string,
): Promise<Appointament[]> => {
    return getRepository(Appointament).find({ where: { codigoMedico } });
};

export const getAppointmentsByMedic = async (
    codigoMedico: string,
): Promise<Appointament[]> => {
    return getRepository(Appointament)
        .createQueryBuilder('appointament')
        .innerJoinAndSelect(
            'appointament.medico',
            'medics',
            'medics.codigoColaborador = appointament.codigoMedico',
        )
        .innerJoinAndSelect(
            'medics.employee',
            'employees',
            'employees.codigoPessoa = appointament.codigoMedico',
        )
        .innerJoinAndSelect(
            'employees.pessoa',
            'pessoas_medico',
            'pessoas_medico.codigo = appointament.codigoMedico',
        )
        .innerJoinAndSelect(
            'appointament.paciente',
            'patients',
            'patients.codigoPessoa = appointament.codigoPaciente',
        )
        .innerJoinAndSelect(
            'patients.pessoa',
            'pessoas_paciente',
            'pessoas_paciente.codigo =appointament.codigoPaciente',
        )
        .where(`pessoas_medico.codigo = '${codigoMedico}'`)
        .getMany();
};

export const getAll = async (): Promise<Appointament[]> => {
    return getRepository(Appointament)
        .createQueryBuilder('appointament')
        .innerJoinAndSelect(
            'appointament.medico',
            'medics',
            'medics.codigoColaborador = appointament.codigoMedico',
        )
        .innerJoinAndSelect(
            'medics.employee',
            'employees',
            'employees.codigoPessoa = appointament.codigoMedico',
        )
        .innerJoinAndSelect(
            'employees.pessoa',
            'pessoas_medico',
            'pessoas_medico.codigo = appointament.codigoMedico',
        )
        .innerJoinAndSelect(
            'appointament.paciente',
            'patients',
            'patients.codigoPessoa = appointament.codigoPaciente',
        )
        .innerJoinAndSelect(
            'patients.pessoa',
            'pessoas_paciente',
            'pessoas_paciente.codigo =appointament.codigoPaciente',
        )
        .getMany();
};
