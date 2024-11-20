// importation de initEvent
import {CalculetteObject} from '/asset/js/functions/functions.js'
window.onload = ()=>{
    const elements = document.querySelectorAll('.col-calculette-1 .line-calculette > *')
    // recuperationdes touches 
    const touches = ([].slice.call(elements)).slice(3)

    CalculetteObject.initEvent(touches)
}
