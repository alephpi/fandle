import { t } from './i18n'
import { dayNo } from './state'
import type { DictType, PinyinStyle, TriesMeta } from './logic'

// useStorage is cached hence kept when refreshing the pages
// cache all past tries indexed by day number
export const legacyTries = useStorage<Record<DictType, Record<number, string[]>>>('handle-tries', { mandarin: {}, cantonese: {} })
// cache all past meta data indexed by day number
export const history = useStorage<Record<DictType, Record<number, TriesMeta>>>('handle-tries-meta', { mandarin: {}, cantonese: {} })
// cache if it is the first time or not playing the game
export const initialized = useStorage('handle-initialized', false)
export const dictType = useStorage<DictType>('fandle-dict-type', 'mandarin')
export const pinyinStyle = useStorage<PinyinStyle>('fandle-pinyin-style', 'plain')
export const useNoHint = useStorage('handle-hard-mode', false)
export const useCheckAssist = useStorage('handle-check-assist', false)
export const acceptCollecting = useStorage('handle-accept-collecting', true)

// console.log(history.value)
// compute and cached today's meta data
export const meta = computed<TriesMeta>({
  get() {
    if (!(dayNo.value in history.value[dictType.value]))
      history.value[dictType.value][dayNo.value] = {}
    return history.value[dictType.value][dayNo.value]
  },
  set(v) {
    history.value[dictType.value][dayNo.value] = v
  },
})

// compute and cached today's try data
export const tries = computed<string[]>({
  get() {
    if (!meta.value.tries)
      meta.value.tries = []
    return legacyTries.value[dictType.value][dayNo.value] || meta.value.tries
  },
  set(v) {
    meta.value.tries = v
  },
})

export function markStart() {
  if (meta.value.end)
    return
  if (!meta.value.start)
    meta.value.start = Date.now()
}

export function markEnd() {
  if (meta.value.end)
    return

  if (!meta.value.duration)
    meta.value.duration = 0

  meta.value.end = Date.now()
  if (meta.value.start)
    meta.value.duration += meta.value.end - meta.value.start
}

export function pauseTimer() {
  if (meta.value.end)
    return

  if (!meta.value.duration)
    meta.value.duration = 0

  if (meta.value.start) {
    meta.value.duration += Date.now() - meta.value.start
    meta.value.start = undefined
  }
}

// played game has three status, passed(but may not finished) or finished(answered or failed)
export const gamesCount = computed(() => Object.values(history.value[dictType.value]).filter(m => m.passed || m.answer || m.failed).length)
export const passedTries = computed(() => Object.values(history.value[dictType.value]).filter(m => m.passed))
export const passedCount = computed(() => passedTries.value.length)
export const noHintPassedCount = computed(() => Object.values(history.value[dictType.value]).filter(m => m.passed && !m.hintType).length)
export const historyTriesCount = computed(() => Object.values(history.value[dictType.value]).filter(m => m.passed || m.answer || m.failed).map(m => m.tries?.length || 0).reduce((a, b) => a + b, 0))

export const triesCount = computed(() => tries.value.length)
export const averageDurations = computed(() => {
  const items = Object.values(history.value[dictType.value]).filter(m => m.passed && m.duration)
  if (!items.length)
    return 0
  const durations = items.map(m => m.duration!).reduce((a, b) => a + b, 0)
  return formatDuration(durations / items.length)
})

export function formatDuration(duration: number) {
  const ts = duration / 1000
  const m = Math.floor(ts / 60)
  const s = Math.floor(ts % 60)
  if (m)
    return m + t('minutes') + s + t('seconds')
  return s + t('seconds')
}
