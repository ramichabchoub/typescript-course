// what we will learn in each section

// Module 1: All About Types
// 1. Primitive Types
// 2. Object Types
// 3. Arrays Types
// 4. Advance Types
// 5. Type Inference

// Module 2: Functions in TypeScript
// 1. Declaring Functions
// 2. Default and Optional Parameters
// 3. Custom Parameters
// 4. Custom Returns
// 5. Call Signatures

// Module 3: Generics in TypeScript
// 1. Polymorphic Functions
// 2. Problems with Function Overloads
// 3. Intro to Generics
// 4. Working with Generics
// 5. Practice Implementations

// Module 4: Classes and inheritance
// 1. Classes
// 2. Inheritance
// 3. Constructor Functions
// 4. Inheritance
// 5. Access Modifiers
// 6. Accessors and Mutators

// Module 5: Abstract Classes and Interfaces
// 1. Static Properties
// 2. Abstract Classes
// 3. Why Abstract Classes and Differences
// 4. Interfaces
// 5. Multiple Inheritance
// 6. Generics with Interfaces

// Module 6: The TypeScript Compiler
// 1. File Options
// 2. Type Checking Options
// 3. File Watcher and source maps

// Module 7: Prototypes and Objects
// 1. `this` keyword
// 2. Constructor Functions
// 3. Prototypes
// 4. Prototypical Inheritance
// 5. Property Descriptors
// 6. How classes uses prototypes

// Module 8: Decorators in TypeScript
// 1. All about decorators
// 2. Decorators Factories
// 3. Class Members Decorators
// 4. Modifying the Prototype
// 5. Multiple Decorators
// 6. Execution Sequence

// Module 9: Advanced Concepts and Features
// 1. Type Widening
// 2. Discriminated Unions
// 3. Subtypes and Supertypes
// 4. Typecasting
// 5. Totality
// 6. Conditional Types

// Module 10: Building a full stack application
// 1. Front-end developer: react+material-ui
// 2. Node developer: node+express+typeorm+mysql
// 3. Full stack developer: react-query+context-api

// first typescript program
const sum = (a: number, b: number): number => {
  return a + b;
};
console.log(sum(1, 3));

// tsc --init => create tsconfig.json
// tsc introduction.ts => compile ts file to js file
// tsc --noEmitOnError introduction.ts => don't compile js file if there is an error
// noEmitOnError: true => in tsconfig.json
// tsc -p ./tsconfig.json => compile all ts files in the project
// tsc -w => watch mode

// npm init -y => create package.json
// npm i --save-dev parcel => install parcel
// npm i --save-dev --save-exact prettier => install prettier
// echo {}> .prettierrc => create .prettierrc
// package.json => "start": "( npx parcel ./index.html & npx prettier --watch ./index.html )"
// package.json => remove main.js from file