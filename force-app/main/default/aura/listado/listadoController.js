({
    myAction : function(component, event, helper) {

    },
    clearList: function(component, event, helper) {
        component.set("v.listadatos", []);
    },
    addToList: function(component, event, helper) {
        var lista = component.get("v.listadatos");
        var item = event.getParam("v.nombre");
        listadatos.push(item);
        component.set("v.listadatos", lista);
    }
})
