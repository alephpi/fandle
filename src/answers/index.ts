import type { DictType } from '../logic'
import { getHint } from '../logic'
import { answers as answersMandarin } from './list_mandarin'
import { answers as answersCantonese } from './list_cantonese'
export function getAnswerOfDay(day: number, mode: DictType) {
  let [word, hint] = ['', '']
  if (mode === 'cantonese')
    [word = '', hint = ''] = answersCantonese[day] || []
  else
    [word = '', hint = ''] = answersMandarin[day] || []
  return {
    word,
    hint: hint || getHint(word),
  }
}
