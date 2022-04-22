const packageJson = require('./package.json')
const packageJsonC = require('@aspect-test/c/package.json')
module.exports = {
  id: () => `${packageJson.name}@${packageJson.version}`,
  idC: () => `${packageJsonC.name}@${packageJsonC.version}`
}
