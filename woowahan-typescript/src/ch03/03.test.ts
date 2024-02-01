const context = describe;

interface IndexSignatureEx {
    [key: string]: number;
}

const data: IndexSignatureEx = {
    apple: 200,
    coffle: 120,
    lunch: 500
}

describe('Index Signature', () => {
  context('객체 타입 프로퍼티에 값을 지정하면', () => {
    data.lunch = 250

    it('값을 리턴한다.', () => {
        expect(data.lunch).toBe(250)
    })
  })
})
