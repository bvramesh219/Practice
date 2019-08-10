function runObjectExtensions() {
    console.log("Running Object Extensions");
    runSymbolExamples();
    runWellKnownSymbolExamples();
    runObjectExtensionExamples();
}

function runSymbolExamples(){
    //create basic symbol
    const eventSymbol = Symbol("button Click Event");
    console.log(typeof eventSymbol);
    console.log(eventSymbol.toString());
    
    // Symbol Comparision
    const eventSymbolIdentical = Symbol("button Click Event");
    console.log(eventSymbol==eventSymbolIdentical);
    console.log(eventSymbol===eventSymbolIdentical);

    //fetching Symbol from Symbol Registry
    const eventSymbolFor= Symbol.for("New button Click Event");
    const eventSymbolForIdentical= Symbol.for("New button Click Event");
    console.log(eventSymbolFor===eventSymbolForIdentical);

    //Symbol.For example
    const anotherEventSymbolFor = Symbol.for("Another button Click Event");
    console.log(eventSymbolFor===anotherEventSymbolFor);

    //Symbol.keyFor Example
    const keyForSymbol = Symbol.keyFor(eventSymbol);
    const keyForSymbolFor = Symbol.keyFor(eventSymbolFor);
    console.log(keyForSymbol);
    console.log(keyForSymbolFor);

    //Usage of Symbol
    const ObectWithDynamicProperty = {
        name:"Object With Dynamic Property",
        [Symbol.for("property")]:"Value for Dynamic Property"
    };

    console.log(ObectWithDynamicProperty[Symbol.for("property")]);
    console.log(Object.getOwnPropertyNames(ObectWithDynamicProperty));
    console.log(Object.getOwnPropertySymbols(ObectWithDynamicProperty));
}

function runWellKnownSymbolExamples(){
    //Class Wtih out Well Known Symbol
    let Blog = function(){};
    let blog = new Blog();
    console.log(blog.toString());

    //Class With Well known Symbol
    let NewBlog = function(){};
    NewBlog.prototype[Symbol.toStringTag] ='New Blog Class';
    let newBlog = new NewBlog();
    console.log(newBlog.toString());

    //Array without Well Known Symbol
    let values = [1,2,3];
    console.log([0].concat(values));

    //Array with Well Known Symbol
    let newValues = [1,2,3];
    newValues[Symbol.isConcatSpreadable] = false;
    console.log([0].concat(newValues));

    //Adding to Array with out Well Known Symbols
    let someValues = [1,2,3];
    let sum = someValues + 10;
    console.log(sum);

    // Adding Value to Array with Well Known Symbols
    let someValuesNew = [1,2,3];
    someValuesNew[Symbol.toPrimitive] = function(hint) {
        console.log(hint);
        return 42;
    };
    let sumNew = someValuesNew + 10;
    console.log(sumNew);
}

function runObjectExtensionExamples(){
    debugger;
    //setProtoTypeOf example
    let a = {x:1};
    let b = {y:2};
    Object.setPrototypeOf(a,b);
    console.log(a.y);

    //Object.assign example
    let a_new = {a:1};
    let b_new = {b:2};
    let target = {c:3};
    Object.assign(target, a_new, b_new);
    console.log(target);

    //Another Object.assign example
    let a_another = {a:1};
    let b_another = {a:5,b:2};
    let target_another = {c:3};
    Object.assign(target_another, a_another, b_another);
    console.log(target_another);

    //Object.defineProperty example
    let a_onemore = {a:1},
        b_onemore = {b:2},
        target_onemore = {};
    
    Object.defineProperty(b,'c', {
        value:10,
        enumerable:false
    });

    Object.assign(target_onemore, a_onemore, b_onemore);
    console.log(target_onemore);

    //Object.assign and Object.prototypeOf combine example
    let a_again = {a:1},
        b_again= {b:2},
        c_again= {c:3},
        target_again={};
    Object.setPrototypeOf(b_again,c_again);
    Object.assign(target_again, a_again,b_again);
    console.log(target_again);

    //Nan Comparision example
    let amount = NaN;
    console.log(amount===amount);

    //Object.is for Nan
    let amount_new = NaN;
    console.log(Object.is(amount_new,amount_new));

    //comparing -0 with 0
    let amount_another = 0,
        total_another = -0;
    console.log(amount_another===total_another);

    //comparing -0 with 0 with Object.is
    let amount_again = 0,
        total_again = -0;
    console.log(Object.is(amount_again, total_again));

    //Object.getOwnPropertySymbols
    let article = {
        title: 'My Blog',
        [Symbol.for('article')]:'My artcile'
    }
    console.log(Object.getOwnPropertySymbols(article));
}