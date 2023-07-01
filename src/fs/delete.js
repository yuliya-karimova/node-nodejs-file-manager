import { rm } from 'fs/promises';
import { handleOperationError } from '../utils/index.js';

export const deleteFile = async (pathToFile) => {
  try {
    await rm(pathToFile)
  } catch (err) {
    handleOperationError(err);
  }
};
