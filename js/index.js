d= document.getElementsByTagName("input")
t = 0
for (i =0; i<d.length;i++){
    if (d[i].name==''){
        continue
    }else{
        t++
    }
}

var y = new Array();
for(j=0;j<t;j++){
    y.push(d[j].name)
    document.querySelector(".trbat").innerHTML += `<th>${d[j].name}</th>`
}

function data() {
	var back = true;
	var x = new Array();
    for(k=0;k<t;k++){
        x.push(d[k].value)
    }
    
    

	if (
		x[0] == "" ||
		x[1] == "" ||
		x[2] == "" ||
		x[4] == "" ||
		x[5] == "" ||
		x[6] == ""
	) {
		document.getElementById("demo").innerText = "all field is requreid";
		back = false;

		return back;
	} else {
		document.getElementById("demo").innerText = "";
		back = true;
	}

	if ((back = true)) {
		let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
		let s = x[2];
		if (regex.test(s)) {
			document.getElementById("demo").innerText = "";

			back = true;
		} else {
			document.getElementById("demo").innerText += "email is in unvalid";
			back = false;
			return back;
		}
	} else {
		back = false;
		return back;
	}

	if (back = true) {
		if (x[4] == x[5]) {
			document.getElementById("demo").innerText = "";

			back = true;
		} else {
			document.getElementById("demo").innerText += `password in not match`;
			back = false;
			return back;
		}
	} else {
		back = false;
		return back;
	}

	if ((back = true)) {
		var l = document.createElement("tr");

		for (i = 0; i < x.length; i++) {
			l.innerHTML += `<td>${x[i]}</td>`;
		}
		console.log(l);

		var a = document.getElementById("tbody");
		a.appendChild(l);
	} else {
		back = false;
		return back;
	}

	console.log(x);
	console.log(y);
	return back;
}
