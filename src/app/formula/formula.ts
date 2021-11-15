export class formula{
    imc=0;
    calcular(peso:number, altura:number){
        if(peso<=0){
            return 0;
        }
        if(altura<=0){
            return 0;
        }
        this.imc=peso/(altura*altura);
        return this.imc;
    }
} 