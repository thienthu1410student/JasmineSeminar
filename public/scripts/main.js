function getCharacter(button)
{
	var txtFieldValue = document.getElementById("txtFieldString").value;
	document.getElementById("txtFieldString").value = txtFieldValue + button.value;
}

