let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

    let passWordOne = document.getElementById("pw1")
    let passWordTwo = document.getElementById("pw2")



function passIndex(){
    let index = "";
    for (let i = 0; i < 15; i++) {
    let randomCharacter = Math.floor(Math.random()* characters.length);
    index += characters[randomCharacter]
    
}
    return index
    
 }

function generatePassword(){
    let firstPass = passIndex()
    let secondPass = passIndex()
    
    passWordOne.textContent = firstPass
    passWordTwo.textContent = secondPass

 } 

