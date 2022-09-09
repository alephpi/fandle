import { expect, it } from 'vitest'
import { parseChar, parsePinyin, parseWord, testAnswer } from '../src/logic'

// it('parseChar', () => {
//   expect(parseChar('虎')).toMatchSnapshot()
//   expect(parseChar('微')).toMatchSnapshot()
//   expect(parseChar('姜')).toMatchSnapshot()
//   expect(parseChar('寿')).toMatchSnapshot()
//   expect(parseChar('翁')).toMatchSnapshot()
// })

// it('testAnswer', () => {
//   expect(testAnswer(parseWord('安'), parseWord('安'))).toMatchSnapshot()
//   expect(testAnswer(parseWord('帆'), parseWord('安'))).toMatchSnapshot()
// })

it('parsePinyin', () => {
  expect(parsePinyin('yi', 'strict')).toMatchSnapshot()
  expect(parsePinyin('yve', 'strict')).toMatchSnapshot()
  expect(parsePinyin('you', 'strict')).toMatchSnapshot()
  expect(parsePinyin('wu', 'strict')).toMatchSnapshot()
  expect(parsePinyin('wei', 'strict')).toMatchSnapshot()
  expect(parsePinyin('dui', 'strict')).toMatchSnapshot()
  expect(parsePinyin('tui', 'strict')).toMatchSnapshot()
  expect(parsePinyin('jvn', 'strict')).toMatchSnapshot()
  expect(parsePinyin('dun', 'strict')).toMatchSnapshot()
})
