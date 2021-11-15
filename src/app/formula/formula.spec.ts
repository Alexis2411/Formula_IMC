import { formula } from "./formula";

describe ('Calcular',() => {
    let form: formula;
    let imc: number;
    beforeEach(()=>{
        form= new formula();
    });

    it('Si peso = 55 y altura = 0 imc será 0',() =>{  
        imc=form.calcular(55, 0);
        expect(imc).toBe(0);
    });
    it('Si peso = 0 y altura = 1.7  imc será 0',() =>{  
        imc=form.calcular(0, 1.7);
        expect(imc).toBe(0);
    });
    it('Si peso = 0 y altura = 0 imc será 0',() =>{  
        imc=form.calcular(0, 0);
        expect(imc).toBe(0);
    });
    it('Si peso = -55 y altura = -1.7 imc será 0',() =>{  
        imc=form.calcular(-55 ,-1.7);
        expect(imc).toBe(0);
    });
    it('Si peso = 67.5 y altura = 1.5 imc será 30',() =>{  
        imc=form.calcular(67.5 ,1.5);
        expect(imc).toBe(30);
    });



}); 