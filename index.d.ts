declare namespace Timer {
    const startTs: number;
    function restart(): void;
    function start(): void;
    function stop(): number;
    function pause(): number;
    const ms: number;
    const time: number;
}

export default Timer;