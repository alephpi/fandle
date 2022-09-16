export type PinyinStyle = 'plain' | 'strict'
export type DictType = 'mandarin' | 'cantonese'
export type MatchType = 'matchAll' | 'match2' | 'match1' | 'miss'

export interface ParsedChar {
  char: string
  parsedPinyin: ParsedPinyin
}

export interface ParsedPinyin {
  _shengmu: string
  _yunmu: string
  _diao: string
  rawpinyin: string
}
export interface MatchResult {
  // char: MatchType
  _shengmu: boolean
  _yunmu: boolean
  _diao: boolean
  yin: MatchType
}

export interface TriesMeta {
  answer?: boolean
  start?: number
  end?: number
  duration?: number
  failed?: boolean
  passed?: boolean
  tries?: string[]
  hintType?: number // 0 for no hint, 1 for hint initial, 2 for hint middle, 3 for hint final, 4 for hint inital and middle, 5 for hint inital and final, 6 for hint middle and final, 7 for hint initial, middle and final.
  strict?: boolean
  sent?: boolean
}

