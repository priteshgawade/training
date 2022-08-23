// let cards ="<div class="card"><h2>card 1</h2></div>"
function addcards(){
    for(let i=0;i<=10;i++){
        document.getElementById('box').innerHTML
        +="<div ><h2>card 1</h2></div>";
        }

        //document.getElementById('box').innerHTML+="<h2>card 1</h2>";
        console.log('action happened')
}

function menu() {
    if (document.getElementById('menu').style.display !== 'none') {
      document.getElementById('menu').style.display = 'none';
      document.querySelector('.menu-icon i').classList.replace('bx-x','bx-menu');
    }
    else {
      document.querySelector('.menu-icon i').classList.replace('bx-menu','bx-x');
      document.getElementById('menu').style.display = 'block';
    }
  }