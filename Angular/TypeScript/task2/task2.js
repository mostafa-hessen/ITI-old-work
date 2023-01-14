console.log("Slkjh tsc.cmd task2.ts –watch /");
var counterNumber = document.getElementById('counterNumber');
var increasebtn = document.querySelector('.increase');
var decreasebtn = document.querySelector('.decrease');
var reset = document.querySelector('.reset');
var Counter = /** @class */ (function () {
    function Counter() {
        this.counter = 0;
    }
    Counter.prototype.increase = function () {
        console.log();
        return ++this.counter;
    };
    Counter.prototype.decrease = function () {
        // console.log(this.counter++);
        return --this.counter;
    };
    Counter.prototype.reset = function () {
        console.log(this.counter++);
        return this.counter = 0;
    };
    return Counter;
}());
var myCounter = new Counter();
increasebtn === null || increasebtn === void 0 ? void 0 : increasebtn.addEventListener("click", function () { return counterNumber.innerHTML = myCounter.increase(); });
decreasebtn === null || decreasebtn === void 0 ? void 0 : decreasebtn.addEventListener("click", function () { return counterNumber.innerHTML = myCounter.decrease(); });
reset === null || reset === void 0 ? void 0 : reset.addEventListener("click", function () { return counterNumber.innerHTML = myCounter.reset(); });
