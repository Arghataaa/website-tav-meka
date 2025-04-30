document.addEventListener("DOMContentLoaded", function() {
    const titles = document.querySelectorAll('.judul h1');

    titles.forEach((title) => {
        let position = 0;
        let direction = 1;

        setInterval(() => {
            position += direction;
            if (position > 20 || position < -20) {
                direction *= -1;
            }
            title.style.transform = `translateX(${position}px)`;
        }, 50);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const hiddenElements = document.querySelectorAll('.hidden');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${index * 0.5}s`; // delay per elemen
          entry.target.classList.add('show');
        }
      });
    });
  
    hiddenElements.forEach(el => observer.observe(el));
  });
  document.addEventListener("DOMContentLoaded", function() {
    const hiddenElements = document.querySelectorAll('.hidden');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${index * 0.2}s`; // delay per elemen
          entry.target.classList.add('show');
        }
      });
    });
  
    hiddenElements.forEach(el => observer.observe(el));
  });
      var lastScrollTop = 0;
          navbar = document.getElementById("nav");
      window.addEventListener("scroll",  function(){
          var scrollTop = window.pageYOffset || document
              .documentElement.scrollTop;
          if (scrollTop > lastScrollTop){
              navbar.style.top="-112px";
          } else {
              navbar.style.top="0"
          }
          lastScrollTop = scrollTop
      })