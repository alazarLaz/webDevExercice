const url = 'https://icanhazdadjoke.com/'

const btn = document.querySelector('.btn')
const jokeArea = document.querySelector('.joke')

let joke = '';
const config = 
{
    headers:
    {
        Accept : 'application/json'
    } 
}
btn.addEventListener('click',()=>
{
    fetch(url,config)
    .then(responce => responce.json())
    .then(data=>{
        console.log(data)
        jokeArea.innerText = data.joke;
    })  
    
})

