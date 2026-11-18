// Conditional loading - Dynamic imports jarurat ke hisab se 
async function loadLanguage(lang) {
    if(lang === 'Jay'){
        const hindi = await import('./hindi.js') // ye Promise return karta hai
        return hindi.default
    }else{
        const english = await import('./english.js')
        return english.default
    }
}
loadLanguage('Jay')
.then((message)=>{
    console.log(message);
})

// Dynamic import using async/await
// async function loadMath() {
//     const calculation = await import('./math.js')
//     console.log(calculation.add(40,39));
// }
// loadMath()

// Dynamic import using .then()
// import('./math.js')
// .then((calculator)=>{
//     console.log(calculator.add(50,60));
// })
// .catch((error)=>{
//     console.log('Load Failed !',error);
// })

// const btn = document.querySelector('#loadBtn')
// btn.addEventListener('click', async () => {
//     const module = await import('./math.js')
//     const add = module.add(10,20)
//     const mul = module.multiply(5,7)
//     console.log(add); // load calculator button par click karte hi calculation perform ho jati
//     console.log(mul);
// })

// console.log('start');
// import('./math.js') // here resolved promise return kiya 
// .then((module)=>{
//     console.log(module.add(40,50));
//     console.log(module.multiply(4,5));
// })
// console.log('End');