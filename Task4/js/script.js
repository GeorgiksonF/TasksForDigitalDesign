function printTriangle(rows = 5) {
	for(let i = 1; i < (rows + 1); i++) {
        let rowTriangle = "";
        if (i == 1) {
            rowTriangle = "#"
        } else {
            for (let j = 0; j < i; j++) {
                rowTriangle += "# "
            }
        }
        console.log(" ".repeat(rows - i) + rowTriangle + " ".repeat(rows - i))
    }
}

printTriangle();