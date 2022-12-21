import { writeFile } from 'fs/promises';
import { join } from 'path';

import { getCurrentDir, handleOperationError } from '../utils/index.js';

export const createFile = async (fileName) => {
  const pathToFile = join(getCurrentDir(), fileName);

  try {
    await writeFile(pathToFile, '', { flag: 'wx'});
  } catch (err) {
    handleOperationError(err);
  }
};

