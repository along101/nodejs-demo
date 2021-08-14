function identity<T>(arg: T): T {
    let a = typeof arg
    console.log(a)
    return arg;
}

let myIdentity: { <T>(arg: T): T } = identity;

let a = myIdentity(1);
console.log(a)
let b = myIdentity("2");
console.log(b)