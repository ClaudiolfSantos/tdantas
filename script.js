const year = document.getElementById("year");
const revealTargets = document.querySelectorAll(".section-reveal");

document.documentElement.classList.add("has-js");

year.textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  },
);

revealTargets.forEach((target) => revealObserver.observe(target));

const header = document.querySelector(".site-header");

const syncHeaderState = () => {
  if (window.scrollY > 18) {
    header.style.borderColor = "rgba(255, 210, 90, 0.25)";
    header.style.boxShadow = "0 20px 60px rgba(0, 0, 0, 0.42)";
  } else {
    header.style.borderColor = "rgba(255, 215, 102, 0.18)";
    header.style.boxShadow = "0 24px 80px rgba(0, 0, 0, 0.45)";
  }
};

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });