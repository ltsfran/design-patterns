const recursiveReadSync = require('recursive-readdir-sync')

module.exports = {
  filesToCompile(dir, expresion) {
    let files = {}
    recursiveReadSync(dir)
        .filter(function (file) {
            return expresion.test(file)
        })
        .map(function (file) {
            let fileName = file.replace(expresion, '').replace('typescript/', '');
            files[fileName] = './' + file;
        })
    return files
  }
}