fetch("read.json").then(function(response) {
    return response.json();
}).then(function(json) {
    
    const bookTable = document.getElementById("read");

    for (let item in json) {
        if(json[item]["date"] == "読了日"){
            continue;
        }

        let newRow = bookTable.insertRow();

        let dateCell = newRow.insertCell();
        let dateText = document.createTextNode(json[item]["date"]);
        dateCell.appendChild(dateText);

        let titleCell = newRow.insertCell();
        let titleText = document.createTextNode(json[item]["title"]);
        titleCell.appendChild(titleText);

        let authorCell = newRow.insertCell();
        let authorText = document.createTextNode(json[item]["author"]);
        authorCell.appendChild(authorText);

        let isbnCell = newRow.insertCell();
        let isbnText = document.createTextNode(json[item]["isbn"]);
        isbnCell.appendChild(isbnText);

        let rankCell = newRow.insertCell();
        let rankText = document.createTextNode(json[item]["rank"]);
        rankCell.appendChild(rankText);
    }
});