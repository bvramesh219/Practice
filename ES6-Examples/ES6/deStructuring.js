'use strict';
function runDeStructuringExamples() {
  console.log("DESTRUCTURING");
  deStructuringExamples();
}

function deStructuringExamples(){
    debugger;
   let salary = [32000, 50000, 75000];
   let [low, average, high] = salary;
   console.log(average);

   let salary_new = [32000, 50000];
   let [let_new, average_new, high_new] = salary_new;
   console.log(high_new);

   let salary_again = [32000, 50000, 75000];
   let [low_again, , high_again] = salary_again;
   console.log(high_again);

   let salary_revised = [32000, 50000, 75000];
   let [low_revised, ...remaining] = salary_revised;
   console.log(remaining);

   let salary_onemore= [32000, 50000];
   let [low_onemore, average_onemore, high_onemore = 88000] = salary_onemore;
   console.log(high_onemore);

   salary = [32000, 50000, [88000, 99000]];
   let [newLow, newAverage, [actualLow, actualHigh]]= salary;
   console.log(actualLow);

   salary = [32000, 50000];
   [low, average, high=88000] = salary;
   console.log(high);

   reviewSalary([32000, 50000]);

   let salaryObj ={
       _low:32000,
       _average:50000,
       _high:75000
   }
   let { _low, _average, _high } = salaryObj;
   console.log(_average);

   let salaryObj1 = {
       _low1:32000,
       _average1: 50000,
       _high1: 75000
   };
   let {_low1:low1, _average1:average1, _high1:high1} =salaryObj1;
   console.log(high1);

   (function () {
        let salary = {
            low:32000,
            average:50000,
            high:75000
        };
        let newLow, newAverage, newHigh;
        ({ low: newLow, average: newAverage, high: newHigh } =salary);
        console.log(newHigh);
   })();
}

function reviewSalary ([low, average], high=88000) {
    console.log(average);
}