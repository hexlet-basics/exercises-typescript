function sayHello(name: string): string;
function sayHello(firstName: string, lastName: string): string;
function sayHello(firstName: string, lastName?: string): string {
  if (lastName === undefined) {
    return `Hi ${firstName}`;
  }

  return `Hello ${firstName} ${lastName}`;
}

export default sayHello;
