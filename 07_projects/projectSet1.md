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

## Project 5

## Project Link [Click Here](https://stackblitz.com/@kedarbaswade2802/collections/learnjavascript)



## Solution Code

```javascript
const insert = document.querySelector('#insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = 
    `<div class="color">
      <table>
        <tr>
          <th>key</th>
          <th>keyCode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td> ${e.key===" "?"space":e.key}</td>
          <td> ${e.keyCode} </td>
          <td> ${e.Codee}</td>
        </tr>
      </table>
    </div>`
  ;
});

```

## Project 6

## Project Link [Click Here](https://stackblitz.com/@kedarbaswade2802/collections/learnjavascript)



## Solution Code

```javascript

  const randomColor = function () {
      const hex = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
      }
      return color;
};
let intervalId;
function startChangingColor(){
      function changeBg(){
        document.body.style.backgroundColor=randomColor()
      }
      if(!intervalId){
        intervalId=setInterval(changeBg,1000)
      }
  
}
function stopChangingColor(){
  clearInterval(intervalId)
  intervalId=null
}


document.querySelector('#start').addEventListener('click',startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
// const randomColor = function () {
//   const hex = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += hex[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

// let changeColor = function () {
//   document.body.style.backgroundColor = randomColor();
// };

// document.querySelector('#start').addEventListener('click', function (e) {
//   const k = setInterval(changeColor, 1000);
//   document.querySelector('#stop').addEventListener('click', function (e) {
//     clearInterval(k);
//   });
// });


```

