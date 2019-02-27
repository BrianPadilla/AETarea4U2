var fs = require('fs');

fs.readFile('comas.csv','utf8', function(err,datos){
    if(err) {
        throw err;
    }
    datos2 = datos.split('\n');

    datos2.map(function(e){
            
            var linea = e.split(",");
            
            
                console.log("Registro: "+linea[0]);
                console.log("NC: "+linea[1]);
                console.log("Nombre: "+linea[2]);
                console.log("Calificacion: "+linea[3]);
            
            
    })
    
    
    
})


