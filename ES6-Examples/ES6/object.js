function runObjectExtensions() {
    console.log("Running Object Extensions");
    runSymbolExamples();
    runWellKnownSymbolExamples();
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
    debugger;
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
        debugger;
        console.log(hint);
        return 42;
    };
    let sumNew = someValuesNew + 10;
    console.log(sumNew);


}