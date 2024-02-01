/**
 * 메뉴 요소 타입
 * - 메뉴 이름
 * - 이미지
 * - 할인율
 * - 재고 정보
 */
type BaseMenuItem = {
	itemName: string | null;
	itemImageUrl: string | null;
	itemDiscountAmount: number;
	stock: number | null
}

/**
 * 장바구니 요소 타입
 * - 수량
 */
type BaseCartItem = {
	quantity: number;
} & BaseMenuItem

const baseCartData: BaseCartItem = {
	itemName: '보쌈',
	itemImageUrl: '',
	itemDiscountAmount: 50,
	stock: 2,
	quantity: 2
}

describe('Menu', () => {
	it('Menu 요소 타입이 확', () => {
		expect(baseCartData).toStrictEqual({
			"itemDiscountAmount": 50,
			"itemImageUrl": "",
			"itemName": "보쌈",
			"quantity": 2,
			"stock": 2
		})
	})
})

/**
 * 이벤트 장바구니 요소 타입
 * - 주문 가능 여부
 */
type EventCartItem = {
	orderable: boolean
} & BaseCartItem

const eventCartItem: EventCartItem = {
	"itemDiscountAmount": 50,
	"itemImageUrl": "",
	"itemName": "보쌈",
	"quantity": 2,
	"stock": 2,
	"orderable": true
}

describe('Menu', () => {
	it('Menu 요소 타입이 확', () => {
		expect(eventCartItem).toStrictEqual({
			"itemDiscountAmount": 50,
			"itemImageUrl": "",
			"itemName": "보쌈",
			"quantity": 2,
			"stock": 2,
			"orderable": true
		})
	})
})
