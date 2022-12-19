import fs from 'fs';
import { endOfLine, handleOperationError } from '../utils/index.js';

export const readFile = async (pathToFile) => {
  const stream = fs.createReadStream(pathToFile, 'utf-8');
  let data = '';

  stream.on('data', (chunk) => {
    data += chunk;
  })

  stream.on('error', (err) => {
    handleOperationError(err);
  });

  stream.on('end', () => {
    process.stdout.write(`${data}${endOfLine}`)
  });
};

