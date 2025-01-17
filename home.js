const images = [
    { src: '.jpg', heading: 'Welcome to Sport Zone', description: 'Catch the latest scores, news, and updates!' },
    { src: 'gym.jpg', heading: 'Get Your Gear Today', description: 'Quality sports equipment for all levels!' },
    { src: 'football.jpg', heading: 'Join the Game', description: 'Find everything you need to get started.' }
  ];
  
  let currentIndex = 0;
  
  function changeImage() {
    const imageElement = document.getElementById('landing-image');
    const headingElement = document.getElementById('image-heading');
    const descriptionElement = document.getElementById('image-description');
    
    imageElement.src = images[currentIndex].src;
    headingElement.textContent = images[currentIndex].heading;
    descriptionElement.textContent = images[currentIndex].description;
    
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  // Change image every 4 seconds
  setInterval(changeImage, 4000);
  