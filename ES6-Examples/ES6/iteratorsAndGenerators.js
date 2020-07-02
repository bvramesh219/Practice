function runItGenExamples() {
    iteratorExamples();
    generatorExamples();
}

function iteratorExamples() {
    console.log("Iterator Examples");
    let ids = [100, 101, 102]
    let iter = ids[Symbol.iterator]();
    let values = ids.values();
    console.log(iter.next());
    console.log(values.next());
}

function generatorExamples() {
    console.log("Generator Examples");
    let process= function *() {
        yield 1000;
        yield 1001;
    }

    let it= process();
    console.log(it.next());
    console.log(it.next());

    let process1 = function *() {
        let result = yield;
        console.log(`result is ${result}`);
    }
    let it1 = process1();
    let it1res=it1.next();
    it1res=it1.next(200);

    let process2 = function *() {
        let newArr = [yield, yield, yield];
        console.log(newArr[2]);
    }
    let it2 = process2();
    let it2res = it2.next();
    it2res = it2.next(2);
    it2res = it2.next(4);
    it2res = it2.next(10);

    let extraProcess = function *() {
        yield 10;
    }
    let process3 = function *() {
        yield 0;
        yield* [1,2,3];
        yield* extraProcess();
    }
    let it3 = process3();
    console.log(it3.next());
    console.log(it3.next());
    console.log(it3.next());
    console.log(it3.next());
    console.log(it3.next());
}