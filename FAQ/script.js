const btns = document.querySelectorAll('.expand')
const containers = document.querySelectorAll('.container')

btns.forEach(
    (btn,indx)=>
    {
        btn.addEventListener('click',()=>
        {
            containers[indx].classList.toggle('expanded')
        })
    })