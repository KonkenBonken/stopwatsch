const Timer = {
  startTs: Date.now(),
  stopTs: -1,
  restart() {
    this.startTs = Date.now();
    this.stopTs = -1;
  },
  start() {
    if (this.stopTs === -1)
      return this.restart();

    this.startTs += Date.now() - this.stopTs;
    this.stopTs = -1;
  },
  stop() {
    this.stopTs = Date.now();
    return Date.now() - this.startTs;
  },
  pause() {
    return this.stop();
  },
  get time() {
    if (this.stopTs === -1)
      return Date.now() - this.startTs;
    else
      return Date.now() - this.startTs - (Date.now() - this.stopTs);
  },
  get ms() {
    return this.time;
  },
  get milliseconds() {
    return this.ms;
  },
  get s() {
    return this.time / 1000;
  },
  get sec() {
    return this.s;
  },
  get seconds() {
    return this.s;
  },
  get m() {
    return this.s / 60;
  },
  get min() {
    return this.m;
  },
  get minutes() {
    return this.m;
  },
  get h() {
    return this.m / 60;
  },
  get hours() {
    return this.h;
  }
};

export default Timer;