import { guestList } from "./seating-chart.js";

let guestSearch;
const sortedList = guestList.sort((a, b) => a.text.localeCompare(b.text));

// Selected Guest
let selectedGuest;

function populateGuestSearch() {
  for (let index = 0; index < sortedList.length; index++) {
    const newOption = document.createElement('option');

    newOption.value = sortedList[index].id;
    newOption.innerHTML = sortedList[index].text;

    guestSearch.appendChild(newOption);
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
    mealSelection.innerHTML = selectedGuest.meal;

    const mainDiv = document.getElementById('main');
    mainDiv.style.display = 'block';
    
    const welcomeDiv = document.getElementById('welcome');
    welcomeDiv.classList.add('collapse');
  });
});