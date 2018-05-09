debugger;

/* At first let's try 'for-of' loop */
for (const v of a) {console.log(v)};


debugger;
/* Ok, let's try 'for-in' */
for (const i in a) {console.log(i + ': ' + a[i])};


debugger;
/* Only own properties */
for (const k of Object.keys(a)) {console.log(k + ': ' + a[k])};
