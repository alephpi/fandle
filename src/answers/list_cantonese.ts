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
import { answer_list_cantonese } from './answer_list_raw_cantonese'
export const answers = answer_list_cantonese

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
    // else
    // throw new Error(`Word ${a[0]} is duplicated at ${map.get(a[0])}`)
    if (a[1] && !a[0].includes(a[1]))
      throw new Error(`Hint ${a[1]} is not included in ${a[0]}`)
    if (!checkValidPinyin(a[0], 'cantonese'))
      throw new Error(`${a[0]} is not a valid pinyin`)
  })
}
