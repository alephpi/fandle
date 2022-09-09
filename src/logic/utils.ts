import seedrandom from 'seedrandom'
import { pinyinInitials, pinyinInitialsStrict } from '@hankit/tools'
import PinyinFreqPerIdiom from '../data/py_freq_per_idiom.json'
import type { MatchResult, ParsedChar, ParsedPinyin, PinyinStyle } from './types'
import { getPinyin } from './idioms'
import { EXAMPLE_NUMBERS } from './constants'

export function parsePinyin(pinyin: string, pyStyle = 'plain') {
  const tone = pinyin.match(/[\d]$/)?.[0] || ''
  const rawpinyin = pinyin
  if (tone)
    pinyin = pinyin.slice(0, -tone.length).trim()

  let parts: string[] = []

  if (pyStyle === 'plain') {
    if (pinyin) {
      let rest = pinyin
      const one = pinyinInitials.find(i => rest.startsWith(i))
      if (one)
        rest = rest.slice(one.length)
      parts = [one, rest].filter(Boolean) as string[]
    }
  }
  // otherwise equal to strict
  else {
    if (pinyin) {
      let rest = pinyin
      const one = pinyinInitialsStrict.find(i => rest.startsWith(i))
      if (one)
        rest = rest.slice(one.length)
      rest = rest.replace(/yv/, 'v').replace(/yi?/, 'i').replace(/wu?/, 'u').replace(/iu/, 'iou').replace(/ui/, 'uei').replace(/un/, 'uen')
      parts = [one, rest].filter(Boolean) as string[]
    }
  }
  // 现在始终有拼音了，因为我提供了总表

  // if there is no final, actually it's no intital
  if (parts[0] && !parts[1]) {
    parts[1] = parts[0]
    parts[0] = ''
  }

  const [one, two] = parts

  return {
    _shengmu: one,
    _yunmu: two,
    _diao: tone,
    rawpinyin,
  }
}

function parseChar(char: string, pinyin: string, pyStyle?: PinyinStyle): ParsedChar {
  return {
    char,
    parsedPinyin: parsePinyin(pinyin, pyStyle),
  }
}

export function parseWord(word: string, answer?: string, pyStyle?: PinyinStyle) {
  const pinyins = getPinyin(word)
  const chars = Array.from(word)
  // const answerPinyin = answer ? getPinyin(answer) : undefined

  return chars.map((char, i): ParsedChar => {
    // this '' is in case that word is empty (when rendering a new blank word block)
    const pinyin = pinyins[i] || ''
    return parseChar(char, pinyin, pyStyle)
  })
}

export function parseAnswer(answer: string, pyStyle?: PinyinStyle) {
  return parsePinyin(answer, pyStyle)
}

export function testAnswer(input: ParsedChar[], answer: ParsedPinyin) {
  return input.map((char): MatchResult => {
    // const char = toSimplified(a.char)
    const a = char.parsedPinyin
    const shengmu = a._shengmu === answer._shengmu
    const yunmu = a._yunmu === answer._yunmu
    const diao = a._diao === answer._diao
    return {
      _shengmu: shengmu,
      _yunmu: yunmu,
      _diao: diao,
      yin: shengmu && yunmu && diao
        ? 'matchAll'
        : (shengmu && yunmu && !diao) || (shengmu && !yunmu && diao) || (!shengmu && yunmu && diao)
          ? 'match2'
          : (shengmu && !yunmu && !diao) || (!shengmu && yunmu && !diao) || (!shengmu && !yunmu && diao)
            ? 'match1'
            : 'miss',
    }
  })
}

export function checkPass(result: MatchResult[]) {
  // 只要有一个中就通过
  return result.some(r => r.yin === 'matchAll')
}

export function getHint(word: string) {
  // hint is the tone
  return word.slice(-1)
}

export function getAnswerStatistics(answer: keyof typeof PinyinFreqPerIdiom) {
  return PinyinFreqPerIdiom[answer].freq
}

export function getAnswerExamples(answer: keyof typeof PinyinFreqPerIdiom) {
  const examples = PinyinFreqPerIdiom[answer].examples
  return examples.sort(() => 0.5 - Math.random()).slice(0, EXAMPLE_NUMBERS)
}
const numberChar = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
const tens = ['', '十', '百', '千']

export function numberToHanzi(number: number) {
  const digits = Array.from(number.toString()).map(i => +i)
  const chars = digits.map((i, idx) => {
    const unit = i !== 0 ? tens[digits.length - 1 - idx] : ''
    return numberChar[i] + unit
  })
  const str = chars.join('')
  return str
    .replace(/零+/, '零')
    .replace(/(.)零$/, '$1')
}

/**
* Checks whether a given date is in daylight saving time.
* @param date the date object to be checked.
* @returns true if the date is in daylight saving time, false if it's not.
*/
export function isDstObserved(date: Date) {
  const jan = new Date(date.getFullYear(), 0, 1)
  const jul = new Date(date.getFullYear(), 6, 1)
  const standardTimezoneOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset())
  return date.getTimezoneOffset() < standardTimezoneOffset
}
