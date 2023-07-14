/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

function Main(input) {
    let persedInput = input.split("\n")[1].split(' ').map(s => Number(s));
    let count = 0;
    while (persedInput.every(n => n % 2 === 0)) {
        persedInput = persedInput.map((num) => num / 2);
        count++;
    }
    console.log(count);
}
Main(`3
8 12 40`);
// Main(require("fs").readFileSync("/dev/stdin", "utf8")); 

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2F0Y29kZXItZGVidWctdHlwZXNjcmlwdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIE1haW4oaW5wdXQpIHtcbiAgICBsZXQgcGVyc2VkSW5wdXQgPSBpbnB1dC5zcGxpdChcIlxcblwiKVsxXS5zcGxpdCgnICcpLm1hcChzID0+IE51bWJlcihzKSk7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICB3aGlsZSAocGVyc2VkSW5wdXQuZXZlcnkobiA9PiBuICUgMiA9PT0gMCkpIHtcbiAgICAgICAgcGVyc2VkSW5wdXQgPSBwZXJzZWRJbnB1dC5tYXAoKG51bSkgPT4gbnVtIC8gMik7XG4gICAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGNvdW50KTtcbn1cbk1haW4oYDNcbjggMTIgNDBgKTtcbi8vIE1haW4ocmVxdWlyZShcImZzXCIpLnJlYWRGaWxlU3luYyhcIi9kZXYvc3RkaW5cIiwgXCJ1dGY4XCIpKTsgXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=