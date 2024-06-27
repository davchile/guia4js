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
// //en una sola línea
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
// let template = `
//     <p>${name}</p>
//     <p>${date}</p>
// `
// const content = document.querySelector("#content")
// content.innerHTML = template

//Insertando elementos en una lista
const data = ["Javiera", "Camila", "Francisco", "Jorge", "Daniela"]
const content = document.querySelector("#dynlist")

for (let item of data) {
    content.innerHTML += `<li>${item}</li>`
}