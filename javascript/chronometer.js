class Chronometer {
  constructor() {
      this.currentTime = 0;
      this.intervalId = null;
      this.milliseconds = 0;
  }

  start(callback) {
      this.intervalId = setInterval(() => {
          this.milliseconds++;
          if (this.milliseconds === 1000) {
              this.currentTime++;
              this.milliseconds = 0;
          }
          if (callback) {
              callback();
          }
      }, 1)
  }

  getMinutes() {
      return Math.floor(this.currentTime / 60);
  }

  getSeconds() {

      return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
      if (value < 10) {
          return `0${value}`;
      } else {
          return `${value}`;
      }
  }
  getMilliseconds() {
      return this.milliseconds;
  }

  stop() {
      clearInterval(this.intervalId);
  }

  reset() {
      this.currentTime = 0;
      this.milliseconds = 0;
  }

  split() {
      const minutes = this.computeTwoDigitNumber(this.getMinutes());
      const seconds = this.computeTwoDigitNumber(this.getSeconds());
      return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}