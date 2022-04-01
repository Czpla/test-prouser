import data from '../types/data';

export class SeparatedData {
    private _data: any = [];

    constructor(public data: any) {
        this._data = data;
    }

    public get data_(): any {
        return this._data;
    }

    public separed(): any[] {
        const res = this._data.reduce((accumulator: any, current: any) => {
            const reg = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g;

            const regExec = reg.exec(current.jsonPayload.message);

            if (regExec) {
                current.jsonPayload.message.includes('NÃO ENCONTRADO')
                    ? (accumulator['notFound'] = [
                          ...(accumulator['notFound'] || []),
                          regExec[0],
                      ])
                    : (accumulator['found'] = [
                          ...(accumulator['found'] || []),
                          regExec[0],
                      ]);
            }

            return accumulator;
        }, []);

        return res;
    }
}
