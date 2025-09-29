let videos = document.querySelectorAll(".video");

videos.forEach((video) => {

    video.addEventListener("click", () => {

        if (video.paused == true) {
            video.play();
        }
        else {
            video.pause();
        }

    });

});