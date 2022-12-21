import fs from 'fs';
import { endOfLine, handleOperationError } from '../utils/index.js';

export const readFile = async (pathToFile) => {
  const readStream = fs.createReadStream(pathToFile, 'utf-8');
  let data = '';

  readStream.on('data', (chunk) => {
    data += chunk;
  })

  readStream.on('error', (err) => {
    handleOperationError(err);
  });

  readStream.on('end', () => {
    process.stdout.write(`${data}${endOfLine}`)
  });
};

