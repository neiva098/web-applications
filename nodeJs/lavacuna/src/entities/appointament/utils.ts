import moment from 'moment';
import { Appointament } from '../../database/entities/Appointment';

export const getAppointamentsAvaliable = (
    appointaments: Appointament[],
): { data: string; horarios: string[] }[] => {
    const occupeds = getOccupedAppointaments(appointaments);

    const data = moment(new Date(), 'YYYY-MM-DD');

    occupeds.push({
        data: data.format('YYYY-MM-DD'),
        horarios: [
            '08:00',
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
        ].filter(dh => dh < data.toISOString().substr(11, 5)),
    });

    const avaliable: { data: string; horarios: string[] }[] = [];

    for (let count = 0; count < 28; count += 1) {
        if (!['Sunday', 'Saturday'].includes(data.format('dddd'))) {
            const findedOccuped = occupeds.find(
                oc => oc.data === data.format('YYYY-MM-DD'),
            );
            if ((findedOccuped?.horarios.length || 0) < 10) {
                avaliable.push({
                    data: data.format('YYYY-MM-DD'),
                    horarios: [
                        '08:00',
                        '09:00',
                        '10:00',
                        '11:00',
                        '12:00',
                        '13:00',
                        '14:00',
                        '15:00',
                        '16:00',
                        '17:00',
                    ].filter(hr => !findedOccuped?.horarios.includes(hr)),
                });
            }
        }

        data.add(1, 'days');
    }

    return avaliable;
};

export const getOccupedAppointaments = (
    appointaments: Appointament[],
): { data: string; horarios: string[] }[] => {
    const occupeds: { data: string; horarios: string[] }[] = [];

    appointaments.forEach(ap => {
        const iso = ap.dataHora.toISOString();

        const data = iso.substr(0, 10);
        const horario = iso.substr(11, 5);

        const occuped = occupeds.find(oc => oc.data === data) || {
            data,
            horarios: [],
        };

        occuped.horarios.push(horario);

        occupeds.push(occuped);
    });

    return occupeds;
};
