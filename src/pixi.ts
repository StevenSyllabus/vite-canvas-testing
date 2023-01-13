import * as PIXI from 'pixi.js';

const pixiContainer = <any>document.getElementById(`app`);

console.log(PIXI);
let app = new PIXI.Application({
  width: 500,
  height: 500,
});

pixiContainer.appendChild(app.view);
