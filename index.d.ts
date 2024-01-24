declare namespace Timer {
    const startTs: number;
    function restart(): void;
    function start(): void;
    function stop(): number;
    function pause(): number;
    const ms: number;
    const s: number;
    const m: number;
    const h: number;
    const time: number;
}

export default Timer;