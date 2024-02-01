/** 유니온 타입 */
type CookingStep = {
	orderId: string;
	price: number
}

type DeliveryStep = {
	orderId: string;
	time: number;
	distance: string;
}

const getDeliveryDistance = (step: CookingStep | DeliveryStep) => step.orderId

const result = getDeliveryDistance({ orderId: '1', price: 2000 })

describe('Menu', () => {
	it('Menu 요소 타입이 확', () => {
		expect(result).toStrictEqual("1")
	})
})
