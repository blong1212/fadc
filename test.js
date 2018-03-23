function setup(){
  //Creates the initial canvas with specified dimensions
  createCanvas(400, 100);
  //Sets the background to the color black
  background(0);
  //Leaves jagged edges for shapes
  noSmooth();
}

function setup(){
  //Creates the initial canvas with specified dimensions
  createCanvas(400, 100);
  //Sets the background to the color black
  background(0);
  //Leaves jagged edges for shapes
  noSmooth();
}

function draw(){
  setup();
  //Initiate the variable, h, and sets it equal to the computer time (hour)
  var h = hour()%12;
  //Handles the issue with 00:00 or midnight
  if((hour() == 0)||(hour() == 12)){
    h = 12;
  }
  //Initiate the variable, m, and sets it equal to the computer time (minute)
  var m = minute();
  //Initiate the variable, s, and sets it equal to the computer time (second)
  var s = second();

  textSize(32);
  fill(0, 102, 153);
  text(nf(h,2,0), 95, 34);
  fill(0, 102, 153);
  text(':', 135, 34);
  fill(0, 102, 153);
  text(nf(m,2,0), 150, 34);
  fill(0, 102, 153);
  text(':', 190, 34);
  fill(0, 102, 153);
  text(nf(s,2,0), 205, 34);

  //Handles meridiem for the time (AM or PM)
  if(hour() < 12){
    textSize(32);
    text('AM', 255, 34);
  }else{
    textSize(32);
    text('PM', 255, 34);
  }
}
