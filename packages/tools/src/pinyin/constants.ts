import pinyin from 'pinyin'
import { createSemanticDiagnosticsBuilderProgram } from 'typescript'

export const pinyinInitials = 'b p m f d t n l g k h j q x zh ch sh r z c s w y'.split(' ')
export const pinyinFinals = 'a ai an ang ao e ei en eng er i ia ian iang iao ie in ing iong iu o ong ou u ua uai uan uang ui un uo v van ve vn'.split(' ')

export const pinyinInitialsStrict = 'b p m f d t n l g k h j q x zh ch sh r z c s'.split(' ')
export const pinyinFinalsStrict = 'a ai an ang ao e ei en eng er i ia ian iang iao ie in ing iong iou o ong ou u ua uai uan uang uei uen ueng uo v van ve vn'.split(' ')

export const pinyinInitialsTable = {
    b_group: ['b', 'p', 'm', 'f'],
    d_group: ['d', 't', 'n', 'l'],
    g_group: ['g', 'k', 'h'],
    j_group: ['j', 'q', 'x'],
    zh_group: ['zh', 'ch', 'sh', 'r'],
    z_group: ['z', 'c', 's'],
    zero_group: ['Ø'],
}

export const pinyinFinalsTable = {
    single_group: ['a', 'o', 'e', 'i', 'u', 'v'],
    double_group: ['ai', 'ei', 'ao', 'ou', 'er', 'ia', 'ie', 'iao', 'iou', 'ua', 'uo', 'uai', 'uei', 've'],
    nasal_group: ['an', 'ang', 'en', 'eng', 'ong', 'in', 'ian', 'ing', 'iang', 'iong', 'uan', 'uen', 'uang', 'ueng', 'van', 'vn'],
    zero_group: ['a', 'o', 'e', 'ai', 'ei', 'ao', 'ou', 'er', 'an', 'en', 'ang', 'eng', 'ong'],
    i_group: ['i', 'ia', 'ie', 'iao', 'iou', 'ian', 'in', 'ing', 'iang', 'iong'],
    u_group: ['u', 'ua', 'uo', 'uai', 'uei', 'uan', 'uen', 'uang', 'ueng'],
    v_group: ['v', 've', 'van', 'vn'],
}

// console.log(pinyinFinalsTable.single_group.length + pinyinFinalsTable.double_group.length + pinyinFinalsTable.nasal_group.length)
// console.log(pinyinFinalsTable.zero_group.length + pinyinFinalsTable.i_group.length + pinyinFinalsTable.u_group.length + pinyinFinalsTable.v_group.length)
// console.log(pinyinFinals.length)
// console.log(pinyinFinalsStrict.length)
