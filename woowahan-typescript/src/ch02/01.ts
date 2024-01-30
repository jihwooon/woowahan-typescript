let unknownValue: unknown;

unknownValue = 100;
unknownValue = 'hello world';

/**  any를 제외한 다른 타입은 할당이 불가능합니다. */
let someValue1: any = unknownValue;
console.log(someValue1);

/* 호출 시 점에 에러가 발생한다. */
const unknownFunc : unknown = () => console.log('this is unknown type')

// unknownFunc();
