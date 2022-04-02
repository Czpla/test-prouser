import { writeFile } from 'fs';
import { Itens } from '../types/itens';

export class GenerateCsv {
    constructor() {}

    public generate(data: Itens, fileName: string, type: string): void {
        writeFile(
            `${process.cwd()}/src/resources/output-file/${fileName}.csv`,
            type === 'found' ? data.found.toString() : data.notFound.toString(),
            'utf8',
            (error) => {
                if (error) {
                    console.log(
                        `There was an error saving the file ${fileName}.csv, with the error: ${error}`,
                    );
                } else {
                    console.log(
                        `File ${fileName}.csv has been successfully saved`,
                    );
                }
            },
        );
    }
}
