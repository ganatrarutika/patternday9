function printBox(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let line = ''; 
        for (let j = 0; j < cols; j++) {
            line += '* '; 
        }
        console.log(line); 
    }
}

printBox(5, 10);
