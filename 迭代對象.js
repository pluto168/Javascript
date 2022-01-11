let list = [10, 20, 30];
let mystr = "Hello";
let mymap = new Map();

mymap.set("JS", "javascript");
mymap.set("PL", "perl");
mymap.set("PY", "python");

for (let val of list) {
  console.log(val);
}
for (let val of mystr) {
  console.log(val);
}

for (let [key, value] of mymap) {
  console.log(key, value);
}
let it = mymap.value();
let tmp;
while ((tmp = it.next())) {
  if (tmp.done) break;
  console.log(tmp.value, tmp.done);
}
