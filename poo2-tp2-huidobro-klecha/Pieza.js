function Pieza(nombre,valor,stock){

    if(!(this instanceof Pieza)){
        return new Pieza(nombre,valor,stock);
    }

    if(valor<=0){
        throw "<<< El valor de " + nombre + " debe ser mayor a cero >>>";
    } else if(stock<=0){
        throw "<<< Se debe reponer stock de " + nombre + " >>>";
    } else{
        this.nombre = nombre;
        this.valor = valor;
        this.stock = stock;

        this.datosPieza = () => {
            return "Pieza: " + this.nombre + "\nValor: $" + this.valor + "\nStock: " + this.stock;
        };
    }

}

module.exports=Pieza;