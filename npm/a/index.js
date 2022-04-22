const packageJson = require('./package.json')
const packageJsonB = require('@aspect-test/b/package.json')
const packageJsonC = require('@aspect-test/c/package.json')
module.exports = {
  id: () => `${packageJson.name}@${packageJson.version}`,
  idB: () => `${packageJsonB.name}@${packageJsonB.version}`,
  idC: () => `${packageJsonC.name}@${packageJsonC.version}`
}
