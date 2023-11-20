// Nov. 2023
// Yeom Juwon

let canvasWidth = 800;
let canvasHeight = 1200;
let columnCount, rowCount, gap;
let moduleArray = [];
let moduleImages = [];

let button;

function preload() {
  // 5개의 module 이미지를 preload
  moduleImages[0] = loadImage("module0.png");
  moduleImages[1] = loadImage("module1.png");
  moduleImages[2] = loadImage("module2.png");
  moduleImages[3] = loadImage("module3.png");
  moduleImages[4] = loadImage("module4.png");
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  
  generateModuleArray();
}

function draw() {
  //background(255);

  // moduleArray에 있는 모듈을 그리기
  drawModules();

}

/*
5개니까 2, 4, 6, 8, 10
1~2, 3~4, 5~6, 7~8, 9~10
*/
function generateModuleArray() {
  // 사용자로부터 column, row, gap 입력 받기
  columnCount = int(document.getElementById("columnInput").value);
  rowCount = int(document.getElementById("rowInput").value);
  gap = int(document.getElementById("gapInput").value);
  
  moduleArray.splice(0);
  
  for (let i = 0; i < columnCount * rowCount; i++) {
    if (random(10) < 3) {
      moduleArray.push(moduleImages[0]);
    }
    else if (random(10) >= 3 && random(10) < 5) {
      moduleArray.push(moduleImages[1]);
    }
    else if (random(10) >= 5 && random(10) < 7) {
      moduleArray.push(moduleImages[2]);
    }
    else if (random(10) >= 7 && random(10) < 9) {
      moduleArray.push(moduleImages[3]);
    }
    else {
      moduleArray.push(moduleImages[4]);
    }
  }
}

function drawModules() {
  let moduleWidth = (canvasWidth - gap * (columnCount - 1)) / columnCount;
  let moduleHeight = moduleWidth;

  for (let i = 0; i < columnCount; i++) {
    for (let j = 0; j < rowCount; j++) {
      
      let x = i * (moduleWidth + gap);
      let y = j * (moduleHeight + gap);
      
      let index = i * rowCount + j;
      
      //rect(x, y, moduleWidth, moduleHeight);
      image(moduleArray[index], x, y, moduleWidth, moduleHeight);
    }
  }
}

// SVG 파일로 저장하는 함수
function saveAsPNG() {
  saveCanvas('module_pattern', 'png', dpi=300);
}