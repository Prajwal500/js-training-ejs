let size = 8;
let out = " ";
for (let x = 0; x < size; x = x + 1) {
    for (let y = 0; y < size; y = y + 1) {
        if ( (x + y) % 2 == 0 ) {
            out += " ";
        }
        else {
            out += '#';
        }
    }
    out += '\n';
}
console.log(out);
