function updateAboutSection() {
    const aboutSection = document.querySelector(".about");
    const aboutImage = document.getElementById("aboutImage");
  
    if (window.innerWidth <= 768) {
      // For small screens, hide the image and set background image
      aboutSection.style.backgroundImage = "url('./images/penzi image 3.jpg')";
      aboutSection.style.backgroundSize = "cover";
      aboutSection.style.backgroundPosition = "center";
      aboutSection.style.backgroundRepeat = "no-repeat";
      aboutImage.style.display = "none"; // Hide the img element
    } else {
      // For larger screens, show the image and remove background image
      aboutSection.style.backgroundImage = "none";
      aboutImage.style.display = "block"; // Show the img element
    }
  }
  
  // Run the function on page load
  updateAboutSection();
  
  // Add an event listener for window resize
  window.addEventListener("resize", updateAboutSection);
  