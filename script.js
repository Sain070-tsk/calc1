function plus(){
	//Объявляем переменные
	var num1, num2, res;
	//Получаем элемент с индентификатором n1 и присваиваем его переменной num1
	num1 = document.getElementById('n1').value;
	//Парсим элемент получаем число из строки введенного текста
	num1 = parseInt(num1);
	//Проделываем тоже самое для num2
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	//Суммируем полученные числа операцие сложения, результат помещаем в переменную res
	res = num1 + num2;
	//Возвращаем результат выполнения на страницу по идентификатору result посредством добавления в конец строки
	document.getElementById('result').innerHTML = res;	
}

function minus()
{
	var num1, num2, res;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	res = num1 - num2;
	document.getElementById('result').innerHTML = res;	
}

function mul()
{
	var num1, num2, res;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	res = num1 * num2;
	document.getElementById('result').innerHTML = res;	
}
function div()
{
	var num1, num2, res;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	//Добавляем проверку деления на 0
	if (num2 !=0){
		res = num1 / num2;
		document.getElementById('result').innerHTML = res;
		}
		else
			document.getElementById('result').innerHTML = "Ошибка! Деление на 0 запрещено!";
}