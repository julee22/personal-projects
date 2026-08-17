const tabNav = document.querySelectorAll('.nav-link');
const tabImage = document.querySelectorAll('.tab-image');

tabNav.forEach(button => {
  button.addEventListener("click", () => {
    event.preventDefault();
    
    tabImage.forEach(image => {
      image.classList.remove("active");
    });

    let imgID = "her-image";
    if(button.id == 'his-story') {
      imgID = "his-image";
    }
    const selectTabImage = document.getElementById(imgID);
    selectTabImage.classList.add("active"); 

  });
});
