const packageJson = require('./package.json')
const packageJsonA = require('@aspect-test/a/package.json') // circular dep so don't require main
const c = require('@aspect-test/c')
const d = require('@aspect-test/d')
module.exports = {
  id: () => `${packageJson.name}@${packageJson.version}`,
  idA: () => `${packageJsonA.name}@${packageJsonA.version}`,
  idC: () => c.id(),
  idD: () => d.id(),
}
