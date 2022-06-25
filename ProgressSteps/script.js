const next = document.getElementById('next')
const prev = document.getElementById('previous')
const line = document.getElementById('line')
const nums = document.querySelectorAll('.num')


let currentIndex = 1;
next.addEventListener('click',()=>{
    currentIndex++;
    if(currentIndex>4)
    {
        currentIndex=4
    }
    console.log('nxt')
    update()
})


prev.addEventListener('click',()=>{
    currentIndex--;
    if(currentIndex<1)
    {
        currentIndex=1
    }
    console.log('prev')
    update()
})

function update()
{
    nums.forEach((num, indx)=>
    {
        if(currentIndex>indx)
        {
            num.classList.add('active')

        }
        else
        {
            num.classList.remove("active")
        }
    })
    const active = document.querySelectorAll('.active')
    line.style.width = (currentIndex - 1) * 33 + '%' ;
    if(currentIndex==1)
    {
        prev.disabled = true
    }
    else if(currentIndex==nums.length)
    {
        next.disabled = true
    }
    else
    {
        prev.disabled= false;
        next.disabled = false;
    }
}
console.log(nums)
