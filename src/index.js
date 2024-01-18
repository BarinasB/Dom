/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')
const apirym = "https://rickandmortyapi.com/api/character/";
const url = "https://platzi-avo.vercel.app/api/avo";
const allItems = []
const allavoca = []
const appNode = document.querySelector('#app')
const avocatosNode = document.querySelector('#avocatos')

const formatPrice =(price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN",{
    style: "currency",
    currency: "USD",
    }).format(price);

    return newPrice;
};




// consumir el api
window
    .fetch(url)
    .then((respuesta) => respuesta.json())
    .then((responseJson) => {
        responseJson.data.forEach(item => {
           // traer las imagenes
           const imagen = document.createElement('img')
           imagen.src = 'https://platzi-avo.vercel.app' + item.image
           document.body.appendChild(imagen)
           // traer los titulos
           const title = document.createElement("h2")
           title.textContent = item.name;
           document.body.appendChild(title)
           // traer los precios
           const price = document.createElement("div")
           price.textContent = formatPrice(item.price);
           document.body.appendChild(price)

           const container = document.createElement('div')
           container.append(imagen, title, price)
            // agregar los valores al vector allitems
           allItems.push(container)
        
        });
        // colocar la informacion de allitems en div con id #app
        avocatosNode.append(...allItems)

    })




window
    .fetch(apirym)
    .then((respuesta) => respuesta.json())
    .then((responseJson) => {
        console.log(responseJson.results)
        responseJson.results.forEach(item => {
           // traer las imagenes
           const imagen = document.createElement('img')
           imagen.classList.add('card');
           imagen.src = item.image
           document.body.appendChild(imagen)
           // traer los titulos
           const title = document.createElement("h2")
           title.textContent = item.name;
           document.body.appendChild(title)
           // traer los precios
           const price = document.createElement("div")
           price.textContent = item.species
           document.body.appendChild(price)
           

           const container = document.createElement('div')
           container.append(imagen, title, price)
            // agregar los valores al vector allitems
            allavoca.push(container)
        
        });
        // colocar la informacion de allitems en div con id #app
        appNode.append(...allavoca)

    })
