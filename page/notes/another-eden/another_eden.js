let characters = [];
let characters3 = [];
let characters3_4 = [];
let characters3_5 = [];
let characters4 = [];
let characters4_5 = [];
let characters5 = [];
let charcterCount = {};

fetch('another_eden.json').then(function(response) {
    return response.json();
}).then(function(json) {
    
    // ┌ date,
    // └ character
    //   ├ [name, level]
    //   ├ [name, level]
    //         ・
    //         ・
    //         ・

    const targetTable = document.getElementById('another_eden');
    let dateCell;
    let dateText;
    let nameCell;
    let nameText;
    let classCell;
    let classText;

    for (let item in json) {
        let newRow = targetTable.insertRow();

        dateCell = newRow.insertCell();
        dateText = document.createTextNode(json[item]['date']);
        dateCell.appendChild(dateText);

        for(let charas in json[item]['character']){

            if(charas == '0'){
                if(json[item]['character'].length > 1)
                {
                    dateCell.rowSpan = json[item]['character'].length;
                }
            }else{
                newRow = targetTable.insertRow();
            }

            nameCell = newRow.insertCell();
            nameText = document.createTextNode(json[item]['character'][charas]['name']);
            nameCell.appendChild(nameText);
            
            classCell = newRow.insertCell();
            classText = document.createTextNode(json[item]['character'][charas]['class']);
            classCell.appendChild(classText);

            if(classText.length >= 5){
                nameCell.classList.add('rare');
                classCell.classList.add('rare');
                dateCell.classList.add('rare');
            }

            characters.push(nameText);

            switch(classText.nodeValue)
            {
                case '★★★':
                    characters3.push(nameText);
                    break;
                case '★★★☆':
                        characters3_4.push(nameText);
                        break;
                case '★★★☆☆':
                    characters3_5.push(nameText);
                    break;
                case '★★★★':
                    characters4.push(nameText);
                    break;
                case '★★★★☆':
                    characters4_5.push(nameText);
                    break;
                case '★★★★★':
                    characters5.push(nameText);
                    break;
                default:
                    throw 'エラー';
            }
        }
    }

    const total = document.getElementById('total');
    const level3_count = document.getElementById('level3_count');
    const level3_4_count = document.getElementById('level3_4_count');
    const level3_5_count = document.getElementById('level3_5_count');
    const level4_count = document.getElementById('level4_count');
    const level4_5_count = document.getElementById('level4_5_count');
    const level5_count = document.getElementById('level5_count');

    const level3_ratio = document.getElementById('level3_ratio');
    const level3_4_ratio = document.getElementById('level3_4_ratio');
    const level3_5_ratio = document.getElementById('level3_5_ratio');
    const level4_ratio = document.getElementById('level4_ratio');
    const level4_5_ratio = document.getElementById('level4_5_ratio');
    const level5_ratio = document.getElementById('level5_ratio');

    if(characters.length != (characters3.length + characters3_4.length 
        + characters3_5.length + characters4.length + characters4_5.length + characters5.length))
    {
        throw 'エラー'
    }

    total.innerHTML = (characters.length).toLocaleString();
    level3_count.innerHTML = (characters3.length).toLocaleString();
    level3_4_count.innerHTML = (characters3_4.length).toLocaleString();
    level3_5_count.innerHTML = (characters3_5.length).toLocaleString();
    level4_count.innerHTML = (characters4.length).toLocaleString();
    level4_5_count.innerHTML = (characters4_5.length).toLocaleString();
    level5_count.innerHTML = (characters5.length).toLocaleString();

    function calcRatio(targetValue) {
        let ratio = targetValue / characters.length * 100;
        let n = 2;
        let x = Math.pow(10, n);
        return (Math.round(ratio * x) / x).toFixed(n);
    }

    level3_ratio.innerHTML = calcRatio(characters3.length);
    level3_4_ratio.innerHTML = calcRatio(characters3_4.length);
    level3_5_ratio.innerHTML = calcRatio(characters3_5.length);
    level4_ratio.innerHTML = calcRatio(characters4.length);
    level4_5_ratio.innerHTML = calcRatio(characters4_5.length);
    level5_ratio.innerHTML = calcRatio(characters5.length);

    characters.forEach(function(element){
        if(charcterCount[element.data] === undefined)
        {
            charcterCount[element.data] = 1;
        }
        else
        {
            let count = charcterCount[element.data];
            count++;
            charcterCount[element.data] = count;
        }
    });

    let sortArray = Object.keys(charcterCount).map((x)=>({key: x, value: charcterCount[x]}));
    sortArray.sort((a, b) => b.value - a.value);

    let rank = 0;
    let lastCount = 0;
    const rankTable = document.getElementById('another_eden_rank');

    for(let element of sortArray){

        if(lastCount != element['value'])
        {
            lastCount = element['value'];
            rank++;
        }

        if(rank == 11){
            break;
        }

        let newRow = rankTable.insertRow();

        let rankCell = newRow.insertCell();
        rankCell.classList.add('num');
        let rankText = document.createTextNode(rank);
        rankCell.appendChild(rankText);

        let countCell = newRow.insertCell();
        countCell.classList.add('num');
        let countText = document.createTextNode(element['value']);
        countCell.appendChild(countText);

        let nameCell = newRow.insertCell();
        let nameText = document.createTextNode(element['key']);
        nameCell.appendChild(nameText);
    }
});