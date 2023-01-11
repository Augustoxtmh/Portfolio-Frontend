export class Conocimiento {
    
    id? : Number;
    conocimiento: String;
    porcentaje: Number;


    constructor(conocimiento: String, porcentaje: Number){

        this.conocimiento = conocimiento;
        this.porcentaje = porcentaje;

    }
}