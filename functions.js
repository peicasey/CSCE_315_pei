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
const page_names = [' LANDING ', ' PORTFOLIO ', ' QUALIFICATIONS ', ' SERVICE ', ' AI '];

// page controller
function show(shown) {
    for (let i=0; i<pages.length; i++){
        console.log("we find that shown == pages[i] is " + shown == pages[i]);
        if (shown == pages[i]) {
            switch (pages[i]) {
                case 'Page_landing':
                    document.getElementById(shown).style = "display:grid; grid-template-columns: 0.5fr 0.8fr; grid-template-rows: 1fr; gap: 0px 0px;";
                  break;
                case 'Page_portfolio':
                    generateProjects();
                    document.getElementById(shown).style = 'display:block';
                  break;
                default:
                    document.getElementById(shown).style = 'display:block';
              }                        
            if (pages[i] == 'Page_landing') {
            }
            else {  }

            document.getElementById('current-page').innerHTML = shown.substring(5, shown.length).toUpperCase();
            console.log(pages[i] + " is " + document.getElementById(pages[i]).style.display) + " !!!!!";
        }
        else {
            document.getElementById(pages[i]).style.display = 'none';
            console.log(pages[i] + " is " + document.getElementById(pages[i]).style.display);
        }
    }
    console.log("---------------------------");
    return false;
}

// style controller
function switchStyle() {
    const elem = document.getElementById('whichStyle');
    elem.setAttribute('href',  isStyle1 ? './index2.css' : './index1.css');
    isStyle1 = !isStyle1;
}

// projectts generator
const PROJECTS = [{
    "name": "TIME LEAP",
    "location": "New york",
    "meals": 5,
    "close_time": '23:30',
    "image": "TimeLeap.png"
},{
    "name": "CARRYON",
    "location": "San francisco",
    "meals": 15,
    "close_time": '22:00',
    "image": "CarryOn.jpg"
},{
    "name": "GRAPPLING WITH SCHOOL",
    "location": "New york",
    "meals": 8,
    "close_time": '23:00',
    "image": "GWS.png"
}];

const TPL_Results = item => `<div class="project-item">
  <h3 class="Results-itemName">${item.name}</h3>
  <img style="width:100%; height:auto object-fit: cover;" src="./assets/project_images/${item.image}">
  <p class="Results-itemLocation"><b>${item.location}</b></p>
  <p class="Results-itemDetails">Meals: ${item.meals} Close time: ${item.close_time}</p>
</div>`;

function generateProjects () {
    fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));


    document.getElementById('projects').innerHTML = PROJECTS.map(item => TPL_Results(item)).join('');
}