let selectedRow = null;

function onFormSubmit() {
    let formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData)
    resetForm();
}

function readFormData() {
    let formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["fullName"] = document.getElementById("fullName").value;
    formData["status"] = document.getElementById("status").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}

function insertNewRecord(data) {
    let table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fullName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.status;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button onclick="onEdit(this)">Edit</button>
                        <button onclick="onDelete(this)">Delete</button>`;
}


function resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("fullName").value = "";
    document.getElementById("status").value = "";
    document.getElementById("email").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("fullName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("status").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.fullName;
    selectedRow.cells[2].innerHTML = formData.status;
    selectedRow.cells[3].innerHTML = formData.email;

}

function onDelete(td) {
    if (confirm("Are you sure to delete this record?!")) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }

}