document.addEventListener('DOMContentLoaded', function () {
    const seeMoreLinks = document.querySelectorAll('.see-more');

    seeMoreLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            const reviewCard = this.closest('.review-card');
            const fullReview = reviewCard.querySelector('.full-review');
            const reviewText = reviewCard.querySelector('.review-text');

            if (fullReview.style.display === 'none') {
                fullReview.style.display = 'block';
                reviewText.style.display = 'none';
                this.textContent = 'See Less';
            } else {
                fullReview.style.display = 'none';
                reviewText.style.display = '-webkit-box';
                this.textContent = 'See More';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const feedbackTextarea = document.getElementById('feedback-textarea');
    const submitBtn = document.getElementById('submit-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const submissionMessage = document.getElementById('submission-message');

    // Handle Submit Button Click
    submitBtn.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission (if inside a form)
        if (feedbackTextarea.value.trim() === '') {
            alert('Please write something before submitting.'); // Optional: Validate input
        } else {
            submissionMessage.style.display = 'block'; // Show "Submitted!" message
            feedbackTextarea.value = ''; // Clear the textarea
        }
    });

    // Handle Cancel Button Click
    cancelBtn.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission (if inside a form)
        feedbackTextarea.value = ''; // Clear the textarea
        submissionMessage.style.display = 'none'; // Hide the "Submitted!" message
    });
});
