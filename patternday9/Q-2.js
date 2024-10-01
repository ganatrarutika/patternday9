function printEmptyBox(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let line = ''; 
        
        for (let j = 0; j < cols; j++) {
            
            if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
                line += '* ';
            } else {
                line += '  '; 
            }
        }
        console.log(line); 
    }
}

printEmptyBox(5, 10);
