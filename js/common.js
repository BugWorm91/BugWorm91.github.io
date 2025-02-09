function addHiddenSwitch(controlElement, targetElement){
    controlElement.addEventListener('click',function(){
        if(targetElement.classList.contains('hidden')){
            targetElement.classList.remove('hidden');
        }
        else{
            targetElement.classList.add('hidden');
        }
    });
}

function setDialog(baseElementName){
    let dialog = document.getElementById(baseElementName + 'Dialog');
    let btn_show = document.getElementById(baseElementName);
    let btn_closeTop = document.getElementById(baseElementName + 'CloseTop');
    let btn_closeBottom = document.getElementById(baseElementName + 'CloseBottom');

    btn_show.addEventListener('click', function() {
        dialog.showModal();
    }, false);
    btn_closeTop.addEventListener('click', function() {
        dialog.close();
    }, false);
    btn_closeBottom.addEventListener('click', function() {
        dialog.close();
    }, false);
}

