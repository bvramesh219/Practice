function runSamples() {
    console.log("Running Samples");
    sampleExamples();
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

   // testSetTimeout();

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
debugger;
   var nested = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
   console.log( nested.flat().flat().flat().flat());

}