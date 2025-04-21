document.getElementById('prompt').addEventListener('click', function() {
    // Fade out the prompt
    this.style.opacity = '0';
    
    // Hide the prompt after the fade-out transition
    setTimeout(() => {
        this.style.display = 'none';
        
        // Show and fade in the video container
        var videoContainer = document.getElementById('video-container');
        videoContainer.style.display = 'block';
        setTimeout(() => {
            videoContainer.classList.add('fade-in');
        }, 10); // Short delay to ensure the display change is applied

        // Optionally, start playing the video
        var video = document.getElementById('video');
        video.play();

        // Show and fade in the `.after` section
        var afterSection = document.querySelector('.after');
        afterSection.style.display = 'block';
        setTimeout(() => {
            afterSection.classList.add('show');
        }, 10); // Short delay to ensure the display change is applied
    }, 1000); // Match the duration of the fade-out transition
});
