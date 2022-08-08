const path = require('path');

function indexTemplate(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = `TdsIcon${basename}`;
    return `export { ${exportName} } from './${basename}'`;
  });
  return exportEntries.join('\n');
}
module.exports = indexTemplate;
