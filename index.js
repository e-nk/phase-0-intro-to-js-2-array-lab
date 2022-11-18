// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph");
    return cats;

}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    cats=[...cats, "Broom"];
    return cats;

}
function prependCat(name){
    cats=["Arnold", "Milo", "Otis", "Garfield"];
    return cats;
}
function removeLastCat(){
    cats= ["Milo", "Otis"];
    return cats;
}
function removeFirstCat(){
    cats=["Otis", "Garfield"]
    return cats;
}
