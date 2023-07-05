const observerX = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('showX')
        }else{
            entry.target.classList.remove('showX')
        }
    })
})
const observerY = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('showY')
        }else{
            entry.target.classList.remove('showY')
        }
    })
})
const observerScale = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('showScale')
        }else{
            entry.target.classList.remove('showScale')
        }
    })
})

const hiddenElements1 = document.querySelectorAll('.hidden1')
const hiddenElements2 = document.querySelectorAll('.hidden2')
const hiddenElements3 = document.querySelectorAll('.hidden3')
const hiddenElements4 = document.querySelectorAll('.hidden4')
const hiddenElements5 = document.querySelectorAll('.hidden5')


hiddenElements1.forEach((el) => observerX.observe(el))
hiddenElements2.forEach((el) => observerX.observe(el))
hiddenElements3.forEach((el) => observerY.observe(el))
hiddenElements5.forEach((el) => observerY.observe(el))
hiddenElements4.forEach((el) => observerScale.observe(el))