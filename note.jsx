const array = [];
typeof array; //object

const joyous = ["😊", "🙂", "😁", "😂"]
// Old way
Object.prototype.toString.call(joyous) === '[object Array]'; //true
// ✅ joyous
Array.isArray(joyous); //true array