function getFirstSelector(selector) {
 return  document.querySelector(selector)
  
}

function nestedTarget() {
  
 return  document.querySelector('#nested .target')
  
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('ul.ranked-list li')
 
for (let i = 0; i < ranks.length; i++) {
  ranks[i].innerHTML = parseInt(ranks[i].innerHTML) +n
}
}


function deepestChild() {
 var lis=document.getElementById("grand-node").querySelectorAll("div");
 var test;
for(let i=0;i<lis.length-1;i++) {
    test = lis[i].querySelector('div') ;
  }
  return test;}