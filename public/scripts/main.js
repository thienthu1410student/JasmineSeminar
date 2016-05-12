function getCharacter(button)
{
	txtFieldString.value = txtFieldString.value + button.innerHTML;
}

function clearAll()
{
	document.getElementById("txtFieldString").value = "";
}

