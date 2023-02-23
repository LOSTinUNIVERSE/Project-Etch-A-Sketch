const container =document.getElementById('container')
const btn = document.createElement('button')
container.appendChild(btn)
const cubsContainer = document.createElement ('div')
cubsContainer.id = "cubs-container"
container.appendChild(cubsContainer)
let inputValue = (50*50)
function createCubs(){
    for (let i= 1; i <inputValue; i++){
        const division = document.createElement('div')
        division.className = `division`
        cubsContainer.appendChild(division)}  
        for (let cub of cubsContainer.children){
            cub.addEventListener('mouseover', change1 )
            cub.addEventListener('mouseout', change2 )
        }
}
createCubs()
const cubs = document.getElementsByClassName('division')
console.log(cubsContainer.children)

for (let cub of cubsContainer.children){
    cub.addEventListener('mouseover', change1 )
    cub.addEventListener('mouseout', change2 )
    }

function getInput(){  
        let usersInput = prompt(" hey,  pick number of squares ")
        if(usersInput >= 100){
        usersInput = 10000
        console.log("too much, you  can only up to 100");
        inputValue = usersInput
        console.log(inputValue);
        remover()
        createCubs()
        // changeColor()
        }
        else if(usersInput < 100){
        usersInput =Math.pow(usersInput, 2)
        inputValue =usersInput
        console.log(inputValue);
        remover()
        createCubs()
        // changeColor()
        }
  
        }
        
        function changeColor(){
            let color = "#" 
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            return color = "#" + randomColor 
        }    
    
        
function change1(e){
        this.style.backgroundColor = changeColor()
        this.classList.add('changeOver')
        this.style.transition = "black"
    }    
    function change2(e){
        this.style.backgroundColor = "black"
        this.style.transition = "5s"
    }  


let theParent = document.getElementById('cubs-container')
btn.addEventListener("click", getInput)
function remover(){
    theParent.replaceChildren()
    }
    // container.innerHTML += '<h3>''</h3>'