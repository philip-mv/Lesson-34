// Get references
const myForm = document.getElementById("myForm");
const myInput = document.getElementById("myInput");
const myItemList = document.getElementById("myItemList");

// Prevent form submission and create item on submit
myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    createItem(myInput.value);
});

// Function to create a new list item with a checkbox
function createItem(inputItems) {
    if (inputItems.trim() !== "") {
        const newListItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        newListItem.textContent = inputItems;
        newListItem.appendChild(checkbox);
        myItemList.appendChild(newListItem);

        myInput.value = "";
        myInput.focus();
    } else {
        alert("Please enter an item.");
    }
}