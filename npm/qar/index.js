const packageJson = require('./package.json')
module.exports = {
  id: () => `${packageJson.name}@${packageJson.version}`,
  data: () => require('./data.json')
}
