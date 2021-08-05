function test(v) {
    return new Promise(function (resolve, reject) {
        if (v === 1) {
            console.log("success")
            resolve("s");
        } else {
            console.log("failed")
            reject("f")
        }
    })
}

//then方法有参数，第一个是当promise成功是回调，第二是是当promise失败是回调
//then方法始终会返回一个新的promise，新promise会包装连个参数执行返回的结果
test(2)
    .then(s => console.log(s), e => {
        console.log("1 then里面返回" + e);
    }).catch(err => console.log("1 catch里面返回 " + err));

test(2)
    .then(s => console.log(s), e => {
        console.log("2 catch里面返回 " + e);
        return Promise.reject("mmmm");
    })
    .catch(err => {
        console.log("2 catch里面返回 " + err)
        return 333;
    })
    .then(s => console.log("2 后面的then " + s));