fetch("./json/"+ location.search.substring(1) + ".json").then(function(response) {
    return response.json();
}).then(function(json) {

    const book = document.getElementById('book');
    const book_Title = document.getElementById('book_title');
    let lastTitle;

    for (let item in json) {

        if(item == 0)
        {
            book_Title.innerHTML = json[item]["title"];
            continue;
        }

        let newSection = document.createElement("section");
        let newBlockquote = document.createElement("blockquote");
        let newSectionTitle = document.createElement("h4");
        let newFooter = document.createElement("footer");

        newSectionTitle.textContent = json[item]["title"];

        if(newSectionTitle.textContent != "" && newSectionTitle.textContent != lastTitle)
        {            
            newSection.appendChild(newSectionTitle);
        }
       
        for(let texts in json[item]["text"]){            

            let newParagraph = document.createElement("p");
            newParagraph.textContent = json[item]["text"][texts]["paragraph"];
            newBlockquote.appendChild(newParagraph);
        }

        newSection.appendChild(newBlockquote);
        
        newFooter.textContent = json[item]["title"] + "(" + json[item]["page"] + ")";
        newSection.appendChild(newFooter);

        book.appendChild(newSection);

        lastTitle = json[item]["title"];
    }
});