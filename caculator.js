let numbersbtn=document.querySelectorAll("[data-number]")
console.log(numbersbtn);
let operationbtn=document.querySelectorAll("[data-operation]")
console.log(operationbtn);
let allclearbtn=document.querySelector("[data-all-clear]")
console.log(allclearbtn);
let equalsbtn=document.querySelector("[data-equals]")
let previous_Operand=document.querySelector("[data-previous-operand")
let current_Operand=document.querySelector("[data-current-operand]")
let Deletebtn=document.querySelector("[data-delete]")
class Caculator{
    constructor(previous_Operand_Element,current_Operand_Element){
        this.previous_Operand_Element=previous_Operand_Element
        this.current_Operand_Element=current_Operand_Element
        this.clear()
    }
append_Number(number){
    
    this.current_Operand = this.current_Operand.toString()+number.toString()
    // console.log(this.current_Operand);
}
Delete(){
    this.current_Operand=this.current_Operand.toString().slice(0,-1)
}
Choose_Operation(operation){
    if (this.current_Operand==="") return
    if (this.previous_Operand!=""){
        this.compute()
    }
    this.operation=operation
    this.previous_Operand=this.current_Operand
    this.current_Operand=""
}
compute(){
    let compute
    let previous=parseFloat(this.previous_Operand)
    let current=parseFloat(this.current_Operand)
    if (isNaN(previous)||isNaN(current)) return
    switch (this.operation) {
        case '+':
        compute=previous+current
       
            break;
        case "-":
            compute=previous-current
            break;
        case "÷":
            compute=previous/current
        break;
        case "×":
            compute=previous*current
            break;
        default:
            return;
    }
    this.current_Operand=compute
    this.operation=undefined
    this.previous_Operand=""
}
clear(){
    this.previous_Operand=""
    this.current_Operand=""
    this.operation=undefined
}
update_Display(){
    console.log(this.current_Operand, this.previous_Operand);
    this.current_Operand_Element.innerText    =this.current_Operand
    // this.previous_Operand_Element.innerHTML   =this.previous_Operand
}
}
const caculator=new Caculator(previous_Operand,current_Operand)
numbersbtn.forEach(button=>{
    button.addEventListener("click", () => {
        caculator.append_Number(button.innerText)
        caculator.update_Display()
    });
})
Deletebtn.addEventListener("click",()=>{
    caculator.Delete()
    caculator.update_Display()
})
operationbtn.forEach(element => {
    element.addEventListener('click', ()=>{
        caculator.Choose_Operation(element.innerText)
        caculator.update_Display()
    })
});