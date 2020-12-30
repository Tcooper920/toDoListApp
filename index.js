
const toDoListElementsContainer = document.getElementsByClassName("to-do-list-elements")[0];
const addButton = document.getElementsByClassName("add-button")[0];
let listItemId = 0;

// Create list element
addButton.addEventListener("click", (event) => {
	event.preventDefault();
	
	let textField = document.getElementsByClassName("list-item-text")[0];
	let currentTextFieldValue = textField.value;
	let newListElement = document.createElement("div");
	
	listItemId += 1;
	newListElement.classList.add(`list-item`, `list-item-id-${listItemId}`);
	newListElement.innerHTML = `<div class="list-item-name">${currentTextFieldValue}</div> 
								<div class="check-off">Check Off</div>
								<div class="cancel-button cancel-button-item-id-${listItemId}">&times;</div>`;
	toDoListElementsContainer.append(newListElement);
	textField.value = "";
});

// Delete list element
document.addEventListener("click", (event) => {
	if (event.target.classList.contains("cancel-button")) {
		let listOfCancelButtons = document.getElementsByClassName("cancel-button");
		let numberOfCancelButtons = listOfCancelButtons.length;

		for (let i = 0; i < numberOfCancelButtons; i++) {
			if (event.target.classList.contains(`cancel-button-item-id-${i + 1}`)) {
				let thislistItem = document.getElementsByClassName(`list-item-id-${i + 1}`)[0];
				thislistItem.classList.add("display-none");
			}
		}
	}
});