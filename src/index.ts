

function Main(input: any) {
  input = input.split("\n");
  const calculation = parseInt(input[0]) * parseInt(input[1])

  if (calculation % 2 !== 0) {
    console.log('Odd')

  } else {
    console.log('Even')
  }
}

Main(`0
1901`);

// Main(require("fs").readFileSync("/dev/stdin", "utf8")); 
