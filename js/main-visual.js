$(function () {
  // 메인비주얼 - 키워드
  // Matter.js module aliases
  const { Engine, Render, Runner, Bodies, World } = Matter;

  function runMatterAnimation() {
    // Create an engine
    const engine = Engine.create();

    // Get the .view element
    const viewElement = document.querySelector('.keyword-box');

    // Create a renderer within the .view element
    const render = Render.create({
      element: viewElement,
      engine: engine,
      options: {
        width: viewElement.clientWidth, // Set width based on .view element size
        height: viewElement.clientHeight, // Set height based on .view element size
        background: 'transparent',
        wireframes: false, // Set to true for wireframe view
      },
    });

    // Create a runner
    const runner = Runner.create();

    // Add the runner to the engine
    Runner.run(runner, engine);

    // Create an array to hold the falling images
    const fallingImages = [];

    // Load images with filenames
    const imageFilenames = Array.from({ length: 16 }, (_, index) => `img/visual-item/visual-item${index + 1}.png`);

    // Function to load images and create falling images with original sizes
    const createFallingImage = (imageUrl, index) => {
      const img = new Image();
      img.onload = function () {
        const angle = Math.random() * Math.PI * 2; // Random angle in radians
        const fallingImage = Bodies.rectangle(
          Math.random() * viewElement.clientWidth, // Adjusted initial horizontal position
          Math.random() * -400, // Adjusted initial vertical position
          img.width,
          img.height,
          {
            render: {
              sprite: {
                texture: img.src,
              },
            },
            restitution: 0.8, // Adjust restitution to control bouncing (0 = no bouncing, 1 = full bouncing)
            friction: 0.7, // Adjust friction to control sliding on the ground
            angle: angle, // Set the initial rotation angle
            angularVelocity: 0.2 * (Math.random() - 0.5), // Random angular velocity for rotation
          }
        );
        fallingImages.push(fallingImage);

        if (index === imageFilenames.length - 1) {
          // All images loaded, add them to the world
          World.add(engine.world, fallingImages);
        }
      };
      img.src = imageUrl;
    };

    // Add walls to prevent images from leaving the screen
    const wallOptions = { isStatic: true, render: { visible: true, opacity: 0 } };
    World.add(engine.world, [
      Bodies.rectangle(viewElement.clientWidth / 2, viewElement.clientHeight, viewElement.clientWidth, 10, wallOptions), // Bottom wall
      Bodies.rectangle(
        viewElement.clientWidth,
        viewElement.clientHeight / 2,
        10,
        viewElement.clientHeight,
        wallOptions
      ), // Right wall
      Bodies.rectangle(0, viewElement.clientHeight / 2, 10, viewElement.clientHeight, wallOptions), // Left wall
    ]);

    // Set gravity to control falling speed
    engine.world.gravity.y = 1.6; // Higher values increase gravity and cause objects to fall faster

    // Stagger the creation of falling images with a delay
    imageFilenames.forEach((imageUrl, index) => {
      setTimeout(() => {
        createFallingImage(imageUrl, index);
      }, index * 100); // Adjust the delay (500 milliseconds)
    });

    // Run the engine
    Matter.Runner.run(runner, engine);

    // Run the renderer
    Render.run(render);
  }

  // 메인비주얼 - 풀스크린
  const $header = $('#header');
  $header.hide();

  $('#fullpage-container').fullpage({
    anchors: ['visual-1', 'visual-2', 'motto', 'main-content'],

    scrollingSpeed: 1400,

    // 영역에 로딩이 되고 나서
    afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);
      console.log('로딩된 후 : ' + anchorLink, index, loadedSection);

      // 두번째 영역에 들어가면 키워드 이벤트 시작
      if (anchorLink === 'visual-2') {
        runMatterAnimation();
      }

      // 두번째 영역에 들어가면 키워드 이벤트 시작
      if (index === 3) {
        $header.fadeIn();
      } else {
        $header.fadeOut();
      }
    },

    // 영역에서 떠날 때
    onLeave: function (index, nextIndex, direction) {
      var leavingSection = $(this);
      console.log('영역에서 떠날 때 : ' + index, nextIndex, direction, leavingSection);
    },
  });
});
