fetch("another_eden.json").then(function(response) {
    return response.json();
}).then(function(json) {
    
    // ┌ date,
    // └ character
    //   ├ [name, level]
    //   ├ [name, level]
    //         ・
    //         ・
    //         ・

    const targetTable = document.getElementById("another_eden");

    for (let item in json) {
        let newRow = targetTable.insertRow();

        let dateCell = newRow.insertCell();
        let dateText = document.createTextNode(json[item]["date"]);
        dateCell.appendChild(dateText);

        for(let charas in json[item]["character"]){

            if(charas == "0"){
                if(json[item]["character"].length > 1)
                {
                    dateCell.rowSpan = json[item]["character"].length;
                }
            }else{
                newRow = targetTable.insertRow();
            }

            let nameCell = newRow.insertCell();
            let nameText = document.createTextNode(json[item]["character"][charas]["name"]);
            nameCell.appendChild(nameText);
            
            let classCell = newRow.insertCell();
            let classText = document.createTextNode(json[item]["character"][charas]["class"]);
            classCell.appendChild(classText);

            if(classText.length >= 5){
                nameCell.classList.add("rare");
                classCell.classList.add("rare");
                dateCell.classList.add("rare");
            }
        }
    }
});


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