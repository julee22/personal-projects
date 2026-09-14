import { guestList } from "./seating-chart.js";

const menuMap = [
  {
    meal: "Beef Short Rib",
    fullName: "Braised Bone-In Beef Short Rib",
    description: "Comes with natural jus, and garlic mashed potatoes",
  },
  {
    meal: "Herb Roasted Chicken",
    fullName: "Savory Herb Roasted Chicken Supreme",
    description: "Comes with garlic and chive mashed potatoes, seasonal vegetables, and chardonnay volute",
  },
  {
    meal: "Grilled Salmon Fillet",
    fullName: "Grilled Canadian Salmon Fillet with",
    description: "Comes with saffron and lemon aioli, wild rice pilaf, and seasonal vegetables",
  }

];

let guestSearch;
const sortedList = guestList.sort((a, b) => a.name.localeCompare(b.name));

// Selected Guest
let selectedGuest;

function populateGuestSearch() {
  for (let index = 0; index < sortedList.length; index++) {
    const newOption = document.createElement('option');

    newOption.value = sortedList[index].id;
    newOption.innerHTML = sortedList[index].name;

    guestSearch.appendChild(newOption);
  }
}

function setAlignment() {
  const list = document.getElementsByClassName('reception-schedule')[0];
  for (let index = 0; index < list.children.length; index++) {
    if (index % 2 === 0) {
      list.children[index].classList.add('left');
    } else {
      list.children[index].classList.add('right');
    }
  }
}

$(document).ready(function () {
  guestSearch = document.getElementById('guestlist');
  console.log(sortedList);
  populateGuestSearch();
  $('#guestlist').select2();

  // register change listener after the select has been populated/initialized
  $('#guestlist').on('change', function (event) {
    const id = this.value;
    selectedGuest = sortedList.find((element) => String(element.id) === String(id));

    // Update table number
    const tableNum = document.getElementById('tableNum');
    tableNum.innerHTML = selectedGuest.table;

    // Update meal selection
    const mealSelection = document.getElementById('mealSelection');
    const mealDetails = menuMap.find((element) => element.meal === selectedGuest.meal);
    mealSelection.innerHTML = mealDetails.fullName + `* <em class="course-desc">(` + mealDetails.description + `)</em>`;

    const mainDiv = document.getElementById('main');
    mainDiv.style.display = 'block';
    
    const welcomeDiv = document.getElementById('welcome');
    welcomeDiv.classList.add('collapse');
  });

  setAlignment();
});