module.exports = function check(str, bracketsConfig) {
  // your solution

  let data=str.split('');
  let answer=true;
  
  for (let i=0, lenghtI=data.length; i<lenghtI+1; i++) {
    for (let j=0, lenghtJ=data.length; j<lenghtJ; j++) {
      for (let k=0, lenghtK=bracketsConfig.length; k<lenghtK; k++) {
        let openBracket=bracketsConfig[k][0];
        let closeBracket=bracketsConfig[k][1];
        if ((openBracket===data[j])&&(closeBracket===data[j+1])) {
          data.splice(j,2);
        }
      }
    }
  }
  if (data.length>0) {
    answer=false
  }
  return answer;
}
