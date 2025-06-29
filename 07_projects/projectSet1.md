# Projects related to DOM

## Project 1

## Project Link [Click Here](https://stackblitz.com/@kedarbaswade2802/collections/learnjavascript)



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

## Project 2
## Project Link [Click Here](https://stackblitz.com/@kedarbaswade2802/collections/learnjavascript)




## Solution Code

```javascript
const form=document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault()
  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const results=document.querySelector('#results')
  if(height === '' || height<0 || isNaN(height)){
    results.innerHTML=`please give valid height:${height}`
  }
  else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML=`please give valid height:${weight}`
  }
  else{
    const BMI=(weight/((height*height)/10000)).toFixed(2)
    results.innerHTML=`<span>${BMI}</span>`
  }
})
```


## Project 3

## Project Link [Click Here](https://stackblitz.com/@kedarbaswade2802/collections/learnjavascript)



## Solution Code

```javascript
//document.getElementById('#clock')-->sir ne aise kiya he
const clock=document.querySelector('#clock')

setInterval(function(){
  let date =new Date()
  clock.innerHTML=(date.toLocaleTimeString())
},1000)
```

## Project 4

## Project Link [Click Here](https://stackblitz.com/@kedarbaswade2802/collections/learnjavascript)



## Solution Code

```javascript

```
