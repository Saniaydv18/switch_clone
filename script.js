// Optional: Animate keyword scroll on load
document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.querySelector('.keywords-scroll');
    let scrollAmount = 0;
  
    setInterval(() => {
      scrollAmount += 1;
      scrollContainer.scrollLeft = scrollAmount;
  
      // Loop scroll
      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
      }
    }, 50); // Adjust speed
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  AOS.init({
    offset: 120, // trigger point from top
    delay: 0, 
    duration: 800,
    once: true, // whether animation should happen only once
  });