import { expect, test } from 'vitest'
import { numberToHanzi } from '~/logic/utils'

test('numberToHanzi', () => {
  expect(numberToHanzi(0)).toMatchInlineSnapshot('"零"')
  expect(numberToHanzi(10)).toMatchInlineSnapshot('"一十"')
  expect(numberToHanzi(18)).toMatchInlineSnapshot('"一十八"')
  expect(numberToHanzi(11)).toMatchInlineSnapshot('"一十一"')
  expect(numberToHanzi(20)).toMatchInlineSnapshot('"二十"')
  expect(numberToHanzi(21)).toMatchInlineSnapshot('"二十一"')
  expect(numberToHanzi(59)).toMatchInlineSnapshot('"五十九"')
  expect(numberToHanzi(120)).toMatchInlineSnapshot('"一百二十"')
  expect(numberToHanzi(100)).toMatchInlineSnapshot('"一百"')
  expect(numberToHanzi(114)).toMatchInlineSnapshot('"一百一十四"')
  expect(numberToHanzi(200)).toMatchInlineSnapshot('"二百"')
  expect(numberToHanzi(101)).toMatchInlineSnapshot('"一百零一"')
})
