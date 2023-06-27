/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

function Main(input) {
    input = input.split("\n");
    const calculation = parseInt(input[0]) * parseInt(input[1]);
    if (calculation % 2 !== 0) {
        console.log('Odd');
    }
    else {
        console.log('Even');
    }
}
Main(`0
1901`);
// Main(require("fs").readFileSync("/dev/stdin", "utf8")); 

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXRjb2Rlci1kZWJ1Zy10eXBlc2NyaXB0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gTWFpbihpbnB1dCkge1xuICAgIGlucHV0ID0gaW5wdXQuc3BsaXQoXCJcXG5cIik7XG4gICAgY29uc3QgY2FsY3VsYXRpb24gPSBwYXJzZUludChpbnB1dFswXSkgKiBwYXJzZUludChpbnB1dFsxXSk7XG4gICAgaWYgKGNhbGN1bGF0aW9uICUgMiAhPT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZygnT2RkJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnRXZlbicpO1xuICAgIH1cbn1cbk1haW4oYDBcbjE5MDFgKTtcbi8vIE1haW4ocmVxdWlyZShcImZzXCIpLnJlYWRGaWxlU3luYyhcIi9kZXYvc3RkaW5cIiwgXCJ1dGY4XCIpKTsgXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=