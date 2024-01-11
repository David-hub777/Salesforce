({
    myAction : function(component, event, helper) {

    },
    saludar : function(component, event, helper) {
        // Obtén el valor del atributo 'nombre' del botón
        var nombre = event.getSource().get("v.name");
        alert('Hola Mundo!!! desde el controlador\n' + nombre);
        console.log('¡Hola ' + nombre + '!');
        //Gorka
        alert('Hola ' + component.get("v.nombre") );
        component.set(v.nombre, "Alert!")
        var evt = $A.get("e.c:evtData");
        var obj = {
            "nombre" : component.get("v.nombre"),
            "apellido" : "Alert!",
        };
        evt.setParams(obj);
        evt.fire();
    }
})
