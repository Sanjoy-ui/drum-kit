let numOfDrum = document.querySelectorAll(".drum").length;

// for(let i = 0 ; i< numOfDrum ; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function halo(){
//         alert("I got clicked");
//     });
// }
for(let i = 0 ; i< numOfDrum ; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function drom(){
        // let audio = new Audio('sounds/tom-1.mp3');
        // audio.play();
       this.style.color="white ";
    })
}

// let houseKeeper={
//     name:"ramsy" ,
//     age:20 ,
//     work:  "houseKeeper "


// }
// constructor function
function  HouseKeeper (name ,age ,workExperience ){
    this.name = name;
    this.age = age;
    this.workExperience= workExperience;
}
function Clean(){
    this.clean();
}
let houseKeeper= new HouseKeeper("Trisha" , 19 , "sleep"); 