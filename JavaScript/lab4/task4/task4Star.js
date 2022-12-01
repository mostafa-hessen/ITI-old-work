let svgs=document.querySelectorAll('.svg')

console.log(svgs);

for (const key of svgs) {
   console.log(key);
//    if(key.getAttribute('data-index')=="0")
//    {
    key.addEventListener('mousemove',()=>{
        console.log('d');
        key.style.fill="gold"
       })
//    }
  
   key.addEventListener('mouseleave',()=>{
    console.log('d');
    key.style.fill='#fff'
   })
}