/**
 * Main page of JS for the page
 */

function show1() {
	document.getElementsByClass("1").style.display = "block";
}
function show2() {
	document.getElementsByClass("2").style.display = "block";
}
function show3() {
	document.getElementsByClass("3").style.display = "block";
}
function show4() {
	document.getElementsByClass("4").style.display = "block";
}
function show5() {
	document.getElementsByClass("5").style.display = "block";
}

//var viewer = UstreamEmbed('UstreamIframe');

// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

     // tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }