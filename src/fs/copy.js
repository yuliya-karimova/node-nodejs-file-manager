import { copyFile as copy } from 'fs/promises';
import { basename, join } from 'path'
import { handleOperationError } from '../utils/index.js';

export const copyFile = async (pathToOriginFile, pathToTargetFolder) => {
  try {
    await copy(pathToOriginFile, join(pathToTargetFolder, basename(pathToOriginFile)))
  } catch (err) {
    handleOperationError(err)
  }
};
