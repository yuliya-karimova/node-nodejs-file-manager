import { handleOperationError, goToDir } from '../utils/index.js';

const upDir = '../';

export const navigate = (path = upDir) => {
  try {
    goToDir(path)
  } catch (err) {
    handleOperationError(err);
  }
};

