var personalLocal = (function(){
    var personal = new Array();

    function agregarPersonal(... empleado) { //recibe una o varios empleados
        empleado.forEach(element => {
            if (verificarExistencia(element) == -1){ //si no está la agrega
                personal.push(element);
            } else{
                throw "<<< El empleado " + element.obtenerNombre() + " ya se encuentra registrado >>>";
            }
        });
    }

    function sumarVenta(empleado,monto){
        if (verificarExistencia(empleado) != -1){ //si está le suma la venta
            empleado.ventas = empleado.ventas + monto;
        } else{
            throw "<<< El empleado " + empleado.obtenerNombre() + " no se encuentra registrado >>>";
        }
    }

    function verificarExistencia(empleado){ //devuelve -1 si no está, la posición si está
        const condicion = (element) => empleado == element;
        const posicion = personal.findIndex(condicion);
        return posicion;
    }

    return {
        agregarPersonal: agregarPersonal,
        sumarVenta: sumarVenta,
    }
})();

module.exports = personalLocal;