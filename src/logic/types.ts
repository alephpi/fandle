export type PinyinStyle = 'plain' | 'strict'
export type MatchType = 'matchAll' | 'match2' | 'match1' | 'miss'

export interface ParsedChar {
  char: string
  _shengmu: string
  _yunmu: string
  _diao: string
  yin: string
}

export interface ParsedPinyin {
  _shengmu: string
  _yunmu: string
  _diao: string
  yin: string
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
  hint?: boolean
  hintLevel?: number
  strict?: boolean
  sent?: boolean
}

