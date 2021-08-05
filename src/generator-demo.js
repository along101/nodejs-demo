function* func() {
    console.log("one");
    yield '1';
    console.log("two");
    yield '2';
    console.log("three");
    return '3';
}

f = func();
f.next();
// one
// {value: "1", done: false}

console.log(1)
f.next();
// two
// {value: "2", done: false}

console.log(2)
f.next();
// three
// {value: "3", done: true}

console.log(3)
f.next();
// {value: undefined, done: true}