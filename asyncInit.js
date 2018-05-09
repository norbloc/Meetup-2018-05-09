(async function() {
debugger;

// Problem:
class asyncInit_1 {
    constructor() {
        this._inited = false;
    }

    init() {
        return new Promise(resolve => setTimeout(() => {
            this._inited = true;
                resolve(true);
            }, 2000));
    };
    
    method1() {
        if (!this._inited) {
            console.error("Not inited in method!");
                return;
        }
        console.log("method1 ok");
    }
};


debugger;

const a = new asyncInit_1();
a.method1();

debugger;

a.init();
a.method1();

debugger;

await delay(2100);
a.method1();

debugger;


// Solution:
class asyncInit_2 {
    constructor() {
        this._inited = new Promise(resolve => setTimeout(() => {
                console.log("init ok");
                resolve(true);
            }, 2000));
    };
    
    method1() {
        return this._inited.then(() => {
            console.log("method1 ok");
        });
    };

    method2() {
        return this._inited.then(() => {
            console.log("method2 ok");
        });
    };
};

debugger;



const b = new asyncInit_2();
await b.method1();
debugger;
await b.method2();
debugger;

})();
