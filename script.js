

/*





8) Create a new li element.
9) Give the li the text "four".
10) Append the li to the ul element.
12) Loop over all of the lis inside the ol tag and give them a background color of "green".
13) Remove the div with a class of footer.
*/


//1) Select the section with an id of container without using querySelector.
var containerElement = document.getElementById("container");
console.log(containerElement);

//2) Select the section with an id of container using querySelector.
var containerSelect = document.querySelector("#container");
console.log(containerSelect);

//3) Select all of the list items with a class of "second".
var headerClass = document.getElementsByClassName('header');
console.log(headerClass);

//4) Select a list item with a class of third, but only the list item inside of the ol tag.
var listItem = document.querySelector('ol .third');
console.log(listItem);

//5) Give the section with an id of container the text "Hello!"
containerElement.innerHTML+="Hello!";

//6) Add the class main to the div with a class of footer.
var addMain = document.getElementsByClassName("footer")[0];
addMain.classList.add("main");
console.log(addMain);

//7) Remove the class main on the div with a class of footer.
addMain.classList.remove("main");
console.log(addMain);

//8) Create a new li element.
var newLi = document.createElement("li");

//9) Give the li the text "four"
newLi.innerHTML+="four";
console.log(newLi);

//10) Append the li to the ul element.
document.getElementsByTagName("ul")[0].appendChild(newLi);


//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
var li = document.getElementsByTagName("ol")[0].children;

for(let i = 0; i < li.length ; i++)
{
    li[i].style.backgroundColor ="green";
}

//13) Remove the div with a class of footer.
addMain.parentNode.removeChild(addMain);


