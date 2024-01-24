declare namespace Timer {
    const startTs: number;
    function restart(): void;
    const time: number;
}

export default Timer;