/* eslint-disable max-classes-per-file */
import GameObject from './index';

test('GameObject', () => {
  class GameScene {
    private objects: GameObject[] = [];

    addObject(object: GameObject): void {
      this.objects.push(object);
    }

    tick(delta: number): void {
      this.objects.forEach((object) => object.tick(delta));
    }

    render(): string {
      return this.objects.map((object) => object.render()).join('\n');
    }
  }

  class Player extends GameObject {
    render(): string {
      return `Player: ${this.x}, ${this.y}`;
    }
  }

  class Enemy extends GameObject {
    render(): string {
      return `Enemy: ${this.x}, ${this.y}`;
    }
  }

  const scene = new GameScene();
  const player = new Player(0, 0);
  const enemy = new Enemy(20, 20);
  scene.addObject(player);
  scene.addObject(enemy);

  player.move(10, 10);
  enemy.move(20, 20);
  player.move(10, 10);

  scene.tick(1);
  expect(scene.render()).toBe('Player: 10, 10\nEnemy: 40, 40');

  scene.tick(0.5);
  expect(scene.render()).toBe('Player: 15, 15\nEnemy: 40, 40');

  enemy.move(-10, 10);
  player.move(-5, 0);
  scene.tick(1);
  expect(scene.render()).toBe('Player: 10, 15\nEnemy: 30, 50');
});
