import { readdir } from 'fs/promises';
import { handleOperationError, getCurrentDir } from '../utils/index.js';

export const showDirContent = async () => {
  try {
    const fileList = [];
    const folderList = [];

    const dirContentlist = await readdir(getCurrentDir(), { withFileTypes: true });

    dirContentlist.forEach(item => {
      if (item.isDirectory()) {
        folderList.push({
          name: item.name,
          type: 'directory'
        });
      } else {
        fileList.push({
          name: item.name,
          type: 'file'
        });
      }
    })
  
    console.table([...folderList.sort(), ...fileList.sort()]);
  } catch (err) {
    handleOperationError(err);
  }
};
