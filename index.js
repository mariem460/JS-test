console.log("test js");
//1. (Main theme: Programming Basics)
function logNumbers() {
    var numbersArray = [];
for( var i = 1; i <101; i++){
    console.log(i);
    var numbers = i;
    numbersArray.push(numbers);
 }
 numbersArray.forEach(number => {
    if (number % 3 == 0) {
        console.log(`${number} is divisible by 3`)
        
    }
    if (number % 5 == 0) {
        console.log(`${number} is divisible by 5`)

    }
    if (number % 5 == 0 && number % 3 == 0 ) {
        console.log(`${number} is Jackpot`)

    }

     
 });
}
logNumbers()

//2. (Main theme: DOM manipulation)
let btn = document.createElement("button");
btn.innerHTML = "Click Me";
document.body.appendChild(btn);


btn.addEventListener("click", ()=> {
    const body = document.getElementsByTagName("BODY")[0]
    const img = document.createElement("img");
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png";
    body.append(img)
})

//3. (Main theme: Async API calls)
const myResult = fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(data => data.data)
  .then(users => users.map(user => user.first_name))
  .then(names => [names[0], names[1], names[2]])
  .then(threeNames => console.log(threeNames))
 
  




 





    

