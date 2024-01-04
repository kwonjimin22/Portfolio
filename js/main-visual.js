$(function () {
  // index, 메인비주얼 플러그인
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

  // create an engine
  var engine = Engine.create(),
    world = engine.world;

  // create a renderer
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight,
      pixelRatio: 2,
      background: '#080808',
      wireframes: false,
    },
  });

  // create bounds
  var ground = Bodies.rectangle(window.innerWidth / 2 + 160, window.innerHeight + 80, window.innerWidth + 320, 160, {
    render: { fillStyle: '#080808' },
    isStatic: true,
  });
  var wallLeft = Bodies.rectangle(-80, window.innerHeight / 2, 160, window.innerHeight, { isStatic: true });
  var wallRight = Bodies.rectangle(window.innerWidth + 80, window.innerHeight / 2, 160, 1200, { isStatic: true });
  var roof = Bodies.rectangle(window.innerWidth / 2 + 160, -80, window.innerWidth + 320, 160, { isStatic: true });

  // object colors & variables
  var arts = '#EDDC8C';
  var videos = '#B3E8F3';
  var abouts = '#4D4D4D';

  var border = 2;
  var radius = 20;

  // create objects

  // art & design
  var illustration = Bodies.rectangle(70, 500, 133, 40, {
    chamfer: { radius: radius },
    render: { sprite: { texture: 'https://i.imgur.com/RADmiFI.png', xScale: 0.5, yScale: 0.5 } },
  });
  var art = Bodies.rectangle(35, 460, 56, 40, {
    chamfer: { radius: radius },
    render: { sprite: { texture: 'https://i.imgur.com/NwQqeng.png', xScale: 0.5, yScale: 0.5 } },
  });
  var threeD = Bodies.rectangle(90, 460, 52, 40, {
    chamfer: { radius: radius },
    render: { sprite: { texture: 'https://i.imgur.com/ptUWXgO.png', xScale: 0.5, yScale: 0.5 } },
  });
  var graphic = Bodies.rectangle(60, 420, 105, 40, {
    chamfer: { radius: radius },
    render: { sprite: { texture: 'https://i.imgur.com/TyOmVtt.png', xScale: 0.5, yScale: 0.5 } },
  });
  var photo = Bodies.rectangle(50, 380, 86, 40, {
    chamfer: { radius: radius },
    render: { sprite: { texture: 'https://i.imgur.com/tc3MsJP.png', xScale: 0.5, yScale: 0.5 } },
  });
  // video
  var documentary = Bodies.rectangle(220, 540, 165, 40, {
    chamfer: { radius: radius },
    render: { sprite: { texture: 'https://i.imgur.com/QYNTBNr.png', xScale: 0.5, yScale: 0.5 } },
  });
  var animation = Bodies.rectangle(200, 490, 128, 40, {
    chamfer: { radius: radius },
    render: { sprite: { texture: 'https://i.imgur.com/rSnEY9Q.png', xScale: 0.5, yScale: 0.5 } },
  });
  var vintage = Bodies.rectangle(190, 440, 104, 40, {
    chamfer: { radius: radius },
    render: { sprite: { texture: 'https://i.imgur.com/5BSBvSm.png', xScale: 0.5, yScale: 0.5 } },
  });
  var short = Bodies.rectangle(170, 390, 82, 40, {
    chamfer: { radius: radius },
    render: { sprite: { texture: 'https://i.imgur.com/VEyrikN.png', xScale: 0.5, yScale: 0.5 } },
  });
  //misc
  var website = Bodies.rectangle(360, 420, 108, 40, {
    chamfer: { radius: radius },
    render: { sprite: { texture: 'https://i.imgur.com/hr9p4uV.png', xScale: 0.5, yScale: 0.5 } },
  });
  var article = Bodies.rectangle(300, 380, 92, 40, {
    chamfer: { radius: radius },
    render: { sprite: { texture: 'https://i.imgur.com/n6TV7XG.png', xScale: 0.5, yScale: 0.5 } },
  });
  var music = Bodies.rectangle(400, 360, 86, 40, {
    chamfer: { radius: radius },
    render: { sprite: { texture: 'https://i.imgur.com/dax8MwT.png', xScale: 0.5, yScale: 0.5 } },
  });
  var star = Bodies.rectangle(80, 260, 42, 40, {
    chamfer: { radius: radius },
    render: { sprite: { texture: 'https://i.imgur.com/C2qPMbB.png', xScale: 0.5, yScale: 0.5 } },
  });
  //about
  var about = Bodies.rectangle(230, 140, 87, 40, {
    chamfer: { radius: radius },
    render: { sprite: { texture: 'https://i.imgur.com/4gPcZVN.png', xScale: 0.5, yScale: 0.5 } },
  });
  var instagram = Bodies.rectangle(320, 180, 40, 40, {
    id: 'instagramBody',
    chamfer: { radius: radius },
    render: { sprite: { texture: 'https://i.imgur.com/RStSwfG.png', xScale: 0.5, yScale: 0.5 } },
    url: 'https://www.instagram.com/fuse.blog/',
  });
  var random = Bodies.rectangle(230, 180, 112, 40, {
    chamfer: { radius: radius },
    render: { sprite: { texture: 'https://i.imgur.com/YS51eIC.png', xScale: 0.5, yScale: 0.5 } },
  });
});
