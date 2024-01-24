const Timer = {
  startTs: Date.now(),
  restart() {
    this.startTs = Date.now();
  },
  get time() {
    return Date.now() - this.startTs;
  },
};

export default Timer;