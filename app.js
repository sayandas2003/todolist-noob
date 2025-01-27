let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);

    console.log(inp.value);
    inp.value = "";
})

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON")
    {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})



// // hum jab event listener add karte he tab ye new elements ke liye
// // add nhi hote, only existing elements ke liye hote he
// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns)
// {
//     delbtn.addEventListener("click", function(){
//         // let par = delbtn.parentElement;
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }








// // self -
// let btn = document.querySelector("button");
// let inp = document.querySelector("input");
// let ul = document.querySelector("ul");

// btn.addEventListener("click", function(){
//     let task = inp.value;
//     // this simply holds the copy of the value
//     // so we cant do task = ""; and we have to do inp.value=""; again
//     let newel = document.createElement('li');
//     newel.innerText = task;
//     ul.appendChild(newel);
//     inp.value = "";
// })

// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns)
// {
//     delbtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }