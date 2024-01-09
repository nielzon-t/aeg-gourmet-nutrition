// Get the modal and the images with specific IDs
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");
var modalOne = document.getElementById("modalOne");
var modalTwo = document.getElementById("modalTwo");
var modalThree = document.getElementById("modalThree");

function openModal(imageSrc) {
    modal.style.display = "block"; // Display the modal
    modalImg.src = imageSrc; // Set the image path for the modal image
    modal.classList.remove('show'); // Remove 'show' class initially
    setTimeout(() => {
      modal.classList.add('show'); // Add 'show' class after a slight delay
    }, 50);
    modalImg.style.maxWidth = "80%";
    modalImg.style.maxHeight = "80vh";
  }
  
  // Function to close modal
  function closeModal() {
    modal.classList.remove('show'); // Remove 'show' class for fade-out transition
    setTimeout(() => {
      modal.style.display = "none"; // Hide the modal after the transition
    }, 300); // Adjust this duration to match the modal transition duration
  }
  
  // Attach click events to the modaled images
  modalOne.addEventListener("click", function() {
    openModal("assets/img/component-01/Image-01@2x.jpg");
  });
  
  modalTwo.addEventListener("click", function() {
    openModal("assets/img/component-01/Image-02@2x.jpg");
  });
  
  modalThree.addEventListener("click", function() {
    openModal("assets/img/component-01/Image-03@2x.jpg");
  });
  
  // Close the modal on clicking outside the modal content area
  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  };
  
  // Close the modal on pressing the Escape key
  document.onkeydown = function(event) {
    event = event || window.event;
    if (event.keyCode == 27) {
      closeModal();
    }
  };