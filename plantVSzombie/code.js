var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6fd731c2-feef-4dc8-b097-aa4fec2eb832","d6bb2026-4f79-44dd-8acc-4d672a2cb11f","9c80d239-a860-477f-a976-1a10eb9afb66","07e4d746-24ad-4c83-85ca-c1855f4dfa34"],"propsByKey":{"6fd731c2-feef-4dc8-b097-aa4fec2eb832":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"m98q9TjZEp2ukvknmpWhVUrryaduNnwA","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/6fd731c2-feef-4dc8-b097-aa4fec2eb832.png"},"d6bb2026-4f79-44dd-8acc-4d672a2cb11f":{"name":"p","sourceUrl":null,"frameSize":{"x":50,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"wnqIggqxzMRHmv3ol14LZbRhjU1r8p4g","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":100},"rootRelativePath":"assets/d6bb2026-4f79-44dd-8acc-4d672a2cb11f.png"},"9c80d239-a860-477f-a976-1a10eb9afb66":{"name":"vbvb.jpg_1","sourceUrl":null,"frameSize":{"x":100,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"EzKmAI7rs8xqlfqnQ.aSxmPBt74gSvyq","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":70},"rootRelativePath":"assets/9c80d239-a860-477f-a976-1a10eb9afb66.png"},"07e4d746-24ad-4c83-85ca-c1855f4dfa34":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"uKiHCfAWFNg6JixtOAgkjXjvBqy_i9aF","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/07e4d746-24ad-4c83-85ca-c1855f4dfa34.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg = createSprite(200, 200);
bg.setAnimation("animation_1");
var p1 = createSprite(40, 200);
p1.setAnimation("p");
var p2 = createSprite(40, 350);
p2.setAnimation("p");
var p3 = createSprite(40, 50);
p3.setAnimation("p");
var z2 = createSprite(400, 200);
z2.setAnimation("vbvb.jpg_1");
var z3 = createSprite(400, 50);
z3.setAnimation("vbvb.jpg_1");
var z1 = createSprite(400, 350);
z1.setAnimation("vbvb.jpg_1");
var bullet1 = createSprite(0, p3.x);
bullet1.setAnimation("animation_2");
var bullet2 = createSprite(0, 200);
bullet2.setAnimation("animation_2");
var bullet3 = createSprite(0, 350);
bullet3.setAnimation("animation_2");
var score = 0;
textSize(25);
fill("225");
function draw() {
  z3.velocityX = randomNumber(-1, -5);
  z2.velocityX = randomNumber(-1, -5);
  z1.velocityX = randomNumber(-1, -5);
  if (z1.x<0||z2.x<0||z3.x<0) {
    z1.x = 400;
    z2.x = 400;
    z3.x = 400;
  }
  if (keyDown("1")) {
    bullet1.velocityX = 9;
  }
   if (keyDown("2")) {
    bullet2.velocityX = 9;
  }
   if (keyDown("3")) {
    bullet3.velocityX = 9;
  }
  if(bullet1.isTouching(z3)){
    bullet1.x=0;
    bullet1.y=p3.x;
    bullet1.velocityX = 0;
    z3.x = 400;
      z3.velocityX = randomNumber(-1, -5);
       score = score+1;
  }
   if(bullet2.isTouching(z2)){
    bullet2.x=0;
    bullet2.y=200;
    bullet2.velocityX = 0;
    z2.x = 400;
      z3.velocityX = randomNumber(-1, -5);
     score = score+1;  
  }
   if(bullet3.isTouching(z1)){
    bullet3.x=0;
    bullet3.y=350;
    bullet3.velocityX = 0;
    z1.x = 400;
      z1.velocityX = randomNumber(-1, -5);
    score = score+1;
  }
  drawSprites();
  if (z1.isTouching(p2)&&z2.isTouching(p1)&&z3.isTouching(p3)) {
     z3.velocityX = 0;
  z2.velocityX = 0;
  z1.velocityX = 0;
     text("out", 200, 200);
  }
  text("score"+score, 300, 15);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
