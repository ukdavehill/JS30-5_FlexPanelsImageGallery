// When user clicks on panel, class added to increase size of panel and cause text to come in from top and bottom. 
// Use of toggle to reverse class additions when clicked again.
const panels = document.querySelectorAll('.panel');

function toggleOpen (){
    this.classList.toggle('open');
}

function toggleActive (e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
