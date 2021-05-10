import data from './billionaires.json'
import stringToColor from 'string-to-color'

let otherCounter = 0

interface ICountryCountPair {
  label: string
  value: number
  color: string
}

const ByCountry: ICountryCountPair[] = data.byCountry.reduce((acc, pair) => {
  if (pair.count >= 20) {
    acc.push({
      label: pair.country,
      value: pair.count,
      color: stringToColor(pair.country),
    })
  } else {
    otherCounter++
  }

  return acc
}, [])

ByCountry.push({
  label: 'Other',
  value: otherCounter,
  color: stringToColor('Other'),
})

export { ByCountry }
