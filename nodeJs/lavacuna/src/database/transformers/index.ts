/* eslint-disable class-methods-use-this */
export class ColumnNumericTransformer {
    to(data: number): number {
        return Number(Number(data).toFixed(2));
    }

    from(data: string): number {
        return parseFloat(data);
    }
}
