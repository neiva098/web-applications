import { HttpError } from '../../../utils/errors/HttpError';

export const formatDate = (dateStr: string): string => {
    try {
        const date = new Date(dateStr);

        date.setSeconds(0);
        date.setMilliseconds(0);

        return date.toISOString();
    } catch {
        throw new HttpError(400, 'Data hora invalida');
    }
};
