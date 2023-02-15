var get_input_teg = document.getElementsByTagName("input");
var thead_tr = document.querySelector(".thead_tr");

for (const iterator of get_input_teg) {
	var thead_th = document.createElement("th")
	thead_th.innerText = iterator.name
	thead_tr.appendChild(thead_th)
}

var gender_select = document.getElementById("gender");
var gender_th = `<th>${gender_select.name}</th>`;
var particular_index = thead_tr.length;
thead_tr.innerHTML += gender_th;

var submit_button = document.getElementById("submit_button");
submit_button.addEventListener("click", data);

var error_teg = document.getElementById("errer_show");

function data() {
	var back = true;
	var input_tag_array = new Array();
	for (k = 0; k < get_input_teg.length; k++) {
		input_tag_array.push(get_input_teg[k].value);
	}

	var gender_value = gender_select.value;
	input_tag_array.push(gender_value);

	input_tag_array.forEach((e) => {
		console.log(e);
	});

	for (const iterator of input_tag_array) {
		if (iterator == "") {
			error_teg.innerText = "all field is requreid";
			back = false;
			return back;
		} else {
			error_teg.innerText = "";
		}
	}

	if ((back = true)) {
		let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
		let email_check = input_tag_array[2];
		if (regex.test(email_check)) {
			error_teg.innerText = "";
		} else {
			error_teg.innerText += "email is in unvalid";
			back = false;
			return back;
		}
	}

	if ((back = true)) {
		if (input_tag_array[4] == input_tag_array[5]) {
			error_teg.innerText = "";
		} else {
			error_teg.innerText += `password in not match`;
			back = false;
			return back;
		}
	}

	if ((back = true)) {
		var tbody_tr = document.createElement("tr");
		
		for (const iterator of input_tag_array) {
			var tbody_tr_td = document.createElement("td")
			tbody_tr_td.innerText = iterator;
			tbody_tr.appendChild(tbody_tr_td)
		}
		var tbody_element = document.getElementById("tbody");
		tbody_element.appendChild(tbody_tr);
	}

	return back;
}
