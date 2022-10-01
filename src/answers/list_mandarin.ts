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
  ['mao2', '寄托哀思'],
  ['qiao3', ''],
  ['san4', ''],
  ['fei2', ''],
  ['kuang1', ''],
  ['qian1', ''],
  ['jun1', ''],
  ['nie1', ''],
  ['e2', ''],
  ['dao3', ''],
  ['zheng1', ''],
  ['ben1', ''],
  ['ci3', ''],
  ['yin3', ''],
  ['e1', ''],
  ['you3', ''],
  ['tan1', ''],
  ['mei2', ''],
  ['yong4', ''],
  ['hun1', ''],
  ['mo1', ''],
  ['zhu1', ''],
  ['gan3', ''],
  ['nang2', ''],
  ['hu4', ''],
  ['zu2', ''],
  ['nan2', ''],
  ['bang1', ''],
  ['hong2', ''],
  ['xing1', ''],
], '2022-09'))

export const _2022_OCT = prepare(31, seedShuffle([
  ['sha1', ''],
  ['song3', ''],
  ['ming2', ''],
  ['xuan4', ''],
  ['cui4', ''],
  ['yin3', ''],
  ['bie2', ''],
  ['hua2', '国庆快乐'],
  ['zhan4', ''],
  ['zhong4', ''],
  ['duo1', ''],
  ['dang4', ''],
  ['que4', ''],
  ['gen1', ''],
  ['ge1', ''],
  ['chen2', ''],
  ['tian1', ''],
  ['zei2', ''],
  ['hai4', ''],
  ['da3', ''],
  ['re4', ''],
  ['chou4', ''],
  ['ruan3', ''],
  ['guo3', ''],
  ['la4', ''],
  ['nong4', ''],
  ['nie4', ''],
  ['yan2', ''],
  ['shang4', ''],
  ['ding1', ''],
  ['nan2', ''],
], '2022-10'))

export const _2022_NOV = prepare(30, seedShuffle([
  ['huang2', ''],
  ['yao1', ''],
  ['xing4', ''],
  ['cun1', ''],
  ['dan3', ''],
  ['xiong2', ''],
  ['wu1', ''],
  ['wei4', ''],
  ['cuo4', ''],
  ['da1', ''],
  ['ren4', ''],
  ['mi2', ''],
  ['zheng4', ''],
  ['mei3', ''],
  ['zhu4', ''],
  ['sui2', ''],
  ['dian1', ''],
  ['guai1', ''],
  ['ti1', ''],
  ['cheng3', ''],
  ['chou2', ''],
  ['zhe3', ''],
  ['ye3', ''],
  ['tu2', ''],
  ['jia4', ''],
  ['sen1', ''],
  ['ma2', ''],
  ['jiang1', ''],
  ['zhou3', ''],
  ['bie1', ''],
], '2022-11'))

export const _2022_DEC = prepare(31, seedShuffle([
  ['shuo4', ''],
  ['wang1', ''],
  ['lin2', ''],
  ['ba2', ''],
  ['deng3', ''],
  ['suo3', ''],
  ['lang4', ''],
  ['liao4', ''],
  ['liu4', ''],
  ['yan4', ''],
  ['piao1', ''],
  ['sou3', ''],
  ['he2', ''],
  ['jie4', ''],
  ['dong1', ''],
  ['quan1', ''],
  ['yang4', ''],
  ['zhi2', ''],
  ['yong1', ''],
  ['zhan1', ''],
  ['guan1', ''],
  ['fei2', ''],
  ['tao2', ''],
  ['di2', ''],
  ['lv2', ''],
  ['chai2', ''],
  ['dai4', ''],
  ['shi2', ''],
  ['bi2', ''],
  ['qian2', ''],
  ['gu1', ''],

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
    if (!checkValidPinyin(a[0], 'mandarin'))
      throw new Error(`${a[0]} is not a valid pinyin`)
  })
}
