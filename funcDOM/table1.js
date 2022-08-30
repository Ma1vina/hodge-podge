// //создание таблички через функцию

// function createTable(rows, cols, parent) {
// 	let table = document.createElement('table');
// 	let prnt = document.querySelector(parent);
//      for(let i=0; i<rows;i++){
//         let tr = document.createElement("tr");

//         for(let i=0;i<cols;i++){
//             let td = document.createElement("td");
//             table.appendChild(tr);
//             tr.appendChild(td);
//         }
        
//      }
// 	prnt.appendChild(table);
// }

// createTable(5,6,"div");


// //не добавить в элемент, а вернуть через return
// let div = document.querySelector('#elem');
// let table = createTable(3, 4);
// div.appendChild(table);




//сделаем функцию createTableByArr, которая параметром будет принимать двухмерный массив и строить на его основе таблицу.

function createTableByArr(arr){
    var table1 = document.createElement("table");
    for(let subArr of arr){
        let tr = document.createElement("tr");
        for(let elem of subArr){
            let td=document.createElement("td");
            td.textContent = elem;
            tr.appendChild(td);
        }
        table1.appendChild(tr);
    }
    return(table1);
}


let div = document.querySelector('div');

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let table = createTableByArr(arr);

div.appendChild(table);
