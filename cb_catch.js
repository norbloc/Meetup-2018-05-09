
debugger;

// Anti-pattern
try {
    console.log("In try");
    callback(null, 'ok');
} catch (e) {
    callback(e);    
}
debugger;








debugger;
callbackCalled = false;

// Good pattern
let success;
try {
    console.log("In try");
    success = true;
} catch (e) {
    callback(e);    
}

if (success) {
    try {
        callback(null, 'ok');
    } catch (e) {
        console.error("unexpected");
    }
}
debugger;








debugger;
callbackCalled = false;

// The same with promises
// Anti-pattern
somePromise.then( () => {
    callback(null, 'ok');
}).catch( (e) => {
    callback(e);
}).finally(() => {
debugger;












callbackCalled = false;
debugger;
// Good pattern

return somePromise.then( () => {
    callback(null, 'ok');
}, (e) => {
    callback(e);
}).catch( (e) => {
    console.error("Unexpected");
}).finally(() => {
    debugger;
});
});
