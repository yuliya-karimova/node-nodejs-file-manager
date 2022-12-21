import { rename } from 'fs/promises';

import { handleOperationError } from '../utils/index.js';

export const renameFile = async (pathToFile, newFileName) => {
  try {
    await rename(pathToFile, newFileName)
  } catch (err) {
    handleOperationError(err);
  }
};
