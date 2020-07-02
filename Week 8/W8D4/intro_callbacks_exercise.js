class Clock {

    constructor() {
        const dater = new Date();

        this.hours = dater.getHours();
        this.minutes = dater.getMinutes();
        this.seconds = dater.getSeconds();

        this.printTime();
        setInterval(() => {
            this._tick();
        }, 1000);

     }

    printTime(){
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }
    
    _tick() {

        this.seconds++

        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
        }

        if (this.minutes === 60) {
            this.minutes = 0;
            this.hours++;
        }

        if (this.hours === 24) {
            this.hours = 0;
        }

        this.printTime();
    }

}
//const clock = new Clock();

const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


addNumbers = function(sum, numsLeft, completeCallback){
    if(numsLeft > 0){
        reader.question("Please enter a number:", (num) => {
            let parsed = parseInt(num);
            sum+=parsed;
            console.log(`Sum so far: ${sum}`);
            addNumbers(sum, numsLeft-1, completeCallback);
        })
    }
    else{
        completeCallback(sum);
    }
}


//////




function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} greater than ${el2}? Type yes or no.`, (answer) => {
        if (answer === "yes") {
            callback(true);
        } else {
            callback(false);
        }
    })
}


function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i === arr.length - 1) {
        outerBubbleSortLoop(madeAnySwaps);
    } else {
        askIfGreaterThan(arr[i], arr[i+1], isGreaterThan => {
            if (isGreaterThan) {
                const value = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = value;

                madeAnySwaps = true;
            } 
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
        })
    }
}
    
    
    function absurdBubbleSort(arr, sortCompletionCallback) {
        function outerBubbleSortLoop(madeAnySwaps) {
            if (madeAnySwaps) {
                innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
            } else {
                sortCompletionCallback(arr);
            }
            // Begin an inner loop if you made any swaps. Otherwise, call
            // `sortCompletionCallback`.
        }
        outerBubbleSortLoop(true);
        // Kick the first outer loop off, starting `madeAnySwaps` as true.
    }



////


Function.prototype.myBind = function(context) {
    return() => this.apply(context, undefined); 
}  

// func.apply(ctx, [arg...])

////


Function.prototype.myThrottle = function(interval) {
    let tooSoon = true;
    
    return () => {
        if (tooSoon === false) {
                tooSoon = true;
                setTimeout(() => {
                tooSoon = false;
            }, interval)

            this();
        }
    }
}



class Neuron {
  fire() {
    console.log("Firing!");
  }
}

const neuron = new Neuron();
// When we create a new Neuron,
// we can call #fire as frequently as we want

// The following code will try to #fire the neuron every 10ms. Try it in the console:

const interval = setInterval(() => {
  neuron.fire();
}, 10);

// You can use clearInterval to stop the firing:
clearInterval(interval);

// Using Function#myThrottle, we should be able to throttle
// the #fire function of our neuron so that it can only fire
// once every 500ms:

neuron.fire = neuron.fire.myThrottle(500);

