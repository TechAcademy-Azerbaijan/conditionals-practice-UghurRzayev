const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let a = parseInt(result.input)
    let b = parseInt(a/1000)//1
    let c = parseInt(a%1000)
    let d = parseInt(c/100)//2
    let e = parseInt(c%100)
    let f = parseInt(e/10)//3
    let g = parseInt(e%10)//4
    let aa = parseInt(b/2)
    let ab = parseInt(aa*2)//11
    let ac = parseInt(d/2)
    let ad = parseInt(ac*2)//22
    let ae = parseInt(f/2)
    let af = parseInt(ae*2)//33
    let ag = parseInt(g/2)
    let ah = parseInt(ag*2)//44
    if (b>0&&b<10) {
        if (ab==b&&ad==d&&af==f&&ah==g) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    } else {
        console.log("ERROR");
    }
    
});
