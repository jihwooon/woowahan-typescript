interface DeliverTip {
	tip: string
	price: number
}

interface StarRating {
	rate: number;
}

type Filter = DeliverTip & StarRating

const filter: Filter = {
	tip: '100원',
	price: 2000,
	rate: 4,
}

describe('Menu', () => {
	it('Menu 요소 타입이 확', () => {
		expect(filter).toStrictEqual({"rate": 4, "tip": "100원"})
	})
})

type UnionFilter = StarRating | DeliverTip;

const unionFilter: UnionFilter = {
	tip: '200',
	price: 2000
	// rate: 2
}


describe('Menu', () => {
	it('Menu 요소 타입이 확', () => {
		expect(unionFilter).toStrictEqual({"tip": "200", "price": 2000 })
	})
})