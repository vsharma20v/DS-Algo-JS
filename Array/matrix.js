// 2d Arrays

const matrix = [[1,2,3],[4,5,6],[7,8,9]];

console.log(matrix)

// Traversing
for(let row of matrix){
    for(let column of row){
        console.log(column)
    }
}


// Insertion
// at row level - beginning, middle, end
matrix.push([10,11,12]); // end
matrix.unshift([-1,0,1]); // beginning
matrix.splice(2,0,[-1,-2,-3]); // middle
// at column level - beginning, middle, end
const newColumn = [-1,-4,-7]
for(let i=0;i<matrix.length;i++){
    const row=matrix[i];
    row.splice(2,0,newColumn[i]); //middle
    row.push(newColumn[i]); //end
    row.unshift(newColumn[i]); // beginning
}


// Printing
for(let row of matrix){
    let rowString = ""
    for(let column of row){
        rowString+=column + " ";
    }
    console.log(rowString);
}


// Deletion
// at row level - beginning, middle, end
matrix.splice(1,1)
matrix.pop()
matrix.shift()
// at column level- beginning, middle, end
for(let row of matrix){
    row.pop();
    row.shift();
    row.splice(1,1);
}



// updation
matrix[1][2]=-14