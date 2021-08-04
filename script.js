const divs = document.querySelectorAll('.wrapper div')
const colors = ['dark', 'red', 'green', 'blue', 'orange', 'yellow', 'purple']
const wrapper = document.querySelector('.wrapper')



divs.forEach((div,idx)=>{
    div.addEventListener('click',() =>{
        const random = Math.floor(Math.random()*7)
        divs.forEach(div =>div.removeAttribute('class'))
        if (idx === divs.length -1){
            idx = -1
        }
        divs[idx+1].classList.add(colors[random])
    })
})



//этот код по структуре правильнее
// wrapper.addEventListener('click', e =>{
//     if (e.target.classList[0] !== 'wrapper'){
//         const random = Math.floor(Math.random()*7)
//         divs.forEach(div =>div.removeAttribute('class'))
//         e.target.classList.add(colors[random])
//     }
// })

