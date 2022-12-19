import os from 'os'

export const endOfLine = os.EOL

export const handleInputError = (message)=> {
  process.stdout.write(`Invalid input.${endOfLine}`);
  process.stdout.write(`${message}${endOfLine}`);
}

export const handleOperationError = (message) => {
  process.stdout.write(`Operation failed.${endOfLine}`);
  process.stdout.write(`${message}${endOfLine}`);
}

export const getCurrentDir = () => {
  return process.cwd();
}

export const showCurrentDir = () => {
  process.stdout.write(`You are currently in ${getCurrentDir()}${endOfLine}`);
}

export const goToDir = (path) => {
  process.chdir(path)
}

