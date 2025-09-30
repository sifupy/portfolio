// ===== Skills Carousel =====
let currentSkill = 0;
const slides = document.getElementById('skills-slides');
const dots = document.querySelectorAll('.dot');

function updateCarousel() {
  slides.style.transform = `translateX(-${currentSkill * 100}%)`;
  dots.forEach((d, i) => {
    d.classList.toggle('bg-[#55858f]', i === currentSkill);
    d.classList.toggle('bg-[#ccc]', i !== currentSkill);
  });
}

function prevSkill() {
  currentSkill = (currentSkill - 1 + 3) % 3;
  updateCarousel();
}

function nextSkill() {
  currentSkill = (currentSkill + 1) % 3;
  updateCarousel();
}

function goToSkill(i) {
  currentSkill = i;
  updateCarousel();
}

// Init carousel
updateCarousel();


// ===== Vinyl Player =====
const vinyl = document.getElementById("vinylPlayer");
const trackTitle = document.getElementById("trackTitle");
const vinylImage = document.getElementById("vinylImage");

const tracks = [
  "../presets/music/Totoro1.mp3",
  "../presets/music/02. The Village in May.mp3",
  "../presets/music/05. Evening Wind.mp3",
  "../presets/music/09. A Little Monster.mp3",
  "../presets/music/10. Totoro.mp3",
  "../presets/music/15. Moonlight Flight.mp3",
  "../presets/music/16. Mei is Missing.mp3",
  "../presets/music/17. Cat Bus.mp3",
  "../presets/music/19. My Neighbor Totoro - Ending theme.mp3",
  "../presets/music/20. Hey Let's Go - With Chorus.mp3"
];

let currentTrack = 0;
let isPlaying = false;

function loadTrack(index) {
  vinyl.src = tracks[index];
  trackTitle.textContent = tracks[index].split("/").pop();
  vinyl.volume = 0.1;
}

function togglePlay() {
  const playIconPath = document.querySelector("#playIcon path");
  if (!isPlaying) {
    vinylImage.src = "../presets/gif/vinyl_intro.gif";
    vinyl.play();
    isPlaying = true;
    playIconPath.setAttribute("d", "M6 4h4v12H6zM14 4h4v12h-4z");
    setTimeout(() => { if (isPlaying) vinylImage.src = "../presets/gif/vinyl_loop.gif"; }, 3000);
  } else {
    vinyl.pause();
    isPlaying = false;
    playIconPath.setAttribute("d", "M6 4l12 6-12 6V4z");
    vinylImage.src = "../presets/gif/vinyl_intro.gif";
  }
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(currentTrack);
  if (isPlaying) vinyl.play();
}

function prevTrack() {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrack);
  if (isPlaying) vinyl.play();
}

vinyl.addEventListener("ended", nextTrack);

// Load first track
loadTrack(currentTrack);


// ===== Mobile Warning =====
function isMobileDevice() {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}

window.addEventListener("load", () => {
  const modal = document.getElementById("mobileModal");
  const closeBtn = document.getElementById("closeModal");

  if (isMobileDevice()) {
    modal.classList.remove("hidden");
    closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
  }
});
