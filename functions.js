// PULL FROM MAIN BRANCH
// git checkout dev        # gets you "on branch dev"
// git fetch origin        # gets you up to date with origin
// git merge origin/main

// PUSH FROM DEVELOPMENT BRANCH TO MAIN BRANCH
// git checkout dev
// git push origin dev:main
// git checkout main
// git pull

let isStyle1 = 1;

// style controller
function switchStyle() {
  localStorage.setItem("page_stylesheet_name", isStyle1 ? './style1.css' : './style2.css');
  load_style();
  show('Page_' + document.getElementById('current-page').innerText.toLowerCase());
  isStyle1 = !isStyle1;
}

function load_style() {
  page_style = localStorage.getItem("page_stylesheet_name");
  if (page_style === null) {
    page_style = "./style1.css";
  }
  document.getElementById('whichStyle').setAttribute("href", page_style);
}

load_style() // load style immediately
