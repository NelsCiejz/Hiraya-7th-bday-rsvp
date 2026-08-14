// BACKGROUND MUSIC PLAY/PAUSE LOGIC
  const music = document.getElementById("bg-music");
  let isPlaying = false;

  function toggleMusic() {
    const musicBtn = document.querySelector(".music-btn");
    if (isPlaying) {
      music.pause();
      musicBtn.innerHTML = "🔇";
    } else {
      music.play();
      musicBtn.innerHTML = "🎵";
    }
    isPlaying = !isPlaying;
  }

  // Subukang i-play nang kusa kapag nag-click/touch ang bisita sa kahit saang bahagi ng screen
  document.addEventListener('click', function() {
    if (!isPlaying) {
      music.play().then(() => {
        isPlaying = true;
        document.querySelector(".music-btn").innerHTML = "🎵";
      }).catch(err => {
        // Papayagan lang ng browser kapag may user interaction
      });
    }
  }, { once: true });