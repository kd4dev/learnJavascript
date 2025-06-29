// document.getElementById('owl').onclick=function(){
//     alert('owl clicked')
// }

//type,timestamp,defaultPrevented
//target,toElement,srcElement
//clientX,clientY,screenX,screenY
//altKey,ctrlKey,shiftKey,keyCode

/* document.querySelector('#owl').addEventListener('click',function(){

    },false) 
*/
// generally hamesha 3rd parameter false hota he toh hum likhte nahi he


//event Propagation
//false-->event bubbling

document.getElementById('images').addEventListener('click',function(e){
    console.log('clicked inside image')
    },false) 

document.getElementById('owl').addEventListener('click',function(e){
    console.log('owl clicked  ')
},false) 


//bubbling hoti he owl pe click kiya toh pehle owl ka ayega phir image ka
// inner bubble se bade bubbbl epar aise jata he,isiliye bubbling kehte ye hum stop kar skte he
//e.stopPropagation(), se ya dono value true karake


document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault() // ye default behaviour stop krta he jaise pehle google pe click krne ke bad googl e [ar jata tha ab nahi jata
    e.stopPropagation() // ab is se image wale tak bubbling nahi hoga
},false)

document.querySelector('#images').addEventListener('click',function(e){
    console.log(e)
    console.log(e.target.parentNode)
    console.log(e.target.tagName)

    if(e.target.tagName==='IMG'){
        let removeIt=e.target.parentNode
        removeIt.remove() //both works,but this is little new
        //removeIt.parentNode.removeChild(removeIt)
    }
},false)


