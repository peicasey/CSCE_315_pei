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
const social_icons = {
    "github": "<i class='fa-brands fa-github adjust-circle' aria-hidden='true'>",
    "itch.io": "<i class='fa-brands fa-itch-io adjust-circle' aria-hidden='true'>",
    "devpost": "<img src='./assets/devpost-icon.png' alt='devpost logo' style='width:1em; height:1em;'>",
  };

  const language_icons = {
    "github": "<i class='fa-brands fa-github adjust-circle' aria-hidden='true'>",
    "itch.io": "<i class='fa-brands fa-itch-io adjust-circle' aria-hidden='true'>",
    "devpost": "<img src='./assets/devpost-icon.png' alt='devpost logo' style='width:1em; height:1em;'>",
  };

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
    "language": "unity c# git",
    "tags": "game 2D",
    "description": 'Winner of Best in Programming (TAGD Fall 21)',
    "image": "TimeLeap.png"
},{
    "name": "CARRYON",
    "language": "react html/css/jsx azure python",
    "tags": "webdev hackathon",
    "description": 'TAMUHack 23',
    "image": "CarryOn.jpg"
},{
    "name": "GRAPPLING WITH SCHOOL",
    "language": "unit c# git",
    "tags": "game 2D",
    "description": 'Winner of Best in Design and 1st Overall (TAGD Spring 22)',
    "image": "GWS.png"
}];

const TPL_Results = item => `<div class="project-item">
  <h3 class="Results-itemName">${item.name}</h3>
  <img style="width:100%; height:auto object-fit: cover;" src="./assets/project_images/${item.image}">
  <div style='padding: 5px;'>
    <p class="Results-itemLanguage"><b>Tech: ${item.language}</b></p>
    <p class="Results-itemTags">Fields: ${item.tags}</p>
    <p class="Results-itemDesc">${item.description}</p>
  </div>
</div>`;

function generateProjects () {
    fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));


    document.getElementById('projects').innerHTML = PROJECTS.map(item => TPL_Results(item)).join('');
}