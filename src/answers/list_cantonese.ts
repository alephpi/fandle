/**
 * SPOILERS
 *
 * This file contains the list of answers for the game. It's not recommended to continue reading this file.
 *
 * 作弊警告
 *
 * 该文件包含了游戏的答案列表。不建议继续阅读。
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

import { seedShuffle } from './utils'

function prepare<T>(len: number, arr: T[]) {
  if (import.meta.hot && arr.length !== len)
    throw new Error(`expect array length ${arr.length} to be ${len}`)
  return arr
}

export const _PRE = prepare(1, [[]])

export const _2022_SEP = prepare(30, seedShuffle([
  ['naan4', ''],
  ['kyun4', ''],
  ['ding2', ''],
  ['ceon1', ''],
  ['daai2', ''],
  ['zok6', ''],
  ['hip3', ''],
  ['zuk6', ''],
  ['long5', ''],
  ['gwai3', ''],
  ['jau3', ''],
  ['coeng4', ''],
  ['wu1', ''],
  ['giu2', ''],
  ['giu1', ''],
  ['fei1', ''],
  ['fu4', ''],
  ['seoi2', ''],
  ['zim6', ''],
  ['ngaan6', ''],
  ['lau4', ''],
  ['fui3', ''],
  ['gou3', ''],
  ['zeon3', ''],
  ['coi4', ''],
  ['gwo1', ''],
  ['doi6', ''],
  ['caap3', ''],
  ['sin3', ''],
  ['tim1', ''],
], '2022-09'))

export const _2022_OCT = prepare(31, seedShuffle([
  ['财运亨通', '亨'],
  ['胡思乱想', '思'],
  ['神乎其技', '其'],
  ['金榜题名', '名'],
  ['将心比心', '心'],
  ['子虚乌有', '子'],
  ['不堪回首', '堪'],
  ['重蹈覆辙', '重'],
  ['一本正经', '一'],
  ['尽力而为', '为'],
  ['祸起萧墙', '起'],
  ['和颜悦色', '色'],
  ['伤天害理', '害'],
  ['情窦初开', '开'],
  ['鸡飞狗跳', '跳'],
  ['有备无患', '备'],
  ['巧言令色', '色'],
  ['心花怒放', '心'],
  ['衣冠禽兽', '冠'],
  ['破烂不堪', '堪'],
  ['坐享其成', '成'],
  ['金石为开', '开'],
  ['答非所问', '问'],
  ['夜半三更', '三'],
  ['暮鼓晨钟', '钟'],
  ['大浪淘沙', '大'],
  ['因时制宜', '因'],
  ['富甲一方', '一'],
  ['唯命是从', '是'],
  ['根深蒂固', '根'],
  ['死而后已', '已'],
], '2022-10'))

export const _2022_NOV = prepare(30, seedShuffle([
  ['逢场作戏', '戏'],
  ['花开富贵', '贵'],
  ['浅尝辄止', '尝'],
  ['火烧眉毛', '烧'],
  ['信手拈来', '来'],
  ['四大皆空', '大'],
  ['春风满面', '满'],
  ['守株待兔', '守'],
  ['凤毛麟角', '毛'],
  ['云淡风轻', '淡'],
  ['安然无恙', '安'],
  ['出人头地', '人'],
  ['前仆后继', '后'],
  ['别具匠心', '具'],
  ['一决雌雄', '决'],
  ['触类旁通', '旁'],
  ['骄奢淫逸', '骄'],
  ['呼朋唤友', '唤'],
  ['无济于事', '于'],
  ['举世无双', '无'],
  ['拭目以待', '以'],
  ['稀里糊涂', '稀'],
  ['保家卫国', '家'],
  ['青红皂白', '青'],
  ['地久天长', '久'],
  ['骑虎难下', '下'],
  ['物竞天择', '天'],
  ['刻不容缓', '缓'],
  ['闭月羞花', '闭'],
  ['人面兽心', '面'],
], '2022-11'))

export const _2022_DEC = prepare(31, seedShuffle([
  ['感人肺腑', '人'],
  ['求之不得', '得'],
  ['左顾右盼', '左'],
  ['峰回路转', '回'],
  ['手足无措', '措'],
  ['抽丝剥茧', '剥'],
  ['功成名就', '功'],
  ['大义凛然', '大'],
  ['陈词滥调', '陈'],
  ['舍本逐末', '逐'],
  ['妙笔生花', '笔'],
  ['乌合之众', '乌'],
  ['吃里爬外', '吃'],
  ['如雷贯耳', '雷'],
  ['昏天黑地', '黑'],
  ['疑神疑鬼', '疑'],
  ['感同身受', '受'],
  ['四分五裂', '分'],
  ['不同凡响', '同'],
  ['心有灵犀', '灵'],
  ['书香世家', '香'],
  ['如愿以偿', '偿'],
  ['曲水流觞', '水'],
  ['脱口而出', '出'],
  ['海纳百川', '纳'],
  ['众矢之的', '之'],
  ['道貌岸然', '貌'],
  ['郁郁寡欢', '郁'],
  ['呆若木鸡', '呆'],
  ['装疯卖傻', '装'],
  ['山高水长', '山'],
], '2022-12'))

export const answers: string[][] = [
  ..._PRE,
  ..._2022_SEP,
  // ..._2022_OCT,
  // ..._2022_NOV,
  // ..._2022_DEC,
]

// duplicated check
if (import.meta.hot) {
  // dynamic import since it is during the runtime
  const { checkValidPinyin } = await import('../logic')
  const map = new Map<string, number>()
  answers.forEach((a, i) => {
    if (!a[0])
      return
    if (!map.has(a[0]))
      map.set(a[0], i)
    else
      // throw new Error(`Word ${a[0]} is duplicated at ${map.get(a[0])}`)
      if (a[1] && !a[0].includes(a[1]))
        throw new Error(`Hint ${a[1]} is not included in ${a[0]}`)
    if (!checkValidPinyin(a[0]))
      throw new Error(`${a[0]} is not a valid pinyin`)
  })
}
