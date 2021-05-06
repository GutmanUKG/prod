"use strict"

window.addEventListener('DOMContentLoaded', ()=>{
    const btn = document.querySelectorAll('.btn');

    btn.forEach(item=>{
        item.addEventListener('click',(event)=>{
            let target = event.target;
            event.preventDefault();
            if(target && !target.classList.contains('active')){
                clearSelect();
                item.classList.add('active')
            }
        })
    })
    function clearSelect() {
        for(let i = 0; i<btn.length; i++){
            if(btn[i].classList.contains('active')){
                btn[i].classList.remove('active')
            }
        }
    }
});