const packageJson = require('./package.json')
const packageJsonB = require('@aspect-test/b/package.json') // circular dep so don't require main
const c = require('@aspect-test/c')
const d = require('@aspect-test/d')
module.exports = {
  id: () => `${packageJson.name}@${packageJson.version}`,
  idB: () => `${packageJsonB.name}@${packageJsonB.version}`,
  idC: () => c.id(),
  idD: () => d.id(),
}
