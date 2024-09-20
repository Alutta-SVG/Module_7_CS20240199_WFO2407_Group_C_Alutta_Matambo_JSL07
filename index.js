document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName');

      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

      // Validate the form inputs
      if (studentName.trim() === '' || personalMessage.trim() === '') {
          alert('Please fill in all fields');
          return;
      }

      // Generate certificate content dynamically
      certificateContent.innerHTML = `
          <h3>Congratulations, ${studentName}!</h3>
          <p>You have successfully completed ${courseName}.</p>
          <p>Message: ${personalMessage}</p>
      `;

      // Show the modal
      modal.style.display = 'block'; // Change display to 'block' to show the modal

      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if (courseNameInput) courseNameInput.value = '';
  });

  // Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
      modal.style.display = 'none'; // Hide the modal when close button is clicked
  });

  // Close the modal when clicking outside of it
  window.addEventListener('click', function (e) {
      if (e.target === modal) {
          modal.style.display = 'none';
      }
  });
});