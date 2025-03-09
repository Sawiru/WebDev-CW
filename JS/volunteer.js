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
