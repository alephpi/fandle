import { breakingUpdate, initialized, markEnd, markStart, meta, pauseTimer } from './storage'
import { dayNo, daySince, isDev, isFinished, isPassed, showCheatSheet, showHelp } from './state'
import { t } from './i18n'
// import { sendAnalytics } from './analytics'
import { getAnswerOfDay } from './answers'
import { answers as answersMandarin } from './answers/list_mandarin'
import { answers as answersCantonese } from './answers/list_cantonese'
import { START_DATE } from './logic/constants'
import { tryFixAnswer } from './logic/answer-fix'
import type { DictType } from './logic'

useTitle(computed(() => `${t('name')} - ${t('description')}`))

if (!initialized.value)
  showHelp.value = true

watchEffect(() => {
  if (isPassed.value)
    meta.value.passed = true
})

watch(daySince, (n, o) => {
  // on day changed
  if (o === dayNo.value && isFinished.value)
    dayNo.value = n
})

watch([isFinished, meta], () => {
  if (isFinished.value)
    markEnd()
  // sendAnalytics()
}, { flush: 'post' })

watch(isFinished, (v) => {
  if (v)
    showCheatSheet.value = false
}, { flush: 'post' })

const visible = useDocumentVisibility()

let leaveTime = 0
const REFRESH_TIME = 1000 * 60 * 60 * 3 // 3 hours
watchEffect(() => {
  if (visible.value === 'visible') {
    // left for a long while, refresh the page for updates
    if (leaveTime && Date.now() - leaveTime > REFRESH_TIME)
      location.reload()

    // restart timer
    if (meta.value.duration)
      markStart()
  }
  else if (visible.value === 'hidden') {
    leaveTime = Date.now()
    pauseTimer()
  }
}, { flush: 'post' })

nextTick(() => {
  // if (acceptCollecting.value)
  //   sendAnalytics()

  tryFixAnswer(dayNo.value)
})
function showAnswerInfo(mode: DictType) {
  let answerlist: string[][]
  const answer = getAnswerOfDay(dayNo.value, mode)
  if (mode === 'cantonese')
    answerlist = answersCantonese
  else
    answerlist = answersMandarin
  const theDate = new Date(+START_DATE + dayNo.value * 86400000)
  // eslint-disable-next-line no-console
  console.log(`D${dayNo.value}`, theDate.toLocaleDateString(), answer.word, answer.hint)
  // eslint-disable-next-line no-console
  console.log(`${answerlist.length} days prepared`)
  // eslint-disable-next-line no-console
  console.log(`${answerlist.length - dayNo.value} days left`)
  if ((answerlist.length - daySince.value) < 10)
    throw new Error('Not enough days left!')
}

if (isDev || import.meta.hot) {
  if (import.meta.hot) {
    showAnswerInfo('mandarin')
    showAnswerInfo('cantonese')
  }
}

