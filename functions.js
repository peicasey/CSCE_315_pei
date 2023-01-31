let n = 0
let isStyle1 = 1;
const pages = ['Page_landing', 'Page_portfolio', 'Page_qualifications', 'Page_service', 'Page_ai'];

// page controller
function show(shown) {
    for (let i=0; i<pages.length; i++){
        if (shown == pages[i]) {
            document.getElementById(shown).style.display='block';
        }
        else {
            document.getElementById(pages[i]).style.display='none';
        }
    }
    
    return false;
}

// style controller
function switchStyle() {
    const elem = document.getElementById('whichStyle');
    elem.setAttribute('href',  isStyle1 ? './index2.css' : './index1.css');
    isStyle1 = !isStyle1;
}

// increment button for fun
function button1() {
    document.getElementById('output').innerHTML = ++n;
}