import os from 'os';
import { endOfLine } from '../utils/index.js';

export const handleOsCommands = (command) => {
  switch (command) {
    case '--EOL':
      showEol();
      break;
    case '--cpus':
      showCpus();
      break;
    case '--homedir':
      showHomeDir();
      break;
    case '--username':
      showUserName();
      break;
    case '--architecture':
      showArchitecture();
      break;
    }
}

const showEol = () => {
  process.stdout.write(`${JSON.stringify(endOfLine)}${endOfLine}`);
};

const showCpus = () => {
  const cpusList = os.cpus();
  const cpusListInfo = cpusList.map((item, index) => {
    return `${index+1} CPU:
      model: ${item.model}
      clockRate: ${item.speed}
    `
  });

  process.stdout.write(`Cpus amound: ${cpusList.length}${endOfLine}`);
  process.stdout.write(`Cpus info:
${cpusListInfo.join(endOfLine)}${endOfLine}`);
};

export const getHomeDir = () => {
  return os.homedir();
}

const showHomeDir = () => {
  process.stdout.write(`${getHomeDir()}${endOfLine}`);
};

const showUserName = () => {
  process.stdout.write(`${os.userInfo().username}${endOfLine}`);
};

const showArchitecture = () => {
  process.stdout.write(`${os.arch()}${endOfLine}`);
};