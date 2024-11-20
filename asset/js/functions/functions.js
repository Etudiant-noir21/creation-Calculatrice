 // recuperation des elements
 const elements = document.querySelectorAll('.col-calculette-1 .line-calculette > *')
 let operateurs = document.querySelectorAll('.col-calculette-2 .line-calculette > *')
 // console.log elements)
 const screen = elements[0]
 const cancel = elements[1]
 const del = elements[2]

//  les elements dans operateurs
const result = operateurs[0]
const egale = operateurs[operateurs.length-1]

// convertir operateurs en tableau
operateurs = Array.from(operateurs).slice(1)
let operateurSelected 
//  export de mon fonction
export const CalculetteObject = {
    initEvent: (touches)=>{

        cancel.addEventListener('click', CalculetteObject.initCancel)
        del.addEventListener('click', CalculetteObject.initDelete)
        egale.addEventListener('click',CalculetteObject.initEgale)

        // les touches 
        if(touches.length){
            touches.forEach(touche => {
                touche.addEventListener('click',()=>{
                    const value = touche.innerText
                    screen.value +=value
                     result.value = ''
                    console.log(value);
                    operateurSelected = false
                })
            });
        }

        // les operateurs
        if(operateurs.length){
            operateurs.forEach(operateur => {
                operateur.addEventListener('click',()=>{
                    if(!operateurSelected){
                        const value = operateur.innerText
                        screen.value +=value
                        console.log(value);
                        operateurSelected = true
                        
                    }
                   
                })
            });
        }
    },

    // botton cancel
    initCancel: ()=>{
        screen.value = ""
        result.value = ''
    },
// button del
    initDelete: ()=>{
        screen.value = screen.value.substring(0, screen.value.length -1)
        result.value = ''
        operateurSelected = false
    },
    initEgale: ()=>{
        if(!operateurSelected){
            result.value = eval(screen.value)

        }
    }
}