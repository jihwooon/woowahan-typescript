type ExampleArrayType<T> = T[]

const array1: ExampleArrayType<string> = ['치킨', '통닭']

function exampleFunc<T>(arg: T): T[] {
    return Array(3).fill(arg);
}


console.log(exampleFunc<number>(2));
