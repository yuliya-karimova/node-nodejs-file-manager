import fs from 'fs';
import { basename, join } from 'path'
import { handleOperationError } from '../utils/index.js';

export const copyFile = async (pathToOriginFile, pathToTargetFolder) => {
  const readStream = fs.createReadStream(pathToOriginFile);
  const writeStream = fs.createWriteStream(join(pathToTargetFolder, basename(pathToOriginFile)));

  readStream.on('error', (err) => {
    handleOperationError(err);
  });

  writeStream.on('error', (err) => {
    handleOperationError(err);
  });

  readStream.pipe(writeStream);
};

