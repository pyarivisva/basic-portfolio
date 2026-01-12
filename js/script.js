// Page navigation
const params = new URLSearchParams(window.location.search);
const item = params.get("item"); // Get 'item' value from URL

// Hide all experiences and portfolio items first
const experiences = document.querySelectorAll(".experience, .portfolio");

if (item) {
  const experienceDiv = document.getElementById(item);
  if (experienceDiv) {
    experienceDiv.style.display = "block"; 
  } else {
    document.getElementById("not-found").style.display = "block";
  }
}

const scrollToHome = document.querySelectorAll(".scroll-to-home");

scrollToHome.forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("intro").scrollIntoView({
      behavior: "smooth",
    });
  });
});

const scrollToExp = document.querySelectorAll(".scroll-to-experience");

scrollToExp.forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("experience").scrollIntoView({
      behavior: "smooth",
    });
  });
});

const scrollToPort = document.querySelectorAll(".scroll-to-portfolio");

scrollToPort.forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("portfolio").scrollIntoView({
      behavior: "smooth",
    });
  });
});

const scrollToAbout = document.querySelectorAll(".scroll-to-about");

scrollToAbout.forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("about").scrollIntoView({
      behavior: "smooth",
    });
  });
});

// New nav links for Education, Certifications, Achievements
const scrollToEducation = document.querySelectorAll(".scroll-to-education");
scrollToEducation.forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("education").scrollIntoView({
      behavior: "smooth",
    });
  });
});

const scrollToCerts = document.querySelectorAll(".scroll-to-certifications");
scrollToCerts.forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("certifications").scrollIntoView({
      behavior: "smooth",
    });
  });
});

const scrollToAch = document.querySelectorAll(".scroll-to-achievements");
scrollToAch.forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("achievements").scrollIntoView({
      behavior: "smooth",
    });
  });
});

const scrollToContact = document.getElementById("scroll-to-contact");
scrollToContact.addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
});

// Portfolio slider
document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const cardItems = document.querySelectorAll(".card-item");
  const cardWidth = cardItems[0].offsetWidth;
  const cardsVisible = 3;
  const totalCards = cardItems.length;
  let currentIndex = 0;

  const prevButton = document.querySelector(".prev-btn");
  const nextButton = document.querySelector(".next-btn");

  if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
      }
    });

    nextButton.addEventListener("click", () => {
      if (currentIndex < totalCards - cardsVisible) {
        currentIndex++;
        updateSliderPosition();
      }
    });
  }

  function updateSliderPosition() {
    const offset = -currentIndex * cardWidth;
    sliderWrapper.style.transform = `translateX(${offset}px)`;
  }

  updateSliderPosition();
});

function resetForm() {
  document.querySelector(".contact-form").reset();
}

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
