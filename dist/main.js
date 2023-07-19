/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

function Main(input) {
    let [a, b, c, x] = input.split("\n").map(s => Number(s));
    let count = 0;
    for (let i = 0; i <= a; i++) {
        for (let j = 0; j <= b; j++) {
            for (let k = 0; k <= c; k++) {
                if ((500 * i) + (100 * j) + (50 * k) === x) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}
Main(`2
2
2
100`);
// Main(require("fs").readFileSync("/dev/stdin", "utf8")); 

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLHdCQUF3QixRQUFRO0FBQ2hDLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXRjb2Rlci1kZWJ1Zy10eXBlc2NyaXB0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gTWFpbihpbnB1dCkge1xuICAgIGxldCBbYSwgYiwgYywgeF0gPSBpbnB1dC5zcGxpdChcIlxcblwiKS5tYXAocyA9PiBOdW1iZXIocykpO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gYTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IGI7IGorKykge1xuICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPD0gYzsgaysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCg1MDAgKiBpKSArICgxMDAgKiBqKSArICg1MCAqIGspID09PSB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGNvdW50KTtcbn1cbk1haW4oYDJcbjJcbjJcbjEwMGApO1xuLy8gTWFpbihyZXF1aXJlKFwiZnNcIikucmVhZEZpbGVTeW5jKFwiL2Rldi9zdGRpblwiLCBcInV0ZjhcIikpOyBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==