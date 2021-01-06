
const toDoListElementsContainer = document.getElementsByClassName("to-do-list-elements")[0];
const addButton = document.getElementsByClassName("add-button")[0];
const clearButton = document.getElementsByClassName("clear-button")[0];
const errorMessage = document.getElementsByClassName("error-message")[0];
let listItemId = 0;

// Create list element
addButton.addEventListener("click", (event) => {
	event.preventDefault();
	
	let textField = document.getElementsByClassName("list-item-text")[0];
	let currentTextFieldValue = textField.value;
	let newListElement = document.createElement("div");

	if (currentTextFieldValue.length === 0) {
		showErrorMessage();	
	} else {
		listItemId += 1;
		newListElement.classList.add(`list-item`, `list-item-id-${listItemId}`);
		newListElement.innerHTML = `<div class="list-item-name list-item-name-id-${listItemId}"><p>${currentTextFieldValue}</p></div> 
									<button class="check-off check-off-id-${listItemId}">Check Off</button>
									<button class="cancel-button cancel-button-item-id-${listItemId}">&times;</button>`;
		toDoListElementsContainer.append(newListElement);
		textField.value = "";
	}
});

// Clear text field
clearButton.addEventListener("click", (event) => {
	event.preventDefault();

	let textField = document.getElementsByClassName("list-item-text")[0];

	textField.value = "";

});

// Error message
const showErrorMessage = () => {
	errorMessage.classList.add("display-error-message");

	setTimeout(() => {
		errorMessage.classList.remove("display-error-message");
	}, 2500);
}

// Delete list element
document.addEventListener("click", (event) => {
	if (event.target.classList.contains("cancel-button")) {
		let listOfCancelButtons = document.getElementsByClassName("cancel-button");
		let numberOfCancelButtons = listOfCancelButtons.length;

		for (let i = 0; i < numberOfCancelButtons + 1; i++) {
			if (event.target.classList.contains(`cancel-button-item-id-${i}`)) {
				let thisListItem = document.getElementsByClassName(`list-item-id-${i}`)[0];
				
				thisListItem.classList.add("fade-out");
				setTimeout(() => {
					thisListItem.classList.add("display-none");
				}, 400);
			}
		}
	}
});

// Strike through list item
document.addEventListener("click", (event) => {
	if (event.target.classList.contains("check-off")) {
		let listOfCheckOffButtons = document.getElementsByClassName("check-off");
		let numberOfCheckOffButtons = listOfCheckOffButtons.length;

		for (let i = 0; i < numberOfCheckOffButtons + 1; i++) {
			if (event.target.classList.contains(`check-off-id-${i}`)) {
				let thisListItemName = document.getElementsByClassName(`list-item-name-id-${i}`)[0];

				(!thisListItemName.classList.contains("strike-through")) 
					? (thisListItemName.classList.add("strike-through")) 
					: (thisListItemName.classList.remove("strike-through"));
			}
		}
	}
});
