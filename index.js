
var toDoListElementsContainer = document.getElementsByClassName("to-do-list-elements")[0];
const addButton = document.getElementsByClassName("add-button")[0];

// Create list element
addButton.addEventListener("click", (event) => {
	event.preventDefault();
	
	let textField = document.getElementsByClassName("list-item-text")[0];
	let currentTextFieldValue = textField.value;
	let newListElement = document.createElement("div");
	
	newListElement.classList.add("list-item");
	newListElement.innerHTML = `<div class="list-item-name">${currentTextFieldValue}</div> 
								<div class="cancel-button">&times;</div>`;
	toDoListElementsContainer.append(newListElement);
	textField.value = "";
});

// Delete list element
