import fs from 'fs';
import { join, basename } from 'path';
import zlib from 'zlib';
import { endOfLine, handleOperationError } from '../utils/index.js';

export const compress = async (pathToOriginFile, pathToTargetFolder) => {
    const inputStream = fs.createReadStream(pathToOriginFile, 'utf-8');
    const outputStream = fs.createWriteStream(join(pathToTargetFolder, `${basename(pathToOriginFile)}.br`));
    const brotliCompress = zlib.createBrotliCompress();
  
    const stream = inputStream.pipe(brotliCompress).pipe(outputStream);
  
    stream.on('error', (err) => {
      handleOperationError(err);
    });

    inputStream.on('error', (err) => {
      handleOperationError(err);
    });

    outputStream.on('error', (err) => {
      handleOperationError(err);
    });
  
    stream.on('finish', () => {
      process.stdout.write(`Archive is ready${endOfLine}`);
    });
};
