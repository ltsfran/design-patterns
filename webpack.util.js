const recursiveReadSync = require('recursive-readdir-sync');
const path = require('path');

module.exports = {
  filesToCompile(dir, expresion) {
    let files = {}
    recursiveReadSync(dir)
        .filter((file) => {
          return expresion.test(file);
        })
        .map((file) => {
          let fileName = file.replace(expresion, '').replace('Patterns/', '');
          files[path.join(fileName, 'index')] = './' + file;
        })
    
    return files
  }
}