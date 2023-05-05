var tablinks = document.getElementsByClassName('tab-link');
var tabcontents = document.getElementsByClassName('tab-contents');
function opentab(tabname){
    for(tablink of tablinks){
        tablinl.classList.remove("acitve-link")
    }
    for(tabcontent of tabcontents){
        tablinl.classList.remove("acitve-tab")
    }
}