var c=300

if(true){
    // let a=12
    // const b=23
    var c=123
}


//console.log(a) -->a is not defined

console.log(c)//123-->ye output dega iska koi scope nahi he


//browser ka scope aur node ka scope thoda alag he

function one(){
    const username="kedar"
    function two(){
        const website="youtube.com"
        console.log(username)
    }
    //console.log(website) -->ye error dega

    two()
}

one()

//chota bade ko icecream mang skta he par bada chote ko mange accha nai lgta

if(true){
    const userksa="kedar"
    if(userksa==="kedar"){
        const web="youtube"
        console.log(web+userksa)
    }
    // console.log(web)-->error
}
//console.log(userksa) -->error


const add=function(num){  //function expression
    return num+2
}
add(34)

//in js variables are powerfull they can hold anything

//function declaration me pehle call krke bad me function banaya toh bhi chalta he,pr ye function expression me nahi chalta