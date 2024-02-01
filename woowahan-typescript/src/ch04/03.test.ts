type BaedalProgress = CookingStep & DeliveryStep;

const logBaedalInfo = (progress: BaedalProgress) => `${progress.price} + ${progress.distance} `

describe('Menu', () => {
	it('Menu 요소 타입이 확', () => {
		expect(logBaedalInfo({ orderId: '1', price: 2000, time: 22, distance: '서울시' }))
			.toStrictEqual("2000 + 서울시 ")
	})
})