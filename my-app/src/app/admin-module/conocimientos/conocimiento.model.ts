export class Conocimiento {

    conocimiento:string = "Conocimiento";
    porcentaje:number = 0;

    constructor(){
    }

    actualizarCon(conocimiento:string, porcentaje:number){

        this.conocimiento = conocimiento;
        this.porcentaje = porcentaje;

    }
}