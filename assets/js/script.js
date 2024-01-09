const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImg");
const modalOne = document.getElementById("modalOne");
const modalTwo = document.getElementById("modalTwo");
const modalThree = document.getElementById("modalThree");
const anchors = document.querySelectorAll('a');

function openModal(imageSrc) {
    modal.style.display = "block"; 
    modalImg.src = imageSrc; 
    modal.classList.remove('show');
    setTimeout(() => {
      modal.classList.add('show');
    }, 50);
    modalImg.style.maxWidth = "80%";
    modalImg.style.maxHeight = "80vh";
  }
  
  function closeModal() {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }
  
  modalOne.addEventListener("click", function() {
    openModal("assets/img/component-01/Image-01@2x.jpg");
  });
  
  modalTwo.addEventListener("click", function() {
    openModal("assets/img/component-01/Image-02@2x.jpg");
  });
  
  modalThree.addEventListener("click", function() {
    openModal("assets/img/component-01/Image-03@2x.jpg");
  });
  

  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  };
  
  document.onkeydown = function(event) {
    event = event || window.event;
    if (event.keyCode == 27) {
      closeModal();
    }
  };

// Loop through each anchor element and attach a click event listener
anchors.forEach(anchor => {
  anchor.addEventListener('click', event => {
    
    // Get the ID of the clicked anchor element
    const clickedId = event.target.getAttribute('id');
    
    // Log the clicked ID to the console
    console.log(`Clicked ID: ${clickedId}`);
  });
});