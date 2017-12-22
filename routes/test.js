var helper = function(fn) {
    return function() {
        var args = [].slice.call(arguments);
        var pass;
        args.push(function() {
            if (pass) {
                fn.apply(null, arguments)
            }
        })
        fn.apply(null, args)
        return function(fn) {
            pass = fn;
        }
    }
}

var sum = helper(function(a, b) {
    console.log(a + b)
});

var minus = helper(function(a, b) {
    console.log(a - b)
});

var muti = helper(function(a, b) {
    console.log(a * b)
});

var devide = helper(function(a, b) {
    console.log(a / b)
});

var computed = function*(a, b) {
    yield sum(a, b)
    yield minus(a, b)
    yield muti(a, b)
    yield devide(a, b)
}

var generator = computed(5, 2)

var state = generator.next();

setTimeout(function() {
    while (!state.done) {
        state = generator.next()
    }
}, 100)