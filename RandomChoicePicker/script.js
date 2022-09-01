const textarea = document.getElementById('textarea')

const tagsEl = document.querySelector('.tags')

textarea.focus()

textarea.addEventListener('keyup',(e)=>
{
    const tags = e.target.value.split(',').filter(tag=>tag.trim()!=='').map(tag=>tag.trim())
    tagsEl.innerHTML = ''
    tags.forEach(element => 
        {
            const tagEl = document.createElement('span')
            tagEl.innerText = element
            tagEl.classList.add('tag')
            tagsEl.appendChild(tagEl)
    });
})