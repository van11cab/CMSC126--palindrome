function check(){
				var inputstr1 = document.getElementById("form1").value;
				var inputstr = inputstr1.toUpperCase();

				var inputarray = [];
				var temp, temp2;
				for(var i = 0; i < inputstr.length; i++ ){
					temp2 = inputstr.charCodeAt(i);
					if(temp2 >= 65 && temp2 <= 90 || temp2 >= 48 && temp2 <= 57){
						temp = inputstr.slice(i, i + 1);
						inputarray.push(temp);
						}
				}

				var palindrome = [];
				var palindrome = inputarray.reverse();
				
				var j = inputarray.length-1;
				var x=0;
				for(var i = 0; i < inputarray.length; i ++, j--){
						if(palindrome[j] != inputarray[i]){
							x = 1;
						}
				}

				if(x == 0){document.getElementById("form2").innerHTML = "\"" + inputstr1 + "\" is a Palindrome";}
				else {document.getElementById("form2").innerHTML = "\"" + inputstr1 + "\" is not a Palindrome.";}
			}