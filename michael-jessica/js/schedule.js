// Fade In animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // optional: run once
      }
    });
  },
  {
    threshold: 0.1 // 10% visible
  }
);

document.addEventListener("scroll", () => {
  document.querySelectorAll('.fade').forEach(el => {
    el.classList.remove("hide");
  });
    
  setTimeout(() => {
    document.querySelectorAll('.fade').forEach(el => {
      observer.observe(el);
    });
  }, "500");
});

document.addEventListener("DOMContentLoaded", () => {
});


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
