/**
 * SPOILERS
 *
 * This file contains the list of answers for the game. It's not recommended to continue reading this file.
 *
 * 作弊警告
 *
 * 该文件包含了游戏的答案列表。不建议继续阅读。
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

import { seedShuffle } from './utils'

function prepare<T>(len: number, arr: T[]) {
  if (import.meta.hot && arr.length !== len)
    throw new Error(`expect array length ${arr.length} to be ${len}`)
  return arr
}

export const _PRE = prepare(1, [[]])

export const _2022_SEP = prepare(30, seedShuffle([
  ['naan4', ''],
  ['kyun4', ''],
  ['ding2', ''],
  ['ceon1', ''],
  ['daai2', ''],
  ['zok6', ''],
  ['hip3', ''],
  ['zuk6', ''],
  ['long5', ''],
  ['gwai3', ''],
  ['jau3', ''],
  ['coeng4', ''],
  ['wu1', ''],
  ['giu2', ''],
  ['giu1', ''],
  ['fei1', ''],
  ['fu4', ''],
  ['seoi2', ''],
  ['zim6', ''],
  ['ngaan6', ''],
  ['lau4', ''],
  ['fui3', ''],
  ['gou3', ''],
  ['zeon3', ''],
  ['coi4', ''],
  ['gwo1', ''],
  ['doi6', ''],
  ['caap3', ''],
  ['sin3', ''],
  ['tim1', ''],
], '2022-09'))

export const _2022_OCT = prepare(31, seedShuffle([
  ['naan4', ''],
  ['kyun4', ''],
  ['ding2', ''],
  ['ceon1', ''],
  ['daai2', ''],
  ['zok6', ''],
  ['hip3', ''],
  ['zuk6', ''],
  ['long5', ''],
  ['gwai3', ''],
  ['jau3', ''],
  ['coeng4', ''],
  ['wu1', ''],
  ['giu2', ''],
  ['giu1', ''],
  ['fei1', ''],
  ['fu4', ''],
  ['seoi2', ''],
  ['zim6', ''],
  ['ngaan6', ''],
  ['lau4', ''],
  ['fui3', ''],
  ['gou3', ''],
  ['zeon3', ''],
  ['coi4', ''],
  ['gwo1', ''],
  ['doi6', ''],
  ['caap3', ''],
  ['sin3', ''],
  ['tim1', ''],
  ['koeng4', ''],
], '2022-10'))

export const _2022_NOV = prepare(30, seedShuffle([
  ['zau1', ''],
  ['huk6', ''],
  ['gwaan1', ''],
  ['kêu5', ''],
  ['hou2', ''],
  ['sau2', ''],
  ['zing6', ''],
  ['jim6', ''],
  ['zêu3', ''],
  ['saai2', ''],
  ['hon6', ''],
  ['pou2', ''],
  ['tiu1', ''],
  ['mou4', ''],
  ['cam4', ''],
  ['gaai1', ''],
  ['bin6', ''],
  ['joek3', ''],
  ['baan1', ''],
  ['lin4', ''],
  ['coi3', ''],
  ['tai4', ''],
  ['mo1', ''],
  ['gaam2', ''],
  ['wut6', ''],
  ['zing1', ''],
  ['dyun2', ''],
  ['leon6', ''],
  ['loi4', ''],
  ['hok6', ''],
], '2022-11'))

export const _2022_DEC = prepare(31, seedShuffle([
  ['cyu5', ''],
  ['waa6', ''],
  ['soek3', ''],
  ['hon3', ''],
  ['jyu1', ''],
  ['jung6', ''],
  ['??', ''],
  ['ji5', ''],
  ['ning4', ''],
  ['oi3', ''],
  ['gaau2', ''],
  ['jing1', ''],
  ['mai6', ''],
  ['sap6', ''],
  ['caak3', ''],
  ['jing3', ''],
  ['fong4', ''],
  ['ngai4', ''],
  ['sung3', ''],
  ['si2', ''],
  ['sin1', ''],
  ['gaai3', ''],
  ['zyu3', ''],
  ['hyun2', ''],
  ['gaan1', ''],
  ['gan2', ''],
  ['kiu2', ''],
  ['zang1', ''],
  ['bat6', ''],
  ['si5', ''],
  ['sap1', ''],
], '2022-12'))

export const answers: string[][] = [
  ..._PRE,
  ..._2022_SEP,
  ..._2022_OCT,
  ..._2022_NOV,
  ..._2022_DEC,
]

// duplicated check
if (import.meta.hot) {
  // dynamic import since it is during the runtime
  const { checkValidPinyin } = await import('../logic')
  const map = new Map<string, number>()
  answers.forEach((a, i) => {
    if (!a[0])
      return
    if (!map.has(a[0]))
      map.set(a[0], i)
    else
      // throw new Error(`Word ${a[0]} is duplicated at ${map.get(a[0])}`)
      if (a[1] && !a[0].includes(a[1]))
        throw new Error(`Hint ${a[1]} is not included in ${a[0]}`)
    if (!checkValidPinyin(a[0], 'cantonese'))
      throw new Error(`${a[0]} is not a valid pinyin`)
  })
}
