// показывает выпадающий список
const dropList = function (o) {
	const selected = o.querySelector(".selected");
	const optionsContainer = o.querySelector(".options-container");

	const optionsList = o.querySelectorAll(".option");

	selected.addEventListener("click", () => {
	  optionsContainer.classList.toggle("active");
	});

	optionsList.forEach(o => {
	  o.addEventListener("click", () => {
	    selected.innerHTML = o.querySelector("label").innerHTML;
		selected.classList.add("active");
	    optionsContainer.classList.remove("active");
	  });
	});
};

// для каждого select-box запускаем функцию выпадающего списка
const selectBoxs = document.querySelectorAll(".select-box");
selectBoxs.forEach(o => {
	dropList(o);
});

window.onload = function () {
	const inputText = document.querySelectorAll(".box-input input");
	inputText.forEach(e=>{
		checkFillForInput(e);
	});
};

// проверка и очистка сообщений об ошибках в полях ввода
const inputText = document.querySelectorAll(".box-input input");
inputText.forEach(e=>{
	e.addEventListener('blur', checkFill);
	e.addEventListener('focus', removeErrorMessage);
});

const selected = document.querySelectorAll(".selected");
selected.forEach(o => {
	o.addEventListener('click', removeErrorMessage);
});

const checkboxs = document.querySelectorAll("input[type=checkbox]");
checkboxs.forEach(o => {
	o.addEventListener('click', removeErrorMessage);
});

function checkFillForInput(inputBox) {
	if(inputBox.value !='') {
		inputBox.classList.add('is-fill');
	}
	else {
		inputBox.classList.remove('is-fill');
	}
};
function checkFill() {
	if(this.value !='') {
		this.classList.add('is-fill');
	}
	else {
		this.classList.remove('is-fill');
	}
};

function removeErrorMessage() {
	this.classList.remove('empty');
	this.classList.remove('novalid');
}


function validate() {
	let form = document.forms.form1;
	let isValidated = true;

	if(!form.subname.value) {
		form.subname.classList.add("empty");
		isValidated = false;
	}

	if(!form.name.value) {
		form.name.classList.add("empty");
		isValidated = false;
	}
	if(!form.secondName.value) {
		form.secondName.classList.add("empty");
		isValidated = false;
	}

	let emailRegExp = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;

	if(!form.email.value){
		form.email.classList.add("empty");
		isValidated = false;

	}
	else if(!emailRegExp.test(form.email.value)) {
		form.email.classList.add("novalid");
		isValidated = false;

	}


	if(!form.category.value) {
		document.getElementById('select-category').classList.add('empty');
		isValidated = false;

	}
	if(!form.ticket.value) {
		document.getElementById('select-ticket').classList.add('empty');
		isValidated = false;

	}

	if(!form.agreement.checked) {
		form.agreement.classList.add('empty');
		isValidated = false;
	}

	if(isValidated)
		return true;
	else
		return false;
};