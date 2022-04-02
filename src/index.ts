import data from './resources/input-file/ips.json';
import { SeparatedData } from './utils/separated-data';
import { GenerateCsv } from './utils/generate-csv';

const separatedDataInstance = new SeparatedData();
const generateInstance = new GenerateCsv();

const dataSepared = separatedDataInstance.separed(data);

generateInstance.generate(dataSepared, 'ips-valid', 'found');
generateInstance.generate(dataSepared, 'ips-to-block', 'notFound');
