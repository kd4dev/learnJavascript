# Projects related to DOM

## Project Link

https://stackblitz.com/@kedarbaswade2802/collections/learnjavascript

## Solution Code

```javascript
    const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")


buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)//-->tells from where event is coming
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id
    }
    else if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id
    }
    else if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id
    }
    else if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id
    }
    else if(e.target.id==='wheat'){
      body.style.backgroundColor=e.target.id
    }
  })
})

```
