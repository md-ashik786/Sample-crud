let lrow = null;
function sub() {
    let enteredData = retrieveData();
    let data = readData(enteredData);
    if (lrow === null) {
        insert(enteredData);
        msg.innerHTML = "added";
    }
    else {
        console.log("Joo");
        update();
        msg.innerHTML = "Updated";
    }
}
function retrieveData() {

    let id = document.getElementById("ei").value;
    let name = document.getElementById("fn").value;
    let cname = document.getElementById("cn").value;
    let salary = document.getElementById("sal").value;
    let array = [id, name, cname, salary];
   
    return array;
}
function readData(enteredData) {
    let data = {}
    data.name = enteredData[1];
    data.employeeId = enteredData[0];
    data.companyName = enteredData[2];
    data.salay = enteredData[3];
    console.log(data, 'data')
    return data
    localStorage.setItem('userData', JSON.stringify(data))
    // const getdata = JSON.parse(localStorage.getItem('userData'))
    // console.log(JSON.parse(getdata), 'getdata')
    //return data;
   
    // let em = localStorage.setItem("ei",enteredData[0]);
    // let n = localStorage.setItem("fn",enteredData[1]);
    // let cn = localStorage.setItem("cn",enteredData[2]);
    // let sal = localStorage.setItem("sal",enteredData[3]);
    // let EM = localStorage.getItem("ei",em);
    // let N = localStorage.getItem("fn",n);
    // let CN = localStorage.getItem("cn",cn);
    // let SAL = localStorage.getItem("sal",sal);
    // let sendData = [EM, N,CN, SAL];
    // console.log(sendData);
    //return sendData;
}
function insert(data) {
    lrow = table.insertRow();
    lrow.insertCell(0).innerHTML = data[0];
    lrow.insertCell(1).innerHTML = data[1];
    lrow.insertCell(2).innerHTML = data[2];
    lrow.insertCell(3).innerHTML = data[3];
    lrow.insertCell(4).innerHTML = `<button onclick = "edit(this)" >Edit</button> <button onclick = "dlt(this)"> Delete</button>`
    reset();

}
function reset() {
    document.getElementById("ei").value = "";
    document.getElementById("fn").value = "";
    document.getElementById("cn").value = "";
    document.getElementById("sal").value = "";
    lrow = null;
}
function edit(selectedData) {

    lrow = selectedData.parentElement.parentElement;
    document.getElementById("ei").value = lrow.cells[0].innerHTML;
    document.getElementById("fn").value = lrow.cells[1].innerHTML;
    document.getElementById("cn").value = lrow.cells[2].innerHTML;
    document.getElementById("sal").value = lrow.cells[3].innerHTML;
}
function update() {
    lrow.cells[0].innerHTML = document.getElementById("ei").value
    lrow.cells[1].innerHTML = document.getElementById("fn").value
    lrow.cells[2].innerHTML = document.getElementById("cn").value
    lrow.cells[3].innerHTML = document.getElementById("sal").value
    reset();
    lrow = null;
}
function dlt(td) {
    lrow = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(lrow.rowIndex);
}
