//**Clase Arreglos y Objetos */
// const bancos = ["Estado", "Santander", "BCI", "ITAU", "Scotiabank"]
// console.log(bancos[0])
// //para conocer la cantidad de elementos en un array
// console.log(bancos.length)

// //como acceder al ultimo elemento del array
// console.log(bancos[bancos.length - 1])

//Para mostrar varios elementos a la vez
// const names = ["Juan", "Luisa", "Fabian", "Jorge"]
// // console.log(names[0])
// // console.log(names[2])
// // console.log(names[3])

// en una sola línea
// console.log(names[0], names[2], names[3])

//Ciclo "for(let ... of ...)"
// const categorias = ["tecnología", "oficina", "música", "otros"]
// categorias.reverse() //para mostrar al arreglo al revés
// for(let categoria of categorias) { //el iterador toma el valor de cada elemento en cada vuelta
//     // console.log(categoria)
//     console.log(categoria.toLocaleUpperCase()) //para transformar el texto
// }

//**Interpolación */ permite generar HTML dimámico
// const name = "David"
// const date = "27 de junio"
// const interpolacion = `Hola, mi nombre es ${name}, hoy ${date} quiero hacer waka waka.`
// alert(interpolacion)

//otro ejemplo con una #id en el HTML

// const content = document.querySelector("#content")
// content.innerHTML = template

//Insertando elementos en una lista -- utilizamos el ciclo for
// const data = ["Javiera", "Camila", "Francisco", "Jorge", "Daniela"]
// const content = document.querySelector("#dynlist")
// for (let item of data) {
//     content.innerHTML += `<li>${item}</li>`
// }

//  const doscale = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"]
//  const list = document.querySelector("#scale")
//  for (let note of doscale) {
//     list.innerHTML += `<li>${note}</li>`
//  }

//Buena práctica para insertar elementos en el DOM -- utilizamos el ciclo for
// const doScale = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"]
// const list = document.querySelector("#scale")
// let html = "" //tiene que ser con "let" para permitir modificar en cada ciclo y guardar el ciclo en esta variable temporal
// for (let note of doScale) { //programamos la modificacion del DOM en la funcion
//     html += `<li>${note}</li>`
// }
// list.innerHTML = html //imprimimos solo una vez en HTML

//**Objetos */
// Accediendo a los datos del objeto

// let auto = {
//     marca: "JAC",
//     modelo: "S4",
//     año: 2018,
//     km: 60304,
//     // asientos: ["A", "B", "C", "D"], //esto es un array
//     asientos: { // este es un objeto dentro de otro objeto (objeto anidado)
//         a: "ocupado",
//         b: "desocupado",
//         c: "desocupado",
//         d: "desocupado",
//     },
//     encender: () => { //cuando la función está dentro de un objeto, se llama método
//         console.log("Encender auto")
//     }
// }
// console.log(auto.modelo) //Javascript es un lenguaje de programación orientado a objetos, ".modelo" es una muestra de aquello.
// console.log(auto["marca"]) // se utiliza cuando el nombre viene con algún símbolo
// auto.encender()
// // console.log(auto.asientos[2]) //invocamos un elemento del array
// console.log(auto.asientos.b) // no necesito los corchetes, porque el valor es un string

// Creación de templates con datos de un objeto
// const articulo = { //creo el objeto
//     id: 31,
//     titulo: "Autos nuevos en Chile",
//     subtitulo: "El mercado de autos se normaliza",
//     descripcion: "No es novedad que los precios de los autos usados se ha disparado debido a la falta de stock de autos nuevos, sin embargo puede que esto esté llegando a su fin..."
// }

// const articulosSection = document.querySelector(".articulos") // traigo la clase en html, me traigo los elementos del objeto y los llevo a html. La interpolacion tambien permite crear strings variables, ejem: href+${}
// articulosSection.innerHTML = ` 
//         <article class = "articulo"> 
//         <h4>${articulo.titulo}</h4>
//         <h6>${articulo.subtitulo}</h6>
//         <p>${articulo.descripcion}</p>
//         <a href="/articulo/${articulo.id}"><button>Ver más</button></a>
// `

// const producto = { //creo el objeto
//     id: 43,
//     titulo: "Cafetera mágica",
//     precio: 23990,
//     color: "rojo",
//     agotado: false,
//     src: "https://placedog.net/500",
//     descripcion: "Calienta tu café matutino con la nueva tecnología magnética"
// }

// const productos = document.querySelector("#productos") // traigo la clase en html, me traigo los elementos del objeto y los llevo a html
// productos.innerHTML = ` 
//     <article class = "producto">
//         <img src="${producto.src}"></img>
//         <h4>${producto.titulo}</h4>
//         <p>${producto.descripcion}</p>
//         <p>Color: <span class = "indicador ${producto.color}"></span></p> 
//         <p class = "agotado ${producto.agotado ? 'mostrar' : ''}">Agotado</p>
//         <h3>$ ${producto.precio}</h3>
//         <a href="/articulo/${producto.id}"><button>Ver más</button></a>
//  </article>
// `
// declaramos 2 clases en span, con eso podemos dar estilos en css
//usamos un elemento buleano para el stock y un condicional ternario para mostrar la clase a traves de estilos.
//En este caso, si el producto esta agotado, el ternario agrega la clase mostrar.

//Arreglo de objetos
// const productos = [ // creo el array de productos
//     {
//         id: 43,
//         titulo: "Cafetera mágica",
//         precio: 23990,
//         color: "rojo",
//         agotado: true,
//         src: "https://placedog.net/500",
//         descripcion: "Calienta tu café matutino con la nueva tecnología magnética"
//     }, {
//         id: 44,
//         titulo: "Cafetera mágica",
//         precio: 23990,
//         color: "azul",
//         agotado: false,
//         src: "https://placedog.net/500",
//         descripcion: "Calienta tu café matutino con la nueva tecnología magnética"
//     }, {
//         id: 45,
//         titulo: "Cafetera mágica",
//         precio: 23990,
//         color: "rojo",
//         agotado: true,
//         src: "https://placedog.net/500",
//         descripcion: "Calienta tu café matutino con la nueva tecnología magnética"
//     }, {
//         id: 46,
//         titulo: "Cafetera mágica",
//         precio: 23990,
//         color: "rojo",
//         agotado: true,
//         src: "https://placedog.net/500",
//         descripcion: "Calienta tu café matutino con la nueva tecnología magnética"
//     }
// ]

// const seccionProductos = document.querySelector("#productos")
// let html = ""
// for(let producto of productos) { //utilizo el ciclo for para modificar el DOM
//     html += ` 
//     <article class = "producto">
//         <img src="${producto.src}"></img>
//         <h4>${producto.titulo}</h4>
//         <p>${producto.descripcion}</p>
//         <p>Color: <span class = "indicador ${producto.color}"></span></p> 
//         <p class = "agotado ${producto.agotado ? 'mostrar' : ''}">Agotado</p>
//         <h3>$ ${producto.precio}</h3>
//         <a href="/articulo/${producto.id}"><button>Ver más</button></a>
//     </article>
// `
// }
// seccionProductos.innerHTML = html

//Galería de íconos
// const iconos = [
//     { icono: "🚗", descripcion: "Auto" },
//     { icono: "🤖", descripcion: "Robot" },
//     { icono: "👻", descripcion: "Fantasma" },
//     { icono: "👽", descripcion: "Alien" },
//     { icono: "🦷", descripcion: "Diente" },
//     { icono: "🕹", descripcion: "Joystick" }
// ];
// const iconos2 = [
//     { icono: "🚗", descripcion: "Auto" },
//     { icono: "🤖", descripcion: "Robot" },
//     { icono: "👻", descripcion: "Fantasma" },
// ];

// const generarGaleriaIconos = (id, iconos) => {
//     const seccionIconos = document.querySelector(id)
//     let iconosContent = ""
//     for (let icono of iconos) {
//         iconosContent += `
//     <div class = "card">
//     <span>${icono.icono}</span>
//     <p>${icono.descripcion}</p>
//     </div>
//     `
//     }
//     seccionIconos.innerHTML = iconosContent
// }
// generarGaleriaIconos("#iconos1", iconos)
// generarGaleriaIconos("#iconos2", iconos2)

//--------------------Guía-----------------------//
// Creando elementos a partir de un arreglo
// const data = ["Javier", "Camila", "Francisco", "Jorge"]
// const d = document.querySelector("#nombres")
// for (let item of data) {
//     d.innerHTML += `<li>`+ item + `</li>` //concatena los valores de "item" al inner declarado y agrágalos uno a uno.
// }

// Ciclos. Guardando los valores en una variable para optimizar el rendimiento de la página.
// const data = ["Javier", "Camila", "Francisco", "Jorge"]
// const d = document.querySelector("#nombres")
// let html = ""
// for (let item of data) {
//     html += `<li>`+ item + `</li>` //concatena los valores de "item" al inner declarado y agrágalos uno a uno.
// }
// d.innerHTML = html

//Interpolación
// const data = ["Javier", "Camila", "Francisco", "Jorge"]
// const d = document.querySelector("#nombres")
// let html = ""
// for (let item of data) {
//     html += `<li>${item}</li>` //interpolando
// }
// d.innerHTML = html

// **Ciclos y condiciones
// const datos = [1200, 350, 1500, 1400, 250, 5000, 1950, 1952]
// const d = document.querySelector("#datos")
// for (let valor of datos) {
//     if (valor > 1000 && valor <2000) { //condicion dentro de un ciclo
//         d.innerHTML += `<li>${valor}</li>`
//     }
// }

// **Ciclo con if y else
// const datos = [1200, 350, 1500, 1400, 250, 5000, 1950, 1952]
// const d = document.querySelector("#datos")
// for (let valor of datos) {
//     if (valor > 1000 && valor <2000) { //condicion dentro de un ciclo
//         d.innerHTML += `<li class = "green">${valor}</li>` //muestro el valor y agrego una clase
//     } else {
//         d.innerHTML += `<li class = "red">${valor}</li>` //muestro el valor y agrego una clase
//     }
// }

// **Arreglos bidimensionales
// const productos = [
//     ["Patineta", "verde", 35990],
//     ["Bicicleta", "Amarilla", 120990],
//     ["Patines", "Morado", 60990],
//     ["Scooter", "Negro", 250990]
// ]
// console.log(productos[0][0])

// const productos = [
//     ["Patineta", "verde", 35990],
//     ["Bicicleta", "Amarilla", 120990],
//     ["Patines", "Morado", 60990],
//     ["Scooter", "Negro", 250990]
// ]
// let html = ""
// for (let producto of productos) { // vamor a pedir el dato 0, 1 y 2 de cada elemento
//     html += `
//     <div>
//     <h1>${producto[0]}</h1>
//     <p>${producto[1]}</p>
//     <p>${producto[2]}</p>
//     </div>
//     `
// }
// const body = document.querySelector("body")
// body.innerHTML = html

// **Ciclo para recorrer un arreglo y otro ciclo para recorrer valores
// const estudiantes = [
//     ["Francisca", 10, 8, 10],
//     ["Camila", 9, 9, 10, 9],
//     ["Patricio", 7, 9, 9, 6, 10, 10],
//     ["Pedro", 8, 8, 10]
// ]
// let html = ""
// for (let estudiante of estudiantes) {
//     html += `<p>`
//     for (let nota of estudiantes) {
//         html += `${nota}`
//     }
//     html += `</p>`
// }
// const body = document.querySelector("body")
// body.innerHTML = html

//**Objetos */
// const persona = {
//     nombre: "Pedro",
//     apellido: "Perez",
//     profesion: "Front End Developer",
//     hobby: "Trekking",
//     añoDeNacimiento: 1988
// }
// console.log(persona["añoDeNacimiento"], persona["apellido"]) //ambas formas funcionan
// console.log(persona.añoDeNacimiento, persona.apellido)

//**Areglo de objetos */
// const ventasDeLaSemana = [
//     {dia: "Lunes", total: 34000},
//     {dia: "Martes", total: 40000},
//     {dia: "Miércoles", total: 41000},
//     {dia: "Jueves", total: 50000},
//     {dia: "Viernes", total: 62000},
//     {dia: "Sábado", total: 85000},
//     {dia: "Domingo", total: 20000},
// ]

// const ul = document.querySelector("ul")
// for (let venta of ventasDeLaSemana) {
//     ul.innerHTML += `
//     <li>${venta.dia}: $ ${venta.total}</li>
//     `
// }

//**Llenando una tabla HTML */
// const deptos = [
//     {departamento: 323, propietario: "Natalia Jimenez", tel: "+569 5312 4578"},
//     {departamento: 123, propietario: "Luis Fonsi", tel: "+569 4612 7894"},
//     {departamento: 431, propietario: "David Bisbal", tel: "+569 8978 4465"},
//     {departamento: 412, propietario: "Noel Schajris", tel: "+569 9874 6432"},
//     {departamento: 203, propietario: "Ricardo Montaner", tel: "+569 8764 6813"},
// ]

// const tbody = document.querySelector(".table")
// for (let depto of deptos) {
//     const template = `
//     <tr>
//     <td>${depto.departamento}</td>
//     <td>${depto.propietario}</td>
//     <td>${depto.tel}</td>
//     </tr>
//     `
// tbody.innerHTML += template
// }