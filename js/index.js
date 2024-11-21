// To Pause carousel auto-transition on button click and resume after 5 seconds
const carouselElement = document.querySelector('#bookCarousel');
const carousel = new bootstrap.Carousel(carouselElement, {
  interval: 3000,
  pause: false, // Prevent pausing on hover
});

document.querySelectorAll('.styled-button').forEach((button) => {
  button.addEventListener('click', () => {
    carousel.pause(); // Pause the carousel
    setTimeout(() => carousel.cycle(), 5000); // Resume after 5 seconds
  });
});

// likes will be increased on being clicked
document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', function () {
      let likeCount = this.querySelector('.like-count');
      let count = parseInt(likeCount.textContent) + 1;
      likeCount.textContent = count;
      this.classList.add('active');
    });
  });
  