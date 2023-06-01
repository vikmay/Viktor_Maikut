class Marker {
    constructor(color, inkLevel = 100) {
      this.color = color;
      this.inkLevel = inkLevel;
    }
  
    print(text) {
      let output = '';
      for (let i = 0; i < text.length; i++) {
        if (this.inkLevel > 0) {
          output += text[i];
          if (text[i] !== ' ') {
            this.inkLevel -= 0.5;
          }
        } else {
          break;
        }
      }
      console.log(`%c${output}`, `color:${this.color}`);
    }
  }
  
  class RefillableMarker extends Marker {
    refill() {
      this.inkLevel = 100;
    }
  }
  
  let marker = new RefillableMarker('blue');
  marker.print('Hello, world! This is a test for marker class.');
  marker.print('Trying to print this when ink is almost finished.');
  marker.refill();
  marker.print('Printing after refilling the marker.');
  
  