const path = require('path');
const fs = require('fs');

const folders = [
  'folder_name1',
  'folder_name2',
  'folder_name3',
];

/**
 * @link https://nodejs.org/api/fs.html#fs_fspromises_readdir_path_options
 */
async function exec(folder) {
  const files = await fs.promises.readdir(path.resolve(__dirname, folder));
  for (const file of files) {
    const fn = require(path.resolve(__dirname, folder, file));
    await fn();
  }
}

async function final() {
  return new Promise(((resolve) => {
    setTimeout(() => {
      console.log('final done!');
      resolve();
    }, 1000);
  }));
}

async function main() {
  for (const folder of folders) {
    await exec(folder);
    console.log(`${folder} done!`);
  }
  await final();
}

main();
