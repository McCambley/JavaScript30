console.info(
  "The purpose of this project is to add up the combined runtime of all the videos using the data stored in each list item's attribute list."
);

const videos = [...document.querySelectorAll('[data-time]')];
const seconds = videos.map(video => video.dataset.time);
const totalTime = seconds.reduce((total, vidTime, index) => {
  const [mins, secs] = vidTime.split(':').map(parseFloat);
  // const c = parseInt(b.split(':')[0]) * 60 + parseInt(b.split(':')[1]);
  const totalTime = mins * 60 + secs;
  console.log(`Video ${index + 1} is ${totalTime} seconds long!`);
  return total + totalTime;
}, 0);

console.log(`Total runtime is ${totalTime} seconds!`);

let remainingRuntime = totalTime;

let hours = Math.floor(remainingRuntime / 3600);
remainingRuntime = remainingRuntime % 3600;

let minutes = Math.floor(remainingRuntime / 60);
remainingRuntime = remainingRuntime % 60;

console.log(`In other words, that's ${hours} hours, ${minutes}, minutes, and ${remainingRuntime} seconds!`);
