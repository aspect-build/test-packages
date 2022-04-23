const packageJson = require('./package.json')
const c = require('@aspect-test/c')
module.exports = {
  id: () => `${packageJson.name}@${packageJson.version}`,
  idC: () => c.id(),
}
