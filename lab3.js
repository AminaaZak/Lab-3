// 1. Напишіть код, щоб визначити цілі змінні a і b. Обчисліть: a + b, a - b, a * b, a / b. 
// Виведення отриманих результатів зробіть у консоль.
console.log("1. a = 5; b = 15");
let a = 5;
let b = 15;
console.log("a + b = " + (a + b));
console.log("a - b = " + (a - b));
console.log("a * b = " + (a * b));
console.log("a / b = " + (a / b));
console.log("");

// 2. Напишіть код, щоб обчислити периметр і площу кола, ввівши радіус. 
// Виведення отриманих результатів у консоль.
console.log("2.");
let radius = Number(prompt("Введіть радіус кола (см):"));
let area = Math.PI * radius * radius;
let perimeter = 2 * Math.PI * radius;
console.log("Площа кола: " + area + "см^2");
console.log("Периметр кола: " + perimeter + "см");
console.log("");

// 3. Напишіть код, щоб визначити ціло чисельну змінну m і 
// встановіть значення змінної n яке дорівнює 1, 
// якщо m більше за 0, 0, коли m дорівнює 0, і -1, коли m менше за 0.
console.log("3.");
let m = 1;
let n;

if (m > 0) {
    n = 1;
} else if (m == 0) {
    n = 0;
} else {
    n = -1;
}
console.log("При m = " + m +", n = " + n);
console.log("");

// 4. Напишіть код, щоб перевірити, парне чи непарне число n, 
// яке вводить користувач.
let num = Number(prompt("Введіть число:"));
    if (num % 2 === 0) {
        alert("Введене число " + num+ " є парним.");
    } else {
        alert("Введене число " + num+ " є непарним.");
    }

// 5. Напишіть код для знаходження суми та добутку 
// перших 10 натуральних чисел.
console.log("5.");
let sum = 0;
let product = 1;

for (let i = 1; i <= 10; i++) {
  sum += i;      
  product *= i;  
}
console.log("Сума перших 10 натуральних чисел: " + sum);
console.log("Добуток перших 10 натуральних чисел: " + product);
console.log("");

// 6. Напишіть код для знаходження 
// суми ряду 1+11+111+1111 + .. n доданків.
console.log("6.");
let k = 6;
let summa = 0;
let starterm = 1;

for (let j = 0; j < k; j++) {
  summa += starterm;
  starterm = starterm * 10 + 1;
}
console.log("Сума ряду 1+11+111+1111+...+" + k + " доданків: " + summa);
console.log("");

// 7. Напишіть функцію з назвою isLeap(year), щоб перевірити, 
// чи є рік високосним. Функція isLeap(year) має повертати true, 
// якщо рік є високосним, і false в іншому випадку. 
// (кожен рік, який точно ділиться на 4, є високосним, за винятком 
// років, які точно діляться на 100, але ці столітні роки є високосними, 
// якщо вони точно діляться на 400.)
console.log("7.");
function isLeap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true; 
    } else {
      return false; 
    }
  }
  
  let yearis = 2024;
  if (isLeap(yearis)) {
    console.log(yearis + " є високосним роком.");
  } else {
    console.log(yearis + " не є високосним роком.");
  }
  console.log("");

//8. Створіть масив із 10 чисел. Напишіть функцію, яка буде 
//приймати масив і повертати: найбільше з цих чисел у масиві; 
//найменше з цих чисел у масиві; сума додатних чисел у масиві; 
//добуток від’ємних чисел у масиві; кількість від’ємних і додатних 
//чисел у масиві.
console.log("8.");
  function masyv(arr) {
    
    let max = arr[0];
    let min = arr[0];
    let sumpos = 0;
    let prodneg = 1;
    let allpos = 0;
    let allneg = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > 0) {
        sumpos += arr[i];
        allpos++;
      } else if (arr[i] < 0) {
        prodneg *= arr[i];
        allneg++;
      }
    }
  
    return {
      max: max,
      min: min,
      sumpos: sumpos,
      prodneg: prodneg,
      allpos: allpos,
      allneg: allneg,
    };
  }
  
  const mymasyv = [-12, 33, 7, -25, 44, -6, 19, 0, -48, 16];
  const result = masyv(mymasyv);
  console.log("Найбільше число: " + result.max);
  console.log("Найменше число: " + result.min);
  console.log("Сума додатних чисел: " + result.sumpos);
  console.log("Добуток від'ємних чисел: " + result.prodneg);
  console.log("Кількість додатних чисел: " + result.allpos);
  console.log("Кількість від'ємних чисел: " + result.allneg);
  
  