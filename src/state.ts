import { breakpointsTailwind } from '@vueuse/core'
import type { DictType, ParsedChar } from './logic'
import { START_DATE, TRIES_LIMIT, parseAnswer as _parseAnswer, parseWord as _parseWord, testAnswer as _testAnswer, checkPass, getHint, isDstObserved, numberToHanzi } from './logic'
import { dictType, meta, pinyinStyle, tries } from './storage'
import { getAnswerOfDay } from './answers'

export const isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
export const isMobile = isIOS || /iPad|iPhone|iPod|Android|Phone|webOS/i.test(navigator.userAgent)
export const breakpoints = useBreakpoints(breakpointsTailwind)

export const now = useNow({ interval: 1000 })
export const isDark = useDark()
export const showHint = ref(false)
export const showSettings = ref(false)
export const showHelp = ref(false)
export const showShare = ref(false)
export const showFailed = ref(false)
export const showDashboard = ref(false)
export const showVariants = ref(false)
export const showCheatSheet = ref(false)
export const showPrivacyNotes = ref(false)
export const showShareDialog = ref(false)
export const useMask = ref(false)

const params = new URLSearchParams(window.location.search)
export const isDev = import.meta.hot || params.get('dev') === 'hey'
export const daySince = useDebounce(computed(() => {
  // Adjust date for daylight saving time, assuming START_DATE is not in DST
  const adjustedNow = isDstObserved(now.value) ? new Date(+now.value + 3600000) : now.value
  return Math.floor((+adjustedNow - +START_DATE) / 86400000)
}))
export const dayNo = ref(+(params.get('d') || daySince.value))
export const dayNoHanzi = computed(() => `${numberToHanzi(dayNo.value)}日`)
// params.get('word') is used for debugging, in particular, put word = [a given pinyin] then it can be assigned to it
export const answer = computed(() =>
  params.get('word')
    ? {
      word: params.get('word')!,
      hint: getHint(params.get('word')!),
    }
    : getAnswerOfDay(dayNo.value, dictType.value),
)

export const hint = computed(() => answer.value.hint)
// need to restore the strict spelling, i.e. u after j q x y should be v, o after b p m f should be uo.
export const parsedAnswer = computed(() => parseAnswer(answer.value.word, dictType.value))

// if not cached, checkPass the last try, isPassed is defined and catched by watchEffect in init.ts, hence cached by meta.
// meta.value.passed is computed from cache, so if refresh page, isPassed is set to meta.value.passed.
export const isPassed = computed(() => meta.value.passed || (tries.value.length && checkPass(testAnswer(parseWord(tries.value[tries.value.length - 1], dictType.value)))))
// failed only when not passed and tries exceeds limit, notice game can continue when limit is exceeded so can still passed.
export const isFailed = computed(() => !isPassed.value && tries.value.length >= TRIES_LIMIT)
// isFinished is Passed or is failed(reveal the answer)
export const isFinished = computed(() => isPassed.value || meta.value.answer)

export function parseAnswer(answer: string, mode: DictType, pyStyle = pinyinStyle.value) {
  if (mode === 'cantonese')
    return _parseAnswer(answer, mode)
  else
    return _parseAnswer(answer.replace(/^(y|j|q|x)u([a-z]*[0-9]?)$/g, '$1v$2').replace(/^(b|p|m|f)o([0-9]?)$/g, '$1uo$2'), mode, pyStyle)
}

export function parseWord(word: string, mode: DictType, _ans = answer.value.word, pyStyle = pinyinStyle.value) {
  return _parseWord(word, mode, _ans, pyStyle)
}

export function testAnswer(word: ParsedChar[], ans = parsedAnswer.value) {
  return _testAnswer(word, ans)
}

export const parsedTries = computed(() => tries.value.map((i) => {
  const word = parseWord(i, dictType.value)
  const result = testAnswer(word)
  return {
    word,
    result,
  }
}))

