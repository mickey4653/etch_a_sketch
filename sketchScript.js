const divCon = document.getElementById("container");

const rows = document.getElementsByClassName("grid-rows");
const cols = document.getElementsByClassName("grid-cols");
const divGrid = document.createElement('div');
divGrid.className = "divGrid";
divCon.appendChild(divGrid);


function gridLayout() {
    makeRows(16, 16);

}

// function makeRows(rowNum) {
//     for (r = 0; r < rowNum; r++) {
//         const rows = document.createElement("div");
//         rows.classList = "grid-rows";
//         rows.style.cssText = "width:50px";
//         rows.style.cssText = "height:50px";

//         rows.classList.add("hoverGrid");
//         divCon.appendChild(rows).className = "grid-rows";
//         const hovers = document.querySelectorAll(".hoverGrid");
//         hovers.forEach((hover) => {

//             // hover.addEventListener("mouseover", () => {
//             //     console.log(hover.setAttribute = ("style", "background:blue"));
//             //     // hover.setAttribute = ("style", "background:blue");

//             // });
//             hover.addEventListener("mouseover", changeColor);
//         });
//     }


// }

function makeRows(rows, cols) {
    divGrid.style.setProperty('--grid-rows', rows);
    divGrid.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cols = document.createElement("div");
        // cols.innerText = (c + 1);
        divGrid.appendChild(cols).className = "grid-cols hoverGrid";
        const hovers = document.querySelectorAll(".hoverGrid");
        hovers.forEach((hover) => {

            // hover.addEventListener("mouseover", () => {
            //     console.log(hover.setAttribute = ("style", "background:blue"));
            //     // hover.setAttribute = ("style", "background:blue");
            // });
            hover.addEventListener("mouseover", changeColor);
        });
    }
}

function changeColor(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;

}

// function makeCols(colNum) {
//     for (i = 0; i < rows.length; i++) {
//         for (c = 0; c < colNum; c++) {
//             let cols = document.createElement("div");
//             cols.classList = "grid-cols";

//             rows[c].appendChild(cols).className = "grid-cols";

//         }
//     }
// }

gridLayout();
// rows.setAttribute = "style", "width:50px; height:50px";
// cols.setAttribute = "style", "width:50px; height:50px";

function clearBtn() {
    const btnClear = document.createElement("button");
    btnClear.id = "btn";
    btnClear.textContent = "Clear";
    divCon.appendChild(btnClear);
    btnClear.addEventListener('click', () => {
        clearB = document.querySelectorAll('.grid-cols').forEach((e) => {
            e.remove();
        });
    });
}
clearBtn();

function createGrid() {

    let user;
    let click = document.getElementById('btn');
    click.addEventListener("click", () => {
        user = prompt("Enter number of squares(1-64)");
        let value = Number(user);
        if (value > 65) {
            alert("Enter number not less than 64");
        } else {
            makeRows(value, value);
        }

    });
}
createGrid();