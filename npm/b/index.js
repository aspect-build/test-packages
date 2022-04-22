const packageJson = require('./package.json')
const packageJsonA = require('@aspect-test/a/package.json')
const packageJsonC = require('@aspect-test/c/package.json')
module.exports = {
  id: () => `${packageJson.name}@${packageJson.version}`,
  idA: () => `${packageJsonA.name}@${packageJsonA.version}`,
  idC: () => `${packageJsonC.name}@${packageJsonC.version}`
}
