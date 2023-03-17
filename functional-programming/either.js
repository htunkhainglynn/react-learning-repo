// this is another way of writing maybe they are the same
// to use in error handling , same as promise resolve, reject

function Nothing(val) {
    this.value = val;
}

Nothing.of = (val) => new Nothing(val);
Nothing.prototype.map = function(fn) {
    return this;
}
Nothing.prototype.valueOf = function () {
    return this.value;
}

function Something(val) {
    this.value = val;
}


Something.of = function (val) {
    return new Something(val);
}

Something.prototype.map = function (fn) {
    return Something.of(fn(this.value));
}
Something.prototype.valueOf = function() {
    return this.value;
};

const toUpper = x => x.toUpperCase();
let str = 'hello';
let result = Something.of(str)
                        .map(toUpper);

console.log('something is called ', result.valueOf());

const Either = {
    Some: Something,
    Nothing: Nothing
}


// some function that has either a success value or failed value
const div = (a, b) => {
    if (b === 0) {
        return Either.Nothing.of("Div by zero")
    }
    else {
        return Either.Some.of(a/b);  // this returns functor
    }
}

result = div(10, 0);
console.log('Using either for div zero', result.valueOf());

result = div(10, 2) // Functor(5)
            .map(x => x + 1);
console.log('Using either ', result.valueOf());
