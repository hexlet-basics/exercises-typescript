
In TypeScript, classes can interact closely with interfaces. In this tutorial, we'll look at how to extend interfaces with classes and how to create classes based on interfaces.

## Extending an interface with classes

In the last lesson, we saw how interfaces can extend other interfaces and combine them. Similarly, interfaces can be extended by classes:

```typescript
interface IBeep {
  sayBeep: () => string;
}

interface IBoop {
  sayBoop: () => string;
}

class Robo implements IBeep, IBoop {
  sayBeep = () => 'beep';

  sayBoop = () => 'boop';
}

const R2D2 = new Robo();
R2D2.sayBeep(); // 'beep'
```

Here we extended the two interfaces with a class that inherited all the methods of the given interfaces. We had to write the inherited methods manually.

## Creating classes based on interfaces

We can create classes based on interfaces in the same way we create interfaces based on interfaces. But there are some differences.

If we create an interface or type and then transpilate TypeScript into JavaScript, there will be no sample of that interface left in the code. At the same time, when we create a class, its sample is always transpiled into JavaScript.

It turns out that the option with interfaces is more lightweight, but still the choice should depend on the problem we are solving.

Creating a class based on an interface does not lead to an exact implementation of that interface in the class. TypeScript simply checks if the properties and methods of our class satisfy the properties declared in the interface. We write the class itself manually.

Let's look at an example:

```typescript
interface ICalculate {
  sum: (num1: number, num2: number ) => number;
}

class Summator implements ICalculate {
  sum(num1, num2) { return num1 + num2; }
    // For parameters the following message will be displayed: Parameter 'num1'/'num2' implicitly has an 'any' type,
    // because TypeScript only checks the class against the interface, but does not fully inherit from it.
  multiply(num1: number, num2: number) { return num1 * num2; }
    // We added a new method, but TypeScript doesn't complain
}

let calculator = new Summator();
    // Our code will work as if it worked for arguments with type any,
    // because parameter types, as well as everything else, were not inherited by the class when the interface was implemented
calculator.sum(2,3) // 5
```

An error in the implementation of an interface by a class is possible only when we do not implement one of the properties specified in the interface. Or we implement it differently than specified in the interface:

```typescript
interface ICalculate {
  sum: (num1: number, num2: number ) => number;
}

class Summator implements ICalculate {
  sum (num1: string, num2: string) { return num1 + num2 };
  // We changed the argument types to string, i.e. we implemented the interface incorrectly
  // In this case TypeScript will notice our error and will not compile:
  // Type '(num1: string, num2: string) => string' is not assignable to type '(num1: number, num2: number) => number'.
}
```

For the same reason, if we write a class that implements an interface with optional properties, we need to write everything ourselves. Otherwise, these properties will not be included in our class:

```typescript
interface ICalculate {
  sum: (num1: number, num2: number) => number;
  multiply? : (num1: number, num2: number) => number;
}

class Summator implements ICalculate {
  sum (num1: number, num2: number) { return num1 + num2; }
}

const calculator = new Summator();
calculator.sum(2,3) // 5
calculator.multiply(2,3) // Property 'multiply' does not exist on type 'Summator'.
```

In the example above, we specified only the `sum` method when implementing the interface with the `Summator` class. As a result, the code compiled successfully because the `multiply` method was specified as optional. At the same time, we cannot address this method in an instance of our class.

## Conclusions

Since there are several different tools in TypeScript for the same things, we can implement classes using abstract class extensions instead of interfaces. But the choice will depend on the task at hand. Abstract classes provide us with access modifiers and constructors, while interfaces are more lightweight and simple.
