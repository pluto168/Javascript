//funtion*{}: 迭代生成器
//yield:迭代返回

function* myGenerator() {
  yield "a";
  yield "b";
  yield "c";
  yield "d";
}

for (let val of myGenerator()) {
  console.log(val);
}

function* countdown(begin) {
  while (begin > 0) {
    yield begin--;
  }
}
for (tmp of countdown(6)) {
  console.log(tmp);
}
