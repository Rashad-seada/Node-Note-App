const noteInput = document.getElementById('note-input');
const noteList = document.getElementById('note-list');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', () => {
    const noteText = noteInput.value.trim();

    if (noteText) {
        const listItem = document.createElement('li');
        listItem.textContent = noteText;
        noteList.appendChild(listItem);
        noteInput.value = '';
    }
});
