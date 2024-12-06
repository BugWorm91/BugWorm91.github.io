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
    let btn_close = document.getElementById(baseElementName + 'Close');

    btn_show.addEventListener('click', function() {
      dialog.showModal();
      dialog.scrollTop = 0;
    }, false);
    btn_close.addEventListener('click', function() {
      dialog.close();
    }, false);
}

