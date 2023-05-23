window.addEventListener('DOMContentLoaded', function(){
    let array = [];

    fetch("link.json").then(function(response) {
        return response.json();
    }).then(function(json) {
    
        for(let item in json)
        {
            array.push(json[item]["id"]);
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
    
            let link = document.createElement("a");
            link.href = `./book.html?${json[item]["isbn"]}`;
    
            let newRow = bookTable.insertRow();
    
            let dateCell = newRow.insertCell();
            let dateText = document.createTextNode(json[item]["date"]);
            dateCell.appendChild(dateText);
    
            let titleCell = newRow.insertCell();
            let titleText = document.createTextNode(json[item]["title"]);
    
            if(array.indexOf(json[item]["isbn"]) !== -1)
            {
                link.textContent = json[item]["title"];
                titleCell.appendChild(link);
            }
            else
            {
                titleCell.appendChild(titleText);
            }
    
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
});




