import PinyinRaw from '../data/answers.txt?raw'
import { WORD_LENGTH } from './constants'
import { getIdiom } from './idioms'

const PinyinList = PinyinRaw.split('\n').map(i => i.trim())
export function filterNonChineseChars(input: string) {
  return Array.from(input)
    .filter(i => /\p{Script=Han}/u.test(i))
    .slice(0, WORD_LENGTH)
    .join('')
}

export function checkValidIdiom(word: string) {
  return !!getIdiom(word)
}

export function checkValidPinyin(pinyin: string) {
  return PinyinList.includes(pinyin)
}
