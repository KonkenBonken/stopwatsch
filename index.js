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
};

export default Timer;