let numbersbtn=document.querySelectorAll("[data-number]")
console.log(numbersbtn);
let operationbtn=document.querySelectorAll("[data-operation]")
console.log(operationbtn);
let allclearbtn=document.querySelector("[data-all-clear]")
console.log(allclearbtn);
let equalsbtn=document.querySelector("[data-equals]")
let previous_Operand=document.querySelector("[data-previous-operand")
let current_Operand=document.querySelector("[data-current-operand]")
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
