const espace= document.getElementById('spacing')
const blur= document.getElementById('blur')
const color= document.getElementById('color')
const image = document.querySelector(".image")


espace.addEventListener('input',()=>{
    console.log(this.value)
    image.style.backgroundColor = this.value +'px'

})


blur.addEventListener('input',()=> {
    console.log(this.value)
    image.style.padding = this.value +"px"

})


color.addEventListener('choose',()=> {
    console.log(this.value)
    image.style.filter = 'blur('+this.value+')'

})
