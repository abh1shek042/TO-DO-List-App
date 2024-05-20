const inputbox=document.getElementById('inputbox');
const list=document.getElementById('list');
function add(){
    if(inputbox.value === ''){
        alert('Write something')
    }
    else{
        let li= document.createElement('li');
        li.innerText=inputbox.value;
        list.appendChild(li);
        let span=document.createElement('span')
        span.innerHTML= "\u00d7"
        li.appendChild(span)
    }
    inputbox.value="";
    save();
    
}

list.addEventListener('click', function(m){
    if(m.target.tagName=== 'LI'){
        m.target.classList.toggle('checked');
        save();
        
    }
    else if(m.target.tagName === 'SPAN') {
        m.target.parentElement.remove();
        save();
        

    }
},false)

function save(){
    localStorage.setItem('data',list.innerHTML)
}

function show(){
    list.innerHTML= localStorage.getItem('data')
}
show();