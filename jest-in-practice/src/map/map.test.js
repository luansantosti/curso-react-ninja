import { expect } from 'chai'
import map from './map'

it('should be a function', () => {
  expect(map).to.be.a('function')
})

it('map[2,4,6] should return [2,4,6]', () => {
  expect(map([2,4,6])).to.be.deep.equal([2,4,6])
})

