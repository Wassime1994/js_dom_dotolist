let btn_add = document.getElementById('btn_add');
let screen = document.getElementById('screen');
let root = document.getElementById('root');
let clear = document.querySelector('.clear')
let children = [];
let span ; 
// mon input pour changer quand on clique sur modifier
let input = document.createElement('input')
 input.style.width="100%" ; 
input.style.height ="43px";
// Ma div de creation
let divCreate;
// Mes deux variables de modification
let modifier;
let supprime;
// Pour ma modification
// let input = document.createElement('INPUT')
// input.style.width="100%"
// input.style.height ='40px'
let btn_do = document.querySelector('.btn_do')
let btnto_do=document.querySelector('.btn_todo')
let btnAll = document.querySelector('.btn_all')
let btnCreate;




// /////

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
    children.forEach(element=>{
        let supprAll = document.querySelectorAll('.supprime')
        let modifAll = document.querySelectorAll('.modif')
        supprAll.forEach(element => {
            element.addEventListener('click', ()=>{
                element.parentElement.remove()
            })
        })
        modifAll.forEach(element =>{   
            element.addEventListener('click', ()=>{  
                    element.parentElement.append(input)          
                    btnCreate= document.createElement('button')   
                    btnCreate.classList="btnModified"
                    btnCreate.innerText="Modified"
                     divCreate.appendChild(btnCreate)
                    console.log(divCreate)
                     btnCreate.addEventListener('click', ()=>{
                        element.parentElement.innerText=input.value
                        // input.value=' '
                        btnCreate.remove()
                        divCreate.appendChild(supprime)
                        divCreate.appendChild(modifier)
                     })
                })       
        })
        
        
        
        //  element.parentElement.appendChild(input)
        //     element.addEventListener('click' , ()=>{
        //      input.parentElement.textContent=input.value
        //      divCreate.appendChild(supprime)
        //     divCreate.appendChild(modifier)   
        //     index++
        //     })
            



// TROUVER UN MOYEN DE CLICKER SUR MODIFIER POVOIR MODIFIER A L INFINIS SANS BEUG
        // A placer dans mes ToDo , DO , ALL
    // element.addEventListener('dblclick', ()=>{
    //     element.style.backgroundColor="green"
    // })
        
    })
})





clear.addEventListener('click', () => {
    root.innerHTML = ""
    location.reload()
})