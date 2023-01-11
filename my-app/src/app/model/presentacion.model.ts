export class Presentacion{

    nombre: String;
    descripcion: String;
    url_Img: String;
    url_Banner: String;

    constructor(nombre: String, descripcion: String, Url_Banner: String,  Url_Img: String){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.url_Img = Url_Img;
        this.url_Banner = Url_Banner;
    }
}