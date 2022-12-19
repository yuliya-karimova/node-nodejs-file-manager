import { showDirContent } from './ls/index.js';
import { calcHash } from './hash/index.js';
import { copyFile, createFile, deleteFile, moveFile, readFile, renameFile } from './fs/index.js';
import { compress, decompress } from './zip/index.js';
import { handleOsCommands } from './os/index.js';
import { navigate } from './nav/index.js';
import { endOfLine, handleInputError } from './utils/index.js';

export const handleRequest = (inputData) => {
  const argsArray = inputData?.split(' ');
  const moduleName = argsArray[0];
  const firstArg = argsArray.length > 1 && argsArray[1];
  const secondArg = argsArray.length > 2 && argsArray[2];

  switch (moduleName) {
    case 'up':
      navigate();
      break;
    case 'cd':
      navigate(firstArg);
      break;
    case 'ls':
      showDirContent();
      break;
    case 'cat':
      readFile(firstArg);
      break;
    case 'add':
      createFile(firstArg);
      break;
    case 'rn':
      renameFile(firstArg, secondArg);
      break;
    case 'cp':
      copyFile(firstArg, secondArg);
      break;
    case 'mv':
      moveFile(firstArg, secondArg);
      break;
    case 'rm':
      deleteFile(firstArg);
      break;
    case 'os':
      handleOsCommands(firstArg);
      break;
    case 'hash':
      calcHash(firstArg);
      break;
    case 'compress':
      compress(firstArg, secondArg);
      break;
    case 'decompress':
      decompress(firstArg, secondArg);
      break;
    default:
      showCommands();
  }
}

const showCommands = () => {
  handleInputError(`List of available commands:
    up,
    cd path_to_directory,
    ls,
    cat path_to_file,
    add new_file_name,
    rn path_to_file new_filename,
    cp path_to_file path_to_new_directory,
    mv path_to_file path_to_new_directory,
    rm path_to_file,
    os --EOL,
    os --cpus,
    os --homedir,
    os --username,
    os --architecture,
    hash path_to_file,
    compress path_to_file path_to_destination,
    decompress path_to_file path_to_destination
    ${endOfLine}`
  );
};
