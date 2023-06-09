import seedrandom from 'seedrandom'
import type { DictType } from '../logic'
import { getHint } from '../logic'
import { answers as answersMandarin } from './list_mandarin'
import { answers as answersCantonese } from './list_cantonese'
export function getAnswerOfDay(day: number, mode: DictType) {
  let [word, hint] = ['', '']
  const seed = seedrandom(`day-${day}`)()
  if (mode === 'cantonese') {
    if (day >= answersCantonese.length)
      [word = '', hint = ''] = answersCantonese[Math.floor(seed * answersCantonese.length)] || []
    else
      [word = '', hint = ''] = answersCantonese[day] || []
  }
  else {
    if (day >= answersMandarin.length)
      [word = '', hint = ''] = answersMandarin[Math.floor(seed * answersMandarin.length)] || []
    else
      [word = '', hint = ''] = answersMandarin[day] || []
  }
  return {
    word,
    hint: hint || getHint(word),
  }
}
