import chaiAsPromised from 'chai-as-promised'
export {default as sinon} from 'sinon'
import sinon from 'sinon'
import chai from 'chai'
import sinonChai from 'sinon-chai'
import mkdirp from 'mkdirp'
import path from 'path'

chai.use(chaiAsPromised)
chai.use(sinonChai)

export const expect = chai.expect

export const tmp = (fileName = '') => path.join('./tmp/test', fileName)

export const subjectEach = beforeEach

before(() => mkdirp.sync('./tmp/test'))

afterEach(() => {
  sinon.restore()
})

after(() => console.log('You can find all log output at: ./tmp/test.log')) // eslint-disable-line no-console
