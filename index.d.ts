declare namespace Timer {
    const startTs: number;
    function restart(): void;
    function start(): void;
    function stop(): number;
    function pause(): number;
    const ms: number;
    const milliseconds: number;
    const s: number;
    const sec: number;
    const seconds: number;
    const m: number;
    const min: number;
    const minutes: number;
    const h: number;
    const hours: number;
    const time: number;
}

export default Timer;