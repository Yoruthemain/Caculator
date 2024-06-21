let Day = document.querySelector("#Day")
let Month = document.querySelector("#Month")
let Year = document.querySelector("#Year")
for (let index = 1; index < 32; index++) {
   
    console.log(index);
    Day.innerHTML+=`<option value="${index}">${index}</option>`
}
for (let index = 1900; index < 2024; index++) {
   
    Year.innerHTML+=`<option value="${index}">${index}</option>`
}
let Months_of_the_Year=["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]
for (let index = 0; index < Months_of_the_Year.length; index++) {
    
    Month.innerHTML+=`<option value="${Months_of_the_Year[index]}">${Months_of_the_Year[index]}</option>`
    
}
let Model = ["Lamborgini","BMW","Juager","Ferrari","Benz"]
console.log(Model[1]);
for (let index = 0; index < Model.length; index++) {
    const element = Model[index];
    console.log(element)
}
let Bag = ["Book","Pencil","Laptop","Shoes"]
console.log(Bag[2]);
Bag.push("pen")
console.log(Bag);
Bag.unshift("console")
console.log(Bag);
Bag.pop()
console.log(Bag);
Bag.shift()
console.log(Bag);
for (const item of Bag) {
    console.log(item);
}
let myArray = [3,4,6,8,2]
console.log(myArray.map((v,i)=> v*8));

console.log(myArray.filter((v,i)=> v>5));
let ArrayX = ["look","right","speak"]
console.log(ArrayX.concat(myArray));
let myObj = {
    Name: "Muiz",
    Age: 54,
    Work: "Farmer"
}
console.log(myObj);

console.log(myObj["Age"], myObj.Age, myObj.Name);