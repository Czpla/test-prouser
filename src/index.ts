import data from './file/ips.json';
import { SeparatedData } from './utils/separated-data';

const separatedData = new SeparatedData(data);

const itens = separatedData.separed();

console.log(itens);
