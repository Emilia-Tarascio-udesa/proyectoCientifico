const cientificos = require('../data/science')

//primero creamos el objeto heroeController 
const heroeController = {
    index: function(req, res) { //se crea el metodo index para mostrar todos los cientificos
        res.send(cientificos)
    }, 
    
    detalle: function(req, res) { //se crea el metodo de detalle para buscar un cientifico por id
        const id = req.params.id 
        for (let i = 0; i < cientificos.lista.length; i++) {
            if (cientificos.lista[i].id==id) {
                return res.send (cientificos.lista[i])
            }
        }

        res.send('No encontramos al cientifico indicicado. Porfavor elija a otro')
    }, 
    bio: function(req, res) { 
        const id = req.params.id 
        const ok = req.params.ok
        // console.log (ok)
        let cientifico 
        for (let i = 0; i < cientificos.lista.length; i++) {
            if (cientificos.lista[i].id==id) {
            cientifico = (cientificos.lista[i])    
            }
        } 
        console.log (cientifico)
        if (cientifico) {
            if (ok) {
                res.send(`${cientifico.nombre} - ${cientifico.resenia}`)
            }
            else {
                res.send(('Lamento que no desees saber mas de mi'))
            }
        }
        else {
            res.send('No encontramos al científico indicado para mostrar su biografía')
        }
    }
}
module.exports = heroeController

