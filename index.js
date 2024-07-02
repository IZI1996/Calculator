// const buton=document.getElementsByTagName('button');

// for(const bu of buton){
//   let storage2=''
//     let inpt = document.getElementById('result');   
//     bu.addEventListener('click',function(){
//     if( bu.classList.contains('number')||bu.classList.contains('operator') ){
      
//       inpt.value+=bu.innerHTML

//   const [a,b,c]=inpt.value.split(/\+|\-|\×|\÷/g)

//   console.log(a,c,b)
// }else if( bu.classList.contains('equals')){

//    if(inpt.value.includes('+')){

//     var a=Number(inpt.value.split('+')[0])
//     var b=Number(inpt.value.split('+')[1])
//     inpt.value=''

//     inpt.value=a+b

//    }else if(inpt.value.includes('-')){
//     var a=Number(inpt.value.split('-')[0])
//     var b=Number(inpt.value.split('-')[1])
//     inpt.value=''

//     inpt.value=a-b
//    }
//}else if(inpt.value.includes('-')){
  //     var a=Number(inpt.value.split('-')[0])
  //     var b=Number(inpt.value.split('-')[1])
  //     inpt.value=''
  
  //     inpt.value=a-b
//}else if(inpt.value.includes('-')){
  //     var a=Number(inpt.value.split('-')[0])
  //     var b=Number(inpt.value.split('-')[1])
  //     inpt.value=''
  
  //     inpt.value=a-b


// }


// }
// )
// }

// METHOD 2
const buton=document.getElementsByTagName('button');

for(const bu of buton){
    let inpt = document.getElementById('result');   
    bu.addEventListener('click',function(){
    if( bu.classList.contains('number')||bu.classList.contains('operator')||bu.classList.contains('decimal') ){
      

      inpt.value+=bu.innerHTML
}else if( bu.classList.contains('equals')){
  const [a,c]=inpt.value.split(/\+|\-|\×|\//g)
 
  switch(true) {
    case inpt.value.includes('+'): inpt.value=Number(a)+Number(c)
    ;break;
    case inpt.value.includes('-'):inpt.value=Number(a)-Number(c)
    ; break;
    case inpt.value.includes('*'):inpt.value=Number(a)*Number(c)
    ; break;
    case inpt.value.includes('/'):inpt.value=Number(a)/Number(c)
    ; break;
  }
}else if( bu.classList.contains('clear')){
  inpt.value=''


}

  




})
}
