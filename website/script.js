let typed = new Typed(".type-animation", {
    strings: ["a Frontend Developer", "a Learner", "an RMT", "Thomas Le"],
    typeSpeed: 90,
    backSpeed: 50,
    loop: true
})


function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
    }
  }
  window.addEventListener("scroll", reveal);