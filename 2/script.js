const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Function to open the modal
const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Function to close the modal
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Add event listener to all modal buttons
btnsOpenModal.forEach(button => {
  button.addEventListener("click", openModal);
});

// Closes modal when clicking the close button
btnCloseModal.addEventListener("click", closeModal);

// Closes modal when clicking outside the modal
overlay.addEventListener("click", closeModal);

// Closes modal on pressing escape key
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
