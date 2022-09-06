import { toSimplified } from '@hankit/tools'
import IdiomPinyinDictRaw from '../data/总成语表.json'

export const IdiomPinyinDict = IdiomPinyinDictRaw as Record<string, string>

export function getIdiom(word: string): [string, string | undefined] | undefined {
  const simplified = toSimplified(word)
  if (IdiomPinyinDict[word])
    return [word, IdiomPinyinDict[word]]
  if (IdiomPinyinDict[simplified])
    return [simplified, IdiomPinyinDict[simplified]]
  return undefined
}

export function getPinyin(word: string) {
  const data = getIdiom(word)
  const parts = data?.[1]
    ? data[1].split(/\s+/g)
    : [] // 在汉兜中，即便某词语不在词库中，输入该词仍然会预览其拼音，故需借助getpinyinraw返回拼音，但反切汉兜直接取消麻烦的拼音显示，故此处不必。为不破坏代码整体，这里仅返回空表。
  // https://baike.baidu.com/item/%E6%B1%89%E8%AF%AD%E6%8B%BC%E9%9F%B3%E6%96%B9%E6%A1%88/1884432
  // 将jqxy后的u还原为v
  return parts.map(i => i
    .replace(/^(y|j|q|x)u([a-z]*[0-9]?)$/g, '$1v$2'),
  )
}
