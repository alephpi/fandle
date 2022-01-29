import data from './data/data.json'

const len = data.length

const a = Array.from({ length: 100 }, () => data[Math.round(len * Math.random())].word)
  .map((w) => {
    return `'${w}',`
  })
  .join('\n')

console.log(a)