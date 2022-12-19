import { copyFile } from './copy.js';
import { deleteFile } from './delete.js';
import { handleOperationError } from '../utils/index.js';

export const moveFile = async (pathToOriginFile, pathToTargetFolder) => {
  try {
    await copyFile(pathToOriginFile, pathToTargetFolder);
    await deleteFile(pathToOriginFile);
  } catch (err) {
    handleOperationError(err);
  }
};
