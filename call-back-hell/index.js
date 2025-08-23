
// this is callback hell

hello1(1, function (user) {
    hello2(user, function (user) {
        hello3(a, function (a) {
            hello4(b, function (b) {

            })
        })
    })
});

// can be do the same by modulization functions

function hello1(a) {
    hello2(a);
}
function hello2(a) {
    hello3(a)
}

function hello3(a) {
    hello4(a);
}
function hello4(a) {
    return a;
}

// can do with promises

hello1(a)
.then(a => hello2(a))
.then(a => hello3(a))
.then(a => hello4(a))

// can do the same with async/await