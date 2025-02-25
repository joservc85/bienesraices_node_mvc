import Propiedad from './Propiedad.js'
import Precio from './Precio.js'
import Categoria from './Categoria.js'
import Usuario from './Usuario.js'
import Mensaje from './mensaje.js'

//Precio.hasOne(Propiedad)
Propiedad.belongsTo(Precio,{foreignkey: 'precioId'})
Propiedad.belongsTo(Categoria,{foreignkey: 'categoriaId'})
Propiedad.belongsTo(Usuario,{foreignkey: 'usuarioId'})
Propiedad.hasMany(Mensaje, {foreignkey: 'propiedadId'})

Mensaje.belongsTo(Propiedad, {foreignkey: 'propiedadId'})
Mensaje.belongsTo(Usuario, {foreignkey: 'usuarioId'})


export{
    Propiedad,
    Precio,
    Categoria,
    Usuario,
    Mensaje
}