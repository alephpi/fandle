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
    zero_group: ['a', 'o', 'e', 'i', 'u', 'v', 'ai', 'ei', 'ao', 'ou', 'er', 'an', 'en', 'ang', 'eng', 'ong'],
    i_group: ['ia', 'ie', 'iao', 'iou', 'ian', 'in', 'ing', 'iang', 'iong'],
    u_group: ['ua', 'uo', 'uai', 'uei', 'uan', 'uen', 'uang', 'ueng'],
    v_group: ['ve', 'van', 'vn'],
}

// put gw kw before to first match them, otherwise it will be matched as g and k.
export const pinyinInitialsCantonese = 'gw kw b p m f d t n l g k ng h z c s j w'.split(' ')
export const pinyinFinalsCantonese = 'aa aai aau aam aan aang aap aat aak ai au am an ang ap at ak u ui un ung ut uk o oi on ong ot ok e ei eng ek i iu im in ing ip it ik yu yun yut eoi eon eot oe oeng oek'.split(' ')

export const pinyinInitialsTableCantonese = {
    b_group: ['b', 'p', 'm', 'f'],
    d_group: ['d', 't', 'n', 'l'],
    g_group: ['g', 'k', 'ng', 'h'],
    z_group: ['z', 'c', 's', 'j'],
    w_group: ['gw', 'kw', 'w'],
    zero_group: ['Ø'],
}

export const pinyinFinalsTableCantonese = {
    aa_group: ['aa', 'aai', 'aau', 'aam', 'aan', 'aang', 'aap', 'aat', 'aak'],
    a_group: ['ai', 'au', 'am', 'an', 'ang', 'ap', 'at', 'ak'],
    u_group: ['u', 'ui', 'un', 'ung', 'ut', 'uk'],
    o_group: ['o', 'oi', 'on', 'ong', 'ot', 'ok'],
    e_group: ['e', 'ei', 'eng', 'ek'],
    i_group: ['i', 'iu', 'im', 'in', 'ing', 'ip', 'it', 'ik'],
    yu_group: ['yu', 'yun', 'yut'],
    eo_group: ['eoi', 'eon', 'eot'],
    oe_group: ['oe', 'oeng', 'oek'],
}
