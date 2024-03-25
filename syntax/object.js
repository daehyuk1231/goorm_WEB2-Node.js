var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]); // k8805
var i = 0;
while(i < members.length){
  console.log('array loop', members[i]);
  i = i + 1;
}

var roles = {
  'programmer' : 'egoing',
  'designer' : 'k8805',
  'manager' : 'hoya'
}
console.log(roles.desiner); //k8805

for(var n in roles){
  console.log('object => ', n, 'value => ', roles[n]);
}
