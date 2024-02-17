var background = document.querySelector(".background");

for (var i = 0; i <= 50; i++)
{
    let blocks = document.createElement('div');
    blocks.classList.add('block');
    background.appendChild(blocks).style.top = Math.round(Math.random() * screen.height);
}