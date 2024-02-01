type ProductItem = {
    id: number,
    name: string,
    type: string,
    price: number,
    imageUrl: string,
    quantity: number;
}

type DisCountProduct = {
    discountAmount: number
}

type ProductItemWithDiscount = ProductItem & DisCountProduct

const products: ProductItemWithDiscount = {
    id: 1,
    name: '홍길동',
    type: '유저',
    price: 2000,
    imageUrl: 'www.xxx.com',
    quantity: 50,
    discountAmount: 5000
}

describe('index', () => {
    it('값이 주어지면 결과값을 리턴해야 한다.', () => {
        expect(products).toStrictEqual({
            "discountAmount": 5000,
            "id": 1,
            "imageUrl": "www.xxx.com",
            "name": "홍길동",
            "price": 2000,
            "quantity": 50,
            "type": "유저"
        })
    })
})
