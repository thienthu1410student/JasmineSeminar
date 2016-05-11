function getCharacter(button)
{
	var txtFieldValue = document.getElementById("txtFieldString").value;

	if (txtFieldValue!==" ")
		document.getElementById("txtFieldString").value = txtFieldValue + button.innerHTML;
	else
		document.getElementById("txtFieldString").value = button.innerHTML;
}

function clearAll()
{
	document.getElementById("txtFieldString").value = " ";
}
