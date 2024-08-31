$('.tourism_parent').slick({
    dots:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:`<button class="button_1"></button>`,
    nextArrow:`<button class="button_1"></button>`,
    autoplay:true,
    autoplaySpeed: 1000,
});
function fun(data) {
    var icon = document.getElementsByClassName(data)[0];
    if (icon.style.display === "flex") {
        icon.style.display = "none";
    } else {
        icon.style.width = "150px";
        icon.style.display = "flex";
    }
}
function fun1(data){
    var Icon = document.getElementsByClassName(data)[0];
    Icon.style.width="0px"
    Icon.style.display="none"
}
function fun2(data){
    var Flip = document.getElementsByClassName(data)[0];
        Flip.style.transform = "rotateY(180deg)"
    //   var video = document.getElementById("video_id")[0];
    //   video.pause(); // Ensure the video is paused
    //     video.currentTime = 0;
}
function fun3(data){
    var Flip1 = document.getElementsByClassName(data)[0];
        Flip1.style.transform = "rotateY(360deg)"
}
document.querySelector('.tourism_2child1').addEventListener('click', function() {
    var flip1 = document.querySelector('.flip_1');
    var videoContainer = document.querySelector('.tourism_2child1');
    var video = document.querySelector('.tourism_2child1 video');

    // Add the 'flipped' class to flip the container
    flip1.classList.toggle('flipped');

    // Toggle full-screen video
    if (flip1.classList.contains('flipped')) {
        videoContainer.classList.add('fullscreen-video');
        video.play();
    } else {
        videoContainer.classList.remove('fullscreen-video');
        video.pause();
        video.currentTime = 0; // Reset video to start
    }
});

