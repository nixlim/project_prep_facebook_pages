function foo() {
    console.log("My name is foo!");
};

var bar = function() {
    console.log("My name is bar!");
};

var myObj = {};
myObj.baz = function(){
    console.log("I'm Baz. I came with myObj.");
};

foo;

foo();

bar;

bar();

myObj;

myObj.baz;

myObj.baz();