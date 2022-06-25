const panels = document.querySelectorAll('.panel')

panels.forEach((panel)=>
{
    panel.addEventListener('click',()=>
    {
        console.log('clicked')
        removeActivePanel();
        panel.classList.add('active');
    })
})

const removeActivePanel = ()=>
{
    panels.forEach((panel)=>
    {
        panel.classList.remove('active')
    })
}