// Change text content dynamically
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('mainTitle').textContent = "Text Changed!";
});

// Modify CSS styles via JavaScript
document.getElementById('changeStyleButton').addEventListener('click', function() {
    document.getElementById('description').style.color = 'red';
    document.getElementById('description').style.fontWeight = 'bold';
});

// Add an element when a button is clicked
document.getElementById('addElementButton').addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "This is a new paragraph added to the DOM.";
    document.getElementById('dynamicContent').appendChild(newParagraph);
});

// Remove the last added element when a button is clicked
document.getElementById('removeElementButton').addEventListener('click', function() {
    const dynamicContent = document.getElementById('dynamicContent');
    if (dynamicContent.lastChild) {
        dynamicContent.removeChild(dynamicContent.lastChild);
    } else {
        alert("No elements to remove!");
    }
});
