function total(x: number, y: number): number {
  return x + y;
}

let a = total(5, 7);
console.log(a);

function total2(x: any, y: any) {
  return x + y;
}

let b = total2("İstanbul", 4);
console.log(b);

let total3 = function (x: number, y: number) {
  return x + y;
};

console.log(total3(1, 2));
