import PinyinRawMandarin from '../data/answers_mandarin.txt?raw'
import PinyinRawCantonese from '../data/answers_cantonese.txt?raw'
import { WORD_LENGTH } from './constants'
import { getIdiom } from './idioms'
import type { DictType } from './types'
// import { dictType } from '~/storage'

const PinyinListCantonese = PinyinRawCantonese.split('\n').map(i => i.trim())
const PinyinListMandarin = PinyinRawMandarin.split('\n').map(i => i.trim())

export function filterNonChineseChars(input: string) {
  return Array.from(input)
    .filter(i => /\p{Unified_Ideograph}/u.test(i))
    .slice(0, WORD_LENGTH)
    .join('')
}

export function checkValidIdiom(word: string, mode: DictType) {
  return !!getIdiom(word, mode)
}

export function checkValidPinyin(pinyin: string, mode: DictType) {
  if (mode === 'cantonese')
    return PinyinListCantonese.includes(pinyin)
  else
    return PinyinListMandarin.includes(pinyin)
}
