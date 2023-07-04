

function Main(input: any) {
  const inputs: String[] = input.split("");
  const targetArray = inputs.filter(e => { if (Number(e)) return e });
  console.log(targetArray.length)
}

Main(`101`);

// Main(require("fs").readFileSync("/dev/stdin", "utf8")); 
