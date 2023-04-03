// Genero una funzione che mi crei un elemento nel DOM (decido io di che tipo, con quale classe e con quale informazione al suo interno)
function createMyElement(typeOfElement, nameOfClass, innerElement){
    //associo ad una variabile l'elemento creato
    let elemento = document.createElement(typeOfElement)
    //aggiungo una classe all'elemento
    elemento.classList.add(nameOfClass)
    //aggiungo un linea HTML dentro l'elemento creato
    elemento.innerHTML = innerElement
    //la funzione quando chiamata mi restituirà l'elemento creato con tutte le caratteristiche specificate dai parametri
    return elemento
}

//salvo in una variabile la select
const select1 = document.querySelector('#labelLevel')
const select2 = document.querySelector('select')
//salvo in una costante il button Reload
const buttonReload = document.querySelector('#buttonReload')

//salvo in una costante il button Play
const button = document.querySelector('#buttonPlay')
// console.log(button)

//trovo l'elemento dove stampare
let containerCampo = document.querySelector('#container-campo')

//associo al button una funzione che mi genera la griglia con le funzionalità richieste
button.addEventListener('click', function(){
    //salvo in una variabile l'informazione delle select
    let level = parseInt(document.querySelector('#level').value)
    // salvo in una variabile il numero corrispondente al numero di elementi per ogni riga in base al livello
    numLevel = Math.sqrt(level)

    //faccio partire un ciclo che mi generi gli elementi nel DOM
    for(let i = 1; i <=level; i++){
        //stampo dentro l'elemento i div che associo ad una variabile"divBox"
        const divBox = containerCampo.appendChild(createMyElement('div', `box-${numLevel}`, i))
        //rendo cliccabili tutti gli elementi
        divBox.addEventListener('click', function(){
        this.classList.toggle('blue')
        console.log(this.innerText)
    })}

    //faccio scomparire il pulsante Play 
    button.classList.add('d-none')
    //faccio scomparire la select
    select1.classList.add('d-none')
    select2.classList.add('d-none')
    //faccio comparire il pulsante Reload
    buttonReload.className = 'd-block'
    //assegno lo stile al pulsante Reload
    buttonReload.classList.add('btn', 'btn-danger', 'py-1', 'px-5')
})

// creo una funzione che mi ricarichi la pagina e la associo al button Reload
buttonReload.addEventListener('click', function(){
    window.location.reload()
})


