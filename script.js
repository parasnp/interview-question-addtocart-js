const main=document.querySelector("main");
const data=[
    {image : './img/f1.jpg',
    text:"flower1"
    },
    {image : './img/f2.jpg',
    text:"flower2"
    },
    {image : './img/f3.jpg',
    text:"flower3"
    },
    {image : './img/f4.jpg',
    text:"flower4"
    },
    {image : './img/f5.jpg',
    text:"flower5"
    },
    {image : './img/f6.jpg',
    text:"flower6"
    },
    {image : './img/f7.jpg',
    text:"flower6"
    },
    {image : './img/f8.jpg',
    text:"flower6"
    }
]
data.forEach(createBox);
function createBox(item, index)
{
    const box= document.createElement('div');
    const { image, text } = item;
    // add a class to box div
    box.classList.add('box');
    box.innerHTML =`
     <img src="${image}" alt="${text}" />
     <p class="info"> ${text} </p>
     <button class="btn" onclick="removeItem(${index},this)">
     Add to cart</button>
     `
     main.appendChild(box);
}
function removeItem(index,button)
{
    if(index!=-1)
    {
        data.splice(index,1);
    }
    const itemElement=button.parentNode;
    main.removeChild(itemElement);
}