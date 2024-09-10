document.addEventListener('DOMContentLoaded', () => {
    const videoContainers = document.querySelectorAll('.video-container');
    let currentlyPlayingVideo = null;

    videoContainers.forEach(container => {
        const video = container.querySelector('video');
        const button = container.querySelector('.play-pause-btn');
        const playIcon = button.querySelector('.play-icon');
        const pauseIcon = button.querySelector('.pause-icon');

        container.classList.add('paused');

        // play/pause button click event
        button.addEventListener('click', () => {
            if (video.paused) {
                // pause any currently playing video
                if (currentlyPlayingVideo && currentlyPlayingVideo !== video) {
                    currentlyPlayingVideo.pause();
                    currentlyPlayingVideo.parentElement.classList.remove('playing');
                    currentlyPlayingVideo.parentElement.classList.add('paused');
                }

                video.play();
                container.classList.remove('paused');
                container.classList.add('playing');
                currentlyPlayingVideo = video;
            } else {
                video.pause();
                container.classList.remove('playing');
                container.classList.add('paused');
                currentlyPlayingVideo = null;
            }
        });

        // when the video ends, reset the state
        video.addEventListener('ended', () => {
            container.classList.remove('playing');
            container.classList.add('paused');
            currentlyPlayingVideo = null;
        });
    });
});
