function avrage (a,b,c,d,e){
const sum = a + b + c + d + e
const avg = sum/5
if(avg<12 ){console.log(failed)}
return avg
}
const score1 = +prompt('add an score')
const score2 = +prompt('add an score')
const score3= +prompt('add an score')
const score4 = +prompt('add an score')
const score5 = +prompt('add an score')
console.log(avrage (score1, score2 ,score3, score4 , score5,))