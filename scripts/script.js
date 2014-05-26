var up = true;
function moveDown(element, top)
{
	if (up == true)
	{
		if (top == undefined)
		{
			if (element.style.top == '')
				top = 110;
			else
				top = parseInt(element.style.top);
		}
		else if (top >= 420)
		{
			document.getElementById('about').style.display = 'block';
			up = false;
			return;
		}
		element.style.backgroundPosition = '0px ' + top + 'px';
		setTimeout(function(){ moveDown(element,top+10)}, 15);
	}
	else
		setTimeout(function(){ moveDown(element)}, 100);
}
function moveUp(element, top)
{
	if (up == false)
	{
		document.getElementById('about').style.display = 'none';
		if (parseInt(top) == 0 || top == undefined)
			top = 420;
		else if (parseInt(top) <= 120)
		{
			element.style.backgroundPosition = '0px 110px';
			up = true;
			return;
		}
		element.style.backgroundPosition = '0px ' + top + 'px';
		setTimeout(function(){ moveUp(element, top-10)}, 15);
	}
	else
		setTimeout(function(){ moveUp(element)}, 100);
}