// PULL FROM MAIN BRANCH
// git checkout dev        # gets you "on branch dev"
// git fetch origin        # gets you up to date with origin
// git merge origin/main

// PUSH FROM DEVELOPMENT BRANCH TO MAIN BRANCH
// git checkout dev
// git push origin dev:main
// git checkout main
// git pull

let n = 0
let isStyle1 = 1;
const pages = ['Page_landing', 'Page_portfolio', 'Page_qualifications', 'Page_service', 'Page_ai'];
//const page_names = [' LANDING ', ' PORTFOLIO ', ' QUALIFICATIONS ', ' SERVICE ', ' AI '];

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

// set current page
function setCurrentPage(page) {
    document.getElementById('current-page').innerHTML = page;
}

// increment button for fun
function button1() {
    document.getElementById('output').innerHTML = n+2;
}