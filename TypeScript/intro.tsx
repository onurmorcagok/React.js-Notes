function helloPerson(name: string) {
  return `Hello ${name}`;
}

let msg = helloPerson("John Doe");

//* console.log(msg);

//! Number
let number: number = 7;
number = 5;
//? console.log(number);

//! String
let person: string = "Onur";
//? console.log(person);

//! Boolean
let dogruMu: boolean;
dogruMu = true;
//? console.log(dogruMu);

//! Array
let numbers: number[];
numbers = [1, 2, 3, 4];
//? console.log(numbers);

let numbers2: Array<number>;
numbers2 = [10, 20, 30];
//? console.log(numbers2);

//! Tuple
let array: [number, string] = [14, "Onur"];
//? console.log(array[1]);

//! Enum
enum Color {
  Red,
  Green,
  Blue,
}
let color: Color = Color.Blue;
//? console.log(color);

//? Any, Void, Null, Undefined

//? Any: Herhangi bir değer gelebilir.
//? Void: Herhangi bir değer döndürmez.
//? Null: Boş bir değer, referansı oluşmadı.
//? Undefined: Tanımsız.
