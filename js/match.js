const data = [
  { State: "Maharashtra", Capital: "Mumbai" },
  { State: "Punjab", Capital: "Chandigarh" },
  { State: "Karnataka", Capital: "Bengaluru" },
  { State: "Himachal Pradesh", Capital: "Shimla" },
  { State: "Rajasthan", Capital: "Jaipur" }
];

let states = [];
let capitals = [];
let scapitals = [];
let sa = null;
let lines = [];
let lined = { x1: null, y1: null, x2: null, y2: null };
let toggle = false;
let onbox = false;
let score = 0;

// All p5 sketches need a setup function, most of it pretty self-explano

function setup() {
  width = 600;
  height = 380;

  let cnv = createCanvas(width, height);

  border();

  data.map((e, index) => {
    scapitals.push(e.Capital);
  });

  //shuffling the capitals
  scapitals = shuffle(scapitals);
//displaying the boxes
  data.map((e, index) => {
    states.push(new State(20, index * 75 + 20, e.State, e.Capital));
    capitals.push(new Capital(350, index * 75 + 20, scapitals[index]));
  });
}
//Function for the submit button (yet to be added)

function submitScores() {
  alert("Link to API etc...");
}

//clears the screen between renderings
function border() {
  strokeWeight(1);
  stroke(0);
  background(255, 200, 200);
}

// Processing clicks
function mouseClicked() {
  if (!toggle) {
    lined.x1 = mouseX;
    lined.y1 = mouseY;
  } else {
    lined.x2 = mouseX;
    lined.y2 = mouseY;

    for (let i = 0; i < states.length; i++) {
      if (states[i].selected) {
        for (let j = 0; j < capitals.length; j++) {
          if (capitals[j].hover(mouseX, mouseY)) {
            //pushing lines drawn into an array for rendering
            lines.push(new Connect(lined.x1, lined.y1, lined.x2, lined.y2));
            //reseting line-holder
            lined = { x1: null, y1: null, x2: null, y2: null };
            break;
          }
        }
      }
    }
  }

  toggle = !toggle;

  for (let i = 0; i < states.length; i++) {
    //processing clicks on states
    states[i].click(mouseX, mouseY);
  }

  for (let i = 0; i < capitals.length; i++) {
    //processing clicks on capitals
    capitals[i].click(mouseX, mouseY);
  }
}

//where the magic happens
function draw() {
  border();

  for (let i = 0; i < states.length; i++) {
    states[i].show(mouseX, mouseY);

    if (states[i].selected) {
      strokeWeight(10);
      stroke(30, 200, 190);

      line(
        states[i].x + states[i].w,
        states[i].y + states[i].h / 2,
        mouseX,
        mouseY
      );

      fill(255, 0, 0);
      strokeWeight(2);
      circle(states[i].x + states[i].w, states[i].y + states[i].h / 2, 10);
    }
  }

  for (let i = 0; i < capitals.length; i++) {
    strokeWeight(1);
    stroke(0);
    capitals[i].show(mouseX, mouseY);
  }

  for (let i = 0; i < lines.length; i++) {
    let l = new Connect(lines[i].x, lines[i].y, lines[i].xx, lines[i].yy);
    l.show(l.x, l.y, l.xx, l.yy);
  }

  //Display score

  stroke(0);
  strokeWeight(1);
  fill(0);
  text("Score: " + score, 250, 355);
}

//A class for connecting lines joining each pair
class Connect {
  constructor(x, y, xx, yy) {
    this.x = x;
    this.y = y;
    this.xx = xx;
    this.yy = yy;
  }

  show() {
    strokeWeight(10);
    stroke("rgba(0,255,90,0.5)");
    circle(this.x, this.y, 10);
    line(this.x, this.y, this.xx, this.yy);
    circle(this.xx, this.yy, 10);
  }
}

class Capital {
  constructor(x, y, name) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.w = 200;
    this.h = 50;
    this.selected = false;
    this.answer = false;
    this.answered = false;
  }

  show(mx, my) {
    if (this.answer) {
      //correct answer

      fill(0, 200, 0);
      rect(this.x, this.y, this.w, this.h);
      textSize(20);
      fill(255);
      text(this.name, this.x + this.w / 8, this.y + this.h - 15);
    } else {
      //incorrect answer
      if (this.answered) {
        fill(200, 0, 0);
        rect(this.x, this.y, this.w, this.h);
        textSize(20);
        fill(255);
        text(this.name, this.x + this.w / 8, this.y + this.h - 15);
      } else {
        //not yet answered
        fill(this.hover(mx, my) ? 120 : 255);
        rect(this.x, this.y, this.w, this.h);
        textSize(20);
        fill(this.hover(mx, my) ? 255 : 120);
        text(this.name, this.x + this.w / 8, this.y + this.h - 15);
      }
    }
  }

  //are we touching the box?
  hover(x, y) {
    if (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h) {
      return true;
    } else {
      return false;
    }
  }

  click(x, y) {
    this.hover(x, y) ? (this.selected = true) : (this.selected = false);

    //onbox, so we don't draw lines outside the boxes
    this.hover(x, y) ? (onbox = true) : (onbox = false);

    if (this.selected && sa !== null) {
      if (this.name === sa) {
        this.answer = true;
        this.answered = true;
        score += 1;
        sa = null;
      } else {
        this.answer = false;
        score -= 1;
        this.answered = true;
        sa = null;
      }
    }
    return this.answer;
  }
}

class State {
  constructor(x, y, name, capital) {
    this.selected = false;
    this.answered = false;
    this.x = x;
    this.y = y;
    this.name = name;
    this.w = 200;
    this.h = 50;
  }

  show(mx, my) {
    strokeWeight(0.5);
    stroke(100, 100, 200);
    fill(this.hover(mx, my) ? 120 : 255);
    rect(this.x, this.y, this.w, this.h);
    textSize(20);
    fill(this.hover(mx, my) ? 255 : 120);
    text(this.name, this.x + this.w / 8, this.y + this.h - 15);
  }

  hover(x, y) {
    if (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h) {
      return true;
    } else {
      return false;
    }
  }

  click(x, y) {
    this.hover(x, y) ? (this.selected = true) : (this.selected = false);
    this.hover(x, y) ? (onbox = true) : (onbox = false);
    if (this.selected) {
      sa = data[data.findIndex(i => i.State === this.name)].Capital;
      //given the click, find the capital
    }
    return this.selected;
  }
}