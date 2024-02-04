var selectedRow = null;

function onFormSubmit(e) {
    event.preventDefault();
      var formData = readFormData();
      if(selectedRow == null){
          insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["studentName"] = document.getElementById("studentName").value;
    formData["studentDepartment"] = document.getElementById("studentDepartment").value;
    formData["studentRoll"] = document.getElementById("studentRoll").value;
    formData["studentNumber"] = document.getElementById("studentNumber").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.imsertCell(0);
       cell1.innerHTML = data.studentName;
    cell2 = newRow.imsertCell(1);
       cell2.innerHTML = data.studentDepartment;
    cell3 = newRow.imsertCell(2);
       cell3.innerHTML = data.studentRoll;
    cell4 = newRow.imsertCell(3);
       cell4.innerHTML = data.studentNumber;
    cell5 = newRow.imsertCell(4);
       cell5.innerHTML = `<button onClick ="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('studentName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('studentDepartment').value = selectedRow.cells[1].innerHTML;
    document.getElementById('studentRoll').value = selectedRow.cells[2].innerHTML;
    document.getElementById('studentNumber').value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.studentName;
    selectedRow.cells[1].innerHTML = formData.studentDepartment;
    selectedRow.cells[2].innerHTML = formData.studentRoll;
    selectedRow.cells[3].innerHTML = formData.studentNumber;
}

//Delete the data
function onDelete(td){
    if(confirm('do you want to delete?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById('studentName').value = '';
    document.getElementById('studentDepartment').value = '';
    document.getElementById('studentRoll').value = '';
    document.getElementById('studentNumber').value = '';
    selectedRow = null;
}