import calculate from '../../logic/calculate'
import operate from '../../logic/operate'

describe('calculate, operate Testing', () => {
    const obj = {
        total: 1,
        next: 2,
        operation: "+",
      }
    const buttonName= 'AC'
    
    test('check the calculate functionality', ()=>{
        let value = calculate(obj,buttonName);
        expect(value).toMatchObject({total: null,
          next: null,
          operation: null,})
    })

    const obj1 = {
      total: 0,
      next: 0,
      operation: "+",
    }
    const buttonName1 = '0'

    test('2nd check the calculate functionality', ()=>{
        let value = calculate(obj1,buttonName1);
        expect(value).toMatchObject({})
    })

})







