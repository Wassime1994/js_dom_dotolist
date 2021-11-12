import {btn_add, root,clear,children,input ,btnto_do  ,btn_do,btnAll,array_do,stock,screen} from "./Enter.js"
let modifier;
 let supprime;
let divCreate;


btn_add.addEventListener('click', () => {
    if(screen.value=="") { 
        alert('Merci d entrer une valeur ')
        console.log(screen.value)
    }
    else { 
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
        let supprime = element.querySelector('.supprime')
        supprime.className = "fas fa-trash-alt supprime"
        let select = document.createElement('input')
        select.type = "checkbox"
        select.classList = "select"


        modifier.addEventListener('click', () => {
            modifier.parentElement.appendChild(input)
            let createModifBtn = document.createElement('button')
            createModifBtn.innerText = "Modif"
            createModifBtn.className = "btnModified"
            modifier.parentElement.appendChild(createModifBtn)
             ;
            createModifBtn.addEventListener('click', () =>{
              console.log(select.checked)
                element.innerText=input.value
                element.append(modifier)
                element.append(supprime)
                element.append(select)
                let selectAll = document.querySelectorAll('.select')
                selectAll.forEach(element=>{
                    element.addEventListener('click' ,()=>{
                      
                       if(element.checked==true) {
                           element.parentElement.style.backgroundColor = "yellow"
                           
                         }
                         else if(element.checked == false){ 
                          element.parentElement.style.backgroundColor = "red"
                          
                         }
                    })
                })            

            })
        
            if(element.style.backgroundColor=="yellow") { 
                select.checked = true
            }

        })


        supprime.addEventListener('click', () => {
            supprime.parentElement.remove()
            // children.splice(children.indexOf(supprime.parentElement), 1)
            console.log(children)
            console.log(supprime.parentElement)
        })
         let selectAll = document.querySelectorAll('.select')
         selectAll.forEach(element=>{
             element.addEventListener('click' ,()=>{
               
                if(element.checked==true) {
                    element.parentElement.style.backgroundColor = "yellow"
                    
                  }
                  else if(element.checked == false){ 
                   element.parentElement.style.backgroundColor = "red"
                   
                  }
             })
         })

    })



}
})

children.forEach(element => {
    root.appendChild(element)
    console.log(element)
    let supprime = element.querySelector('.supprime')
    supprime.addEventListener('click', () => {
        supprime.parentElement.remove()
        children.splice(children.indexOf(supprime.parentElement), 1)

        })

})

clear.addEventListener('click', () => {
    root.innerHTML = ""
    location.reload()
})

btn_do.addEventListener('click', () => {
  root.innerHTML=''
  children.forEach(element=>{
    //  supprime.addEventListener('click', () => {
    //     children.splice(children.indexOf(element), 1)
    //     })
      if(element.style.backgroundColor=="yellow") { 
          root.appendChild(element)
      }
  })
  
})

btnto_do.addEventListener('click', ()=>{
    root.innerHTML=""
    children.forEach(element=>{
        let supprime = element.querySelector('.supprime')
        supprime.addEventListener('click', () => {
           children.splice(children.indexOf(element), 1)
           })
        if(element.style.backgroundColor!=="yellow"){
            root.appendChild(element)
        }
    })
})
document.body.addEventListener('keydown', (e)=>{
    if(e.key=="Enter") { 
        if(screen.value == "") { 
            alert('entre une valeur')
        }
        else {
            btn_add.click()
        }
    }
})
btnAll.addEventListener('click', () => {
    children.forEach(element => {
           root.appendChild(element)
            let modifier = element.querySelector('.modif')
             supprime = element.querySelector('.supprime')
            supprime.className = "fas fa-trash-alt supprime"
            let select = document.createElement('input')
            select.type = "checkbox"
            select.classList = "select"
            modifier.addEventListener('click', ()=>{
                let createModifBtn = document.createElement('button')
                createModifBtn.innerText = "Modif"
                createModifBtn.className = "btnModified"

            })
    })
    })








