function setup() {
  createCanvas(400, 400);
  background(220);
  let tex = createP();
  tex.style('font-size', '20px');
  tex.position(60, 165);
  katex.render('\\dot{\\theta}_{i} = \\omega_{i} + \\frac{K}{N}  \\displaystyle\\sum_{j=1}^N \\sin(\\theta_{j} - \\theta_{i})', tex.elt);
  let label = createP('Kuramoto Model');
  label.style('font-size', '20px');
  label.style('font-family', 'KaTeX-Main');
  label.position(135, 120);
}

function draw(){
  rect(30, 20, 55, 55);
}
