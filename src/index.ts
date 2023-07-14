function Main(input: string) {
  let persedInput = input.split("\n")[1].split(' ').map(s => Number(s))
  let count = 0

  while (persedInput.every(n => n % 2 === 0)) {
    persedInput = persedInput.map((num) => num / 2);
    count++;
  }

  console.log(count)
}

Main(`3
8 12 40`);

// Main(require("fs").readFileSync("/dev/stdin", "utf8")); 
