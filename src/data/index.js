const states = require('./cities')
const abbr = require('./abbr')
const fs = require('fs')
let newAbbreviations = {}

Object.keys(abbr).forEach(key => {
  newAbbreviations[abbr[key]] = key
})

let alphabetizedDict = {};

let cityStates = []

Object.keys(states).forEach(state =>{
  var stateName = state
  let l = state.split("")[0]
  if(!alphabetizedDict[l]){
    alphabetizedDict[l] = [state]
  }
  else{
    alphabetizedDict[l].push(state)
  }

  states[state].forEach(city =>{
    let l2 = city.split("")[0];
    let string = `${city}, ${newAbbreviations[stateName]}`
    if(!alphabetizedDict[l2]){
    alphabetizedDict[l2] = [string]
  }
  else{
    alphabetizedDict[l2].push(string)
  }
  })
})


fs.writeFile('./src/data/cityState.js', JSON.stringify(alphabetizedDict), (err)=>{
  if(err) throw err;

  console.log('File Saved')
} )




