const video = document.getElementById("video");
if (Hls.isSupported()) {
  var hls = new Hls();
  hls.loadSource("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8");
  hls.attachMedia(video);
  video.play();
} else if (video.canPlayType("application/vnd.apple.mpegurl")) {
  video.src = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
  video.addEventListener("loadedmetadata", function () {
    video.play();
  });
}
