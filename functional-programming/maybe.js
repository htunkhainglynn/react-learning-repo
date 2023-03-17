// functional error handling
const toUpper = x => x.toUpperCase();
const appendHi = x => x + 'Hi';
const compose = (f, g) => x => f(g(x));
const appendHiAndUpper = compose(toUpper, appendHi);

const MayBe = x => ({
    value: x,
    isNothing: () => x === undefined || x === null,
    map: function(fn) {
        return this.isNothing() ? 
            MayBe.of(x) :
            MayBe.of(fn(x))
    },
    orElse: function (defaultValue) { return this.isNothing() ? MayBe.of(defaultValue) : MayBe.of(x) },
    valueOf: () => x
});

MayBe.of = (x) => MayBe(x);

const token = (str) => str.split(' ');
let str = 'good morning';
const result = MayBe.of(null)
                    .map(appendHiAndUpper)
                    .map(token)
                    .orElse('default value');

console.log("result : ", result.valueOf());