const menu=[
    {
        home:'HOME'
    },
    {
        home:'ASUS'
    },
    {
        home:'DELL'
    },
    {
        home:'MSI'
    },
    {
        home:'APPLE'
    },

];

var text='';
for( let i in menu)
{
     text +=  `

     <li><a href="http://127.0.0.1:5500/hotel/asus.html">${menu [i]['home']}</a></li>
     `;
}
document.getElementsByClassName('menu')[0].innerHTML= `<ul>${text}</ul>`;






var text='';
for( let i in menu)
{
    text +=`
    <li><a href="http://127.0.0.1:5500/hotel/asus.html">${menu [i]['home']}</a></li>
    `;
}
document.getElementsByClassName('menu')[0].innerHTML=` <ul>${text} </ul> `;