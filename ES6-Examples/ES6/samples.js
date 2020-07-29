function runSamples() {
    console.log("Running Samples");
    sampleExamples();
    interviewSamples();
}


function interviewSamples() {
    function countingValleys(s) {
        let valleyCount = 0;
        let netVal = 0;
        for(var i=0; i<s.length; i++){
            if(s[i] === 'U'){
                netVal++;
                if(netVal === 0) {
                    valleyCount++;
                }
            } else {
                netVal--;
            }
        }
        console.log(valleyCount);
    }

    countingValleys('UDDDUDUU');


    function performSwap(initial, final) {
        let totalBribes = 0;
        let done = false;
        while(!done) {
            if(initial.length ==0) {
                done = true;
                break;
            }
            if(initial[0]!== final[0]) {
                let swapedItem = final[0];
                let indexInInitial = initial.indexOf(swapedItem);
                let noOfBribes = indexInInitial;
                if(noOfBribes > 2) {
                    totalBribes = -1;
                    done = true;
                } else if(noOfBribes > 0){
                    totalBribes = totalBribes + noOfBribes;
                    let swapedArr= initial.slice();
                    swapedArr.splice(indexInInitial,1);
                    swapedArr.unshift(swapedItem);
                    initial = swapedArr;
                } else {
                    continue;
                }
            }  else {
                initial.shift();
                final.shift();
            }
        }
        return totalBribes;
    }
debugger;
let q = [1,2,5,3,7,8,6,4,9];
let p = q.slice();
p = p.sort((a, b) => {
    if(a!==b) {
        return a > b ? 1 : -1;
    } 
    return 0;
})
    let swaps = performSwap(p, q );
}

function sampleExamples() {
    console.log(false=='0');
    console.log(false==='0');

    var testDelete = function(x) {
        delete x;
        console.log(x);
    }

    testDelete(10);

    var testScope = function() {
        console.log("test Scope");
        var v = 20;
      {
          console.log(v);
          var v = 15;
      }
      console.log(v);
    }
  
    testScope();

    var testLet = function() {
        console.log("test LET");
        let l;
        console.log(l);
    }

    testLet();

    var testSetTimeout = function() {
        console.log(1);
        setTimeout(function() {
            console.log(2);
        }, 1000);

        setTimeout(function() {
            console.log(3);
        }, 0);
        console.log(4);
    }

   testSetTimeout();

   var testSum = function(a,b) {
       if(!!b) {
           return a + b;
       }
       return function(p) {
           return a + p;
       }
   }

   var i = testSum(2,3);
   var j = testSum(2)(3);
   var nested = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
   console.log( nested.flat().flat().flat().flat());

   
    let sockMerchant= function(n, ar) {
        let noOfPairs = 0;
        let socksCount = {};
        ar.forEach(sock => {
            if(!socksCount[sock]) {
                socksCount[sock] = 1;
            } else {
                socksCount[sock] = socksCount[sock] + 1;
            }

            if(socksCount[sock] === 2) {
                noOfPairs = noOfPairs + 1;
                socksCount[sock] = 0;
            }
        });
        return noOfPairs;
    }

    let noOfSocks = 9;
    let socksArray = [10, 20, 20, 10, 10, 30, 50, 10, 20]

    console.log(sockMerchant(noOfSocks, socksArray));
}