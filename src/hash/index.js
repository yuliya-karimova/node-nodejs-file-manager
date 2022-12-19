
import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import { handleOperationError } from '../utils/index.js';

export const calcHash = async (pathToFile) => {
  try {
    const data = await readFile(pathToFile);
    const hash = createHash("sha256").update(data).digest("hex");

    console.log(hash)
  } catch (error) {
    handleOperationError(err)
  }
};
