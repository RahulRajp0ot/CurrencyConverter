const BaseURL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns=document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");


for(let select of dropdowns ){
    for(currcode in countryList){
        let newoption=document.createElement("option");//creating a new option
        newoption.innerText=currcode;
        newoption.value=currcode;
        if(select.name === "from" && currcode==="USD"){
            newoption.selected="selected";
        }
        else if( select.name==="to" && currcode==="INR"){
            newoption.selected="selected";
        }
        select.append(newoption);//adding option in select 

    } 
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });

}
const updateFlag = (element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src= newSrc;
};


    // let amount=document.querySelector(".amount input");
    // let amtVal=amount.value;
    // if(amtVal==="" || amtVal<1){
    //     amtVal=1;
    //     amount.value="1";
    // }
// console.log(fromCurr.value,toCurr.value);
// const URL=`${BaseURL}/${fromCurr.value.toLowerCase}/${toCurr.value.toLowerCase}.json`;
// let response=await fetch(URL);
// let rate=data[toCurr.value.toLoweCase()];
// console.log(rate);
// let finalAmount=amtVal*rate;
// MessageChannel.innerText=`${amtVal} ${fromCurr.value}=${finalAmount} ${toCurr.value}`



// const updateExchangeRate=async()=>{
//   let amount=document.querySelector(".amount input");
// let amtVal=amount.value;
// if(amtVal===0 || amtVal<1){
//     amtVal=1;
//     amount.value="1";
// }

// const URL=`${BaseURL}/${fromCurr.value.toLowerCase}/${toCurr.value.toLowerCase}.json`;
// let response=await fetch(URL);
// let data=await response.json();
// let rate=data[toCurr.value.toLoweCase()];
// console.log(rate);
// let finalAmount=amtVal*rate;
// MessageChannel.innerText=`${amtVal} ${fromCurr.value}=${finalAmount} ${toCurr.value}`;
//  }
btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    if(amtVal===0 || amtVal<1){
        amtVal=1;
        amount.value="1";
    }
    // updateExchangeRate();
    const URL=`${BaseURL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response=await fetch(URL);
    let data=await response.json();
    let rate=data[toCurr.value.toLoweCase()];
    console.log(rate);
    });

// window.addEventListener("load",()=>{
//     updateExchangeRate();
// });

