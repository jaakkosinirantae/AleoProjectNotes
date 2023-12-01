/** 
 * filename: complex_code.js
 * 
 * Description: This code represents a complex and sophisticated JavaScript program that simulates a virtual world
 *              with various entities and interactions. It showcases object-oriented programming concepts and
 *              advanced algorithms.
 */

// Define the main virtual world class
class VirtualWorld {
  constructor() {
    this.entities = [];
    this.started = false;
  }

  addEntity(entity) {
    if (!this.started) {
      this.entities.push(entity);
    } else {
      throw new Error("Cannot add entities to the world once it has started.");
    }
  }

  start() {
    if (!this.started) {
      this.started = true;
      this.entities.forEach(entity => entity.init());
      this.runSimulation();
    }
  }

  runSimulation() {
    setInterval(() => {
      this.entities.forEach(entity => entity.update());
    }, 1000 / 60); // 60 FPS
  }
}

// Define the base entity class
class Entity {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  init() {
    console.log(`Initializing entity: ${this.name}`);
  }

  update() {
    console.log(`Updating entity: ${this.name}`);
  }
}

// Define a custom entity class for simulating a bouncing ball
class BouncingBall extends Entity {
  constructor(name, position, speed) {
    super(name, position);
    this.speed = speed;
  }

  update() {
    console.log(`Updating ball: ${this.name}`);
    this.position += this.speed;
    if (this.position < 0 || this.position > 100) {
      this.speed = -this.speed; // Reverse direction
    }
  }
}

// Define a custom entity class for simulating a moving platform
class MovingPlatform extends Entity {
  constructor(name, position, distance, speed) {
    super(name, position);
    this.distance = distance;
    this.speed = speed;
  }

  update() {
    console.log(`Updating platform: ${this.name}`);
    this.position += this.speed;
    if (this.position < 0 || this.position > this.distance) {
      this.speed = -this.speed; // Reverse direction
    }
  }
}

// Create an instance of the virtual world
const world = new VirtualWorld();

// Create some entities and add them to the world
const ball = new BouncingBall("Ball", 50, 2);
world.addEntity(ball);

const platform = new MovingPlatform("Platform", 30, 80, 1);
world.addEntity(platform);

// Start the simulation
world.start();