interface Cat {
    name: string;
    age?: number;
}

interface Pet {
    name: string;
}

interface Dog {
    name: string
    age: number,
    phone: number;
}

type Apple = {
    name: string;
}

let pet: Pet = { name: 'Zag' };

let dog: Dog = { name: 'dog', phone: 1234, age: 123 }

let cat: Cat = { name: 'cat', age: 2 }

let apple: Apple = { name: 'apple'}

const greet = (cat: Cat) => cat.name;

console.log(greet(apple))

