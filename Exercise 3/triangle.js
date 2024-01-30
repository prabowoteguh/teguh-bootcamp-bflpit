function printRightAlignedTriangle(height) {
  for (let i = 1; i <= height; i++) {
    let spaces = ' '.repeat(height - i);
    let asterisks = ''

    for (let x = i; x > 0; x--) {
      if (x % 2 == 0) {
        asterisks += '#'
      } else {
        asterisks += '*'
      }
    }
    console.log(spaces + asterisks);
  }
}

let triangleHeight = 6;
printRightAlignedTriangle(triangleHeight);