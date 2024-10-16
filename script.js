function swapImage() {
    var image = document.getElementById('swapImage');
    
    if (image.src.includes('image1.jpg')) {
        image.src = 'https://i.postimg.cc/bJjyWQ27/Whats-App-Image-2024-10-15-at-10-51-28-PM-1.jpg';  // Swap to second image
    } else {
        image.src = 'https://i.postimg.cc/BbSqQ4pN/Whats-App-Image-2024-10-13-at-5-11-26-PM.jpg';  // Swap back to first image
    }
}
