import { Data } from '../types/data';
import { Itens } from '../types/itens';
export class SeparatedData {
    constructor() {}

    public separed(data: Data[]): Itens {
        const response = data.reduce((accumulator: any, current: Data) => {
            const regexr = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g;

            const regResult = regexr.exec(current.jsonPayload.message);

            if (regResult) {
                current.jsonPayload.message.includes('NÃO ENCONTRADO')
                    ? (accumulator.notFound = [
                          ...(accumulator.notFound || []),
                          regResult[0],
                      ])
                    : (accumulator.found = [
                          ...(accumulator.found || []),
                          regResult[0],
                      ]);
            }

            return accumulator;
        }, []);

        return response;
    }
}
