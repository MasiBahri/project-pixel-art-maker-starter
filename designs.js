let form = document.querySelector('button');
let table = document.querySelector("#pixelCanvas");
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');
const colorCode = document.querySelector('#colorPicker');

// attach click listener to button
// This function gets height and width from the form and draw table with these values
form.addEventListener('click', function () {
    table.innerHTML = ""
    for (let i = 0; i < height.value; i++) {
        let newRow = table.insertRow()
        for (let j = 0; j < width.value; j++) {
            let cell = newRow.insertCell(j);
            cell.setAttribute("ID", `cell-${i}-${j}`)
        }
    }
});

// attach click listener to table.
// this function fill cell with color from code which was selected in colorPick component
table.addEventListener('click', (e) => {
    if (e.target.matches("td")) {
        e.target.style.backgroundColor = colorCode.value;
    }
})