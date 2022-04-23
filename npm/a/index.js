const packageJson = require('./package.json')
const b = require('@aspect-test/b')
const c = require('@aspect-test/c')
const d = require('@aspect-test/d')
module.exports = {
  id: () => `${packageJson.name}@${packageJson.version}`,
  idB: () => b.id(),
  idC: () => c.id(),
  idD: () => d.id(),
}
