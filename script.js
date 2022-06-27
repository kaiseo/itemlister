var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// From submit event
form.addEventListener("submit", addItem);

//delete event
itemList.addEventListener("click", deleteItem);

//Filter event
filter.addEventListener('keyup', filterItems);

//Add item

function addItem(e) {
  e.preventDefault();

  //Get input
  var newItem = document.getElementById("item").value;

  //Create new li element
  var li = document.createElement("li");
  //Add class
  li.className = "list-group-item";
  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //Create delete button element
  var dltButton = document.createElement("button");

  //Add class to del button
  dltButton.className = "btn btn-danger btn-sm float-end delete";

  //add text node "x" to the button 

  dltButton.appendChild(document.createTextNode("X"));

  // add the del button to the li.
  li.appendChild(dltButton);

  //Add the new li to the form
  itemList.appendChild(li);

  document.getElementById("item").value = '';
}

//Remove Item
function deleteItem(e) {
  //When only the delete button clicked
  if (e.target.classList.contains('delete')) {
    //Ask again
    if (confirm("Are you sure?")) {
      //choose the parentElement of the delete button, which is the li
      var li = e.target.parentElement;
      //remove the li and the button
      itemList.removeChild(li);
    }
  }
}

//Filter Items

function filterItems(e) {
  // convert input text to lowercase
  var text = e.target.value.toLowerCase();
  //Get lis  
  var items = itemList.getElementsByTagName("li")
  // Convert to an array
  Array.from(items).forEach(item => {
    var itemName=item.firstChild.textContent;
    // compare input text and item names
    if(itemName.toLowerCase().indexOf(text)!=-1){
      item.style.display='block';
    }else{
      item.style.display='none';
    }
  })
} 