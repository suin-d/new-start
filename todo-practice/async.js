console.log(시작할게요);

const result = setTimeout(async () => {
  return console.log("비동기예요");
}, 3000);

console.log(result());

console.log("마지막");
