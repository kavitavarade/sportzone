
    const images = document.querySelectorAll('.img-wrapper img');
    let currentImageIndex = 0;

    function showNextImage() {
        // Remove the "active" class from the current image
        images[currentImageIndex].classList.remove('active');
        
        // Update the index to the next image
        currentImageIndex = (currentImageIndex + 1) % images.length;
        
        // Add the "active" class to the new image
        images[currentImageIndex].classList.add('active');
    }

    // Initially show the first image
    images[currentImageIndex].classList.add('active');

    // Change images every 3 seconds
    setInterval(showNextImage, 9000);