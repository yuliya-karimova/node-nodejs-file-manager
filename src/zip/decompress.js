import fs from 'fs';
import zlib from 'zlib';
import { join, basename } from 'path';
import { endOfLine } from '../utils/index.js';

export const decompress = async (pathToOriginFile, pathToTargetFolder) => {
    const inputStream = fs.createReadStream(pathToOriginFile);
    const outputStream = fs.createWriteStream(join(pathToTargetFolder, basename(pathToOriginFile).replace('.br', '')));
    const brotliDecompress = zlib.createBrotliDecompress();
  
    const stream = inputStream.pipe(brotliDecompress).pipe(outputStream);
  
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
      process.stdout.write(`Decompressing is ready${endOfLine}`);
    });
};
