const wrapper = document.querySelector('.wrapper')
const divs = document.querySelectorAll('.wrapper div')




divs.forEach(div =>{
    div.addEventListener("click", (e)=>{
        e.target.classList.toggle('black')
    })
})


// divs.forEach(div =>{
//     div.target.classList.remove('black')
// })


// divs.forEach(div =>{
//     div.classList.remove('black')
//     div.addEventListener("click", (e)=>{
//         e.target.classList.add('black')
//     })
// })


// function click(){
//     divs.forEach(div =>{
//         div.classList.remove('black')
//         div.addEventListener("click", (e)=>{
//             e.target.classList.add('black')
//         })
//     })
// }

