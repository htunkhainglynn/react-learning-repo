const R = require('ramda');

const failedFetch = id => Promise.reject("bad id");
const useDefault = () => ({ firstName: 'Bob', lastName: 'Loblaw' });

//recoverFromFailure :: String -> Promise ({ firstName, lastName })
const recoverFromFailure = R.pipe(
    failedFetch,  // solve -> to andThen
    R.otherwise(useDefault),
    R.andThen(R.pick(['firstName', 'lastName'])),
);
recoverFromFailure(12345).then(console.log);