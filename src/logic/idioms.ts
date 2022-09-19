import { toSimplified } from '@hankit/tools'

import IdiomMandarinPinyinDictRaw from '../data/总成语表.json'
import IdiomCantonesePinyinDictRaw from '../data/粤语成语表（香港拼音）.json'
import type { DictType } from './types'

export const IdiomMandarinPinyinDict = IdiomMandarinPinyinDictRaw as Record<string, string>
export const IdiomCantonesePinyinDict = IdiomCantonesePinyinDictRaw as Record<string, string>

export function getIdiom(word: string, mode?: DictType) {
  if (mode === 'cantonese')
    return getIdiomFromDict(word, IdiomCantonesePinyinDict)
  else
    return getIdiomFromDict(word, IdiomMandarinPinyinDict)
}

function getIdiomFromDict(word: string, idiomPinyinDict: Record<string, string> = IdiomMandarinPinyinDict): [string, string | undefined] | undefined {
  const simplified = toSimplified(word)
  if (idiomPinyinDict[word])
    return [word, idiomPinyinDict[word]]
  if (idiomPinyinDict[simplified])
    return [simplified, idiomPinyinDict[simplified]]
  return undefined
}

export function getPinyin(word: string, mode: DictType) {
  const data = getIdiom(word, mode)
  const parts = data?.[1]
    ? data[1].split(/\s+/g)
    : [] // 在汉兜中，即便某词语不在词库中，输入该词仍然会预览其拼音，故需借助getpinyinraw返回拼音，但反切汉兜直接取消麻烦的拼音显示，故此处不必。为不破坏代码整体，这里仅返回空表。
  // https://baike.baidu.com/item/%E6%B1%89%E8%AF%AD%E6%8B%BC%E9%9F%B3%E6%96%B9%E6%A1%88/1884432
  // parsing cantonese pinyin
  if (mode === 'cantonese')
    return parts

  // parsing mandarin pinyin
  else
    // 将jqxy后的u还原为v, bpmf后的o还原为uo
    return parts.map(i => i.replace(/^(y|j|q|x)u([a-z]*[0-9]?)$/g, '$1v$2').replace(/^(b|p|m|f)o([0-9]?)$/g, '$1uo$2'))
}
