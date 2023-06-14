

function Main(input: any) {
  input = input.split("\n"); //[a, b c, s]
  console.log(input)
}

Main(`a
b c
s
`);

// Main(require("fs").readFileSync("/dev/stdin", "utf8")); 
