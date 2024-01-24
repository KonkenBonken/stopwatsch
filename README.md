[![npm version](https://badge.fury.io/js/stopwatsch.svg)](https://badge.fury.io/js/stopwatsch)

# Stopwatsch

> A simple light weight JavaScript Stopwatch

## Installation

To install and set up the library, run:

```sh
$ npm install stopwatsch
```

## Getting Started

```js
import stopwatsh from 'stopwatsch';

stopwatsh.start()
setTimeout(() => console.log(stopwatsh.time), 1000) // ≈ 1000
```

## methods

### #start()

```js
stopwatsh.start()
```
Starts the stopwatch

### #stop()

```js
stopwatsh.stop()
stopwatsh.pause()
```
Stops the stopwatch

### #restart()

```js
stopwatsh.restart()
```
Restarts the stopwatch

## properties

### #milliseconds

```js
stopwatsh.time
stopwatsh.ms
stopwatsh.milliseconds
```
The elapsed time in milliseconds

### #seconds

```js
stopwatsh.s
stopwatsh.sec
stopwatsh.seconds
```
The elapsed time in seconds

### #minutes

```js
stopwatsh.m
stopwatsh.min
stopwatsh.minutes
```
The elapsed time in minutes

### #hours

```js
stopwatsh.h
stopwatsh.hours
```
The elapsed time in hours