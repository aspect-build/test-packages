const packageJson = require('./package.json')
const a = require('@aspect-test/a')
const c = require('@aspect-test/c')
const d = require('@aspect-test/d')
module.exports = {
  id: () => `${packageJson.name}@${packageJson.version}`,
  idA: () => a.id(),
  idC: () => c.id(),
  idD: () => d.id(),
}
