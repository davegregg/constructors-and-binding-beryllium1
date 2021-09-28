function Counter (startingCount = 0) { // Constructor or Class
  // this = {}
  this.count = startingCount
  this.next = () => this.count += 1
  this.prev = () => this.count -= 1
  this.reset = () => this.count = 0
  // return this
}

const counter = new Counter()
const adCounter = new Counter(500)
const newsletterCounter = new Counter(-76)
const emailCounter = new Counter(10000)
const animationCounter = new Counter()
const unexpectedFartSoundCounter = new Counter()

console.log(counter)


// An example of a CLOSURE:
//   Accessing a variable from an outer scope
const x = 4
function addX (y) {
  return y + x      // Here, `x` is a closure.
}

const result = addX(5)