import { endOfLine, handleInputError, handleOperationError, showCurrentDir } from './utils/index.js';
import { getHomeDir } from './os/index.js'
import { handleRequest } from './requestHandler.js';

const handleExit = (userName) => {
  process.stdout.write(`Thank you for using File Manager, ${userName}, goodbye!${endOfLine}`)
  process.exit();
}

const start = async () => {
  let userName = '';
  const args = process.argv.slice(2);
  const input = process.stdin;

  try {
    const userNameArg = args.find(arg => arg.startsWith('--'));

    if (!userNameArg) {
      return handleInputError();
    }

    userName = userNameArg.split('=')[1];

    if (userName.length) {
      process.stdout.write(`Welcome to File Manager, ${userName}!${endOfLine}`);

    } else {
      return handleInputError();
    }

  } catch (err) {
    handleOperationError(err);
  }

  input.on('data', data => {
    const parsedData = data.toString('utf8').replace(/\r?\n/g, "");

    if (parsedData === '.exit') {
      return handleExit(userName);
    }
    
    handleRequest(parsedData);
    showCurrentDir();
  })

  await process.chdir(getHomeDir());
  showCurrentDir();

  process.on('SIGINT', () => {
    handleExit(userName);
  });
}

start();