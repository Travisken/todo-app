const inputText = document.querySelector('#input-task');
const listContainer = document.querySelector('#list-container');
const container = document.querySelector('.container');
const header = document.querySelector('.header');
const theme = document.querySelector('#theme');
const input = document.querySelector('.input');
const list = document.querySelectorAll('li');
let listBackground = document.querySelector('.list');
let liSpan = document.querySelector('li span');
let foot = document.querySelector('.footer');
let foot2 = document.querySelector('.footer2');
let numSpan = document.querySelector('#num-span');
let clearDone = document.querySelector('#clear-comp')

let num = 0;



// saveList();
listContainer.addEventListener('click', (i)=>{
if(i.target.tagName === 'LI'){
    i.target.classList.toggle('checked');

    console.log('good');
    
    num--
    numSpan.innerHTML = num;
    saveList();
    
}else if(i.target.tagName === 'SPAN'){
    i.target.parentElement.remove();
    
    num--
    numSpan.innerHTML = num;
    saveList();
}
if(num <= 0){
    // num.textContent = 0;
    num = 0;
    console.log('todo')
}

}, false);

function themeChanger(){
    container.classList.toggle('background');
    header.classList.toggle('background-img');
            theme.classList.toggle('moon');
           inputText.classList.toggle('intext');
           foot.classList.toggle('foot');
           foot2.classList.toggle('foot');
        //    document.querySelectorAll('li').classList.toggle('black');
        // document.querySelector('.list-container li').className.add('trans');
           document.querySelector('.list').classList.toggle('change');
        //    list.classList.toggle('lichange');
           listBackground.classList.toggle('light');
        //    liSpan.classList.toggle('light');
           
           input.classList.toggle('white');

           
// if(container.style.background="white"){
    //     console.log('functioning')
    // }
    console.log('working'); 

}

// if(listBackground.style.background = 'white'){
//             li.style.color = 'black';
//             console.log('coloring');
//            }else{
// themeChanger()
//            }
function addTask(){
    if(inputText.value ===''){ 
        alert('You Must Write Something!');

    }else{
       addlist()
    }
     
    inputText.value = "";
    saveList();

}
// list.forEach(lists=> 
    // let liid = document.querySelector('.liid')
    // liid.addEventListener('click', ()=>{
   
// })
// })
// function angolo(){
//     alert('s')
// }

// if(list.textContent === ''){

// }else{
// addlist()
// }

    function addlist(){
         let li = document.createElement('li');
        li.innerHTML = inputText.value;
        listContainer.appendChild(li);
        num++
        numSpan.innerHTML = num
        
if(li.style.height >= '10px'){
    alert('error please contact us')
}else{
        // li.addEventListener('click',()=>{
            let span = document.createElement('span');
       span.innerHTML = '\u00d7';
       li.appendChild(span);
       console.log('stress');
       
    //    })
}



    }


   

    clearDone.addEventListener('click', (i)=>{
//  if(i.target.tagName === 'LI' && i.target.checked){
//            console.log('rest')
//         }else{
//              i.target.parentElement.remove();
//         }

// alert('tirre')
document.querySelectorAll('.checked').forEach(chock=>{
    chock.style.display = 'none'
})
localStorage.setItem('dn','okay')
// if (i.target.tagName = 'LI' && i.target.checked) {
    // i.target.parentElement.remove();
    // alert('tire');
//  } else{
    // i.target.parentElement.remove();
    
    // num--
    // numSpan.innerHTML = num;
    // saveList();
// }
    })
    // function addSpan(){
    //     //
    // }

function saveList(){
    localStorage.setItem('data', listContainer.innerHTML);
    localStorage.setItem('todo', numSpan.innerHTML);
}
function loaded(){
    listContainer.innerHTML = localStorage.getItem('data');
    numSpan.innerHTML = localStorage.getItem('todo');
    if (localStorage.getItem('dn') == 'okay') {
        document.querySelectorAll('.checked').forEach(chock=>{
            chock.style.display = 'none'
        })
    }
}

// saveList();



