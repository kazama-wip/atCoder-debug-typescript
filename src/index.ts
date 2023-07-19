function Main(input: string) {
  let [a, b, c, x] = input.split("\n").map(s => Number(s))
  let count = 0

  for (let i = 0; i <= a; i++) {
    for (let j = 0; j <= b; j++) {
      for (let k = 0; k <= c; k++) {
        if ((500 * i) + (100 * j) + (50 * k) === x) {
          count++
        }
      }
    }
  }

  console.log(count)
}

Main(`2
2
2
100`);

// Main(require("fs").readFileSync("/dev/stdin", "utf8")); 
