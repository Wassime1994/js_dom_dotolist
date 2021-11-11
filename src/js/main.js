// import {screen} from "./enter"
let btn_add = document.getElementById('btn_add');
let root = document.getElementById('root');
let clear = document.querySelector('.clear')
let children = [];
// mon input pour changer quand on clique sur modifier
let input = document.createElement('input')
input.style.width = "100%";
input.style.height = "43px";
// Ma div de creation
let divCreate;
let allDiv = document.querySelectorAll('.div')
// Mes deux variables de modification
let modifier;
let supprime;
let btn_do = document.querySelector('.btn_do')
console.log(btn_do)
let btnto_do = document.querySelector('.btn_todo')
let btnAll = document.querySelector('.btn_all')
let btnCreate;
let array_do = []
let stock = []
let screen = document.getElementById('screen');


// /////

screen.addEventListener('focus', ()=>{
    window.addEventListener('keydown', (event)=>{
        if(event.key=="Enter") { 
        modifier = document.createElement('i')
    modifier.className = "fas fa-exchange-alt modif"
    supprime = document.createElement('i')
    supprime.className = "fas fa-trash-alt supprime"
    // Creation de ma div
    divCreate = document.createElement('div');
    divCreate.className = "divCreate"
    divCreate.textContent = screen.value
    screen.value = ""
    root.appendChild(divCreate)
    children.push(divCreate)
    divCreate.appendChild(supprime)
    divCreate.appendChild(modifier)
    let select = document.createElement('input')
    select.type = "checkbox"
    select.classList = "select"
    divCreate.appendChild(select)
    children.forEach(element => {
        let modifier = element.querySelector('.modif')
        let supprimer = element.querySelector('.supprime')
        modifier.addEventListener('click', () => {
            modifier.parentElement.appendChild(input)
            let createModifBtn = document.createElement('button')
            createModifBtn.innerText = "Modif"
            createModifBtn.className = "btnModified"
            modifier.parentElement.appendChild(createModifBtn)
            createModifBtn.addEventListener('click', () => {
                createModifBtn.parentElement.innerText = input.value
                element.append(supprimer)
                element.append(modifier)
                element.append(select)

            })

        })
        supprimer.addEventListener('click', () => {
            supprimer.parentElement.remove()
        })

        select.addEventListener('click', () => {
           if(select.checked==true) {
               select.parentElement.style.backgroundColor = "yellow"
               stock.push(select.parentElement)
           }
           else if(select.checked == false){ 
            select.parentElement.style.backgroundColor = "white"
            
           }
        })
    })
        }
    })

})
        


btn_add.addEventListener('click', () => {
    // Creation de mess icones  au bout a droite donner une classe afin de faciliter le css
    modifier = document.createElement('i')
    modifier.className = "fas fa-exchange-alt modif"
    supprime = document.createElement('i')
    supprime.className = "fas fa-trash-alt supprime"
    // Creation de ma div
    divCreate = document.createElement('div');
    divCreate.className = "divCreate"
    divCreate.textContent = screen.value
    screen.value = ""
    root.appendChild(divCreate)
    children.push(divCreate)
    divCreate.appendChild(supprime)
    divCreate.appendChild(modifier)
    let select = document.createElement('input')
    select.type = "checkbox"
    select.classList = "select"
    divCreate.appendChild(select)
    children.forEach(element => {
        let modifier = element.querySelector('.modif')
        let supprimer = element.querySelector('.supprime')
        modifier.addEventListener('click', () => {
            modifier.parentElement.appendChild(input)
            let createModifBtn = document.createElement('button')
            createModifBtn.innerText = "Modif"
            createModifBtn.className = "btnModified"
            modifier.parentElement.appendChild(createModifBtn)
            createModifBtn.addEventListener('click', () => {
                createModifBtn.parentElement.innerText = input.value
                element.appendChild(modifier)
                element.appendChild(supprime)
                element.appendChild(select)

            })

        })
        supprimer.addEventListener('click', () => {
            supprimer.parentElement.remove()
        })

        select.addEventListener('click', () => {
           if(select.checked==true) {
               select.parentElement.style.backgroundColor = "yellow"
               stock.push(select.parentElement)
           }
           else if(select.checked == false){ 
            select.parentElement.style.backgroundColor = "white"
            
           }
        })
    })

})





btn_do.addEventListener('click', () => {
  root.innerHTML=''
  children.forEach(element=>{
      if(element.style.backgroundColor=="yellow") { 
          root.appendChild(element)
      }
  })
  
})

btnAll.addEventListener('click', () => {
    console.log(array_do)
    root.innerHTML = ""
    children.forEach(element => {
        root.appendChild(element)
    })


})

btnto_do.addEventListener('click', ()=>{
    root.innerHTML=""
    children.forEach(element=>{
        if(element.style.backgroundColor!=="yellow"){
            root.appendChild(element)
        }
    })
})

clear.addEventListener('click', () => {
    root.innerHTML = ""
    location.reload()
})