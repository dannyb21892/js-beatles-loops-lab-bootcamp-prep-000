function theBeatlesPlay(musicians, instruments) {
  var whoplayswhat = [];
  for (let i = 0, i<musicians.length, i++) {
    whoplayswhat[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return whoplayswhat
}