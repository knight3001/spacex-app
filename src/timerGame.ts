function timerGame(callback?: () => void) {
  console.log("Ready ....go!");
  setTimeout(() => {
    console.log("Time's up!");
    callback && callback();
  }, 1000);
}

export default timerGame;
