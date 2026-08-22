const allProfiles = document.getElementById('all-profiles');
const matchButton = document.getElementById('match');
var selectedProfile;
    
$(document).ready(function () {
  console.log(allProfiles);

  // register change listener after the select has been populated/initialized
  $('.profile-thumbnail').on('click', function (event) {
    allProfiles.classList.add('hide');
    matchButton.classList.remove('hide');

    const id = this.href.split('#')[1];
    selectedProfile = document.getElementById(id);
    selectedProfile.classList.remove('hide');
  });

  $('.back').on('click', function (event) {
    allProfiles.classList.remove('hide');
    matchButton.classList.add('hide');
    selectedProfile.classList.add('hide');
  });
  $('#match').on('click', function (event) {
    const winner = document.getElementById('winner');
    winner.textContent = selectedProfile.querySelector('.card-title').textContent;
    const winnerImage = document.getElementById('winner-image');
    winnerImage.src = selectedProfile.querySelector('.card-img-top').src;
  });
});


// change styling when sticky
const title = document.querySelectorAll(".sticky-top")
title.forEach((el) => {
  const observer = new IntersectionObserver( 
    ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
    { threshold: [1] }
  );

  observer.observe(el);
});

