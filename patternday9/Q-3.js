function printBoxWithLeftDiagonal(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let line = ''; 

        for (let j = 0; j < cols; j++) {
            
            if (j === 0 || i === 0 || i === rows - 1 || j === cols - 1 || i === j) {
                line += '* ';
            } else {
                line += '  '; 
            }
        }
        console.log(line); 
    }
}

printBoxWithLeftDiagonal(5, 10);
