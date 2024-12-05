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
