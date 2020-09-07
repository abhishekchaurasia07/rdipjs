//TASK1-CALCULATOR FUNCTIONS
function dis(value){
document.querySelector("#result").value+=value;
return "dis";
}
function solve(){
	var x=document.querySelector("#result").value;
	var nu=x.split("");
	if(x[0]=="a" && x[1]=="b" && x[2]=="s"){
			var r="";
			if(x[4]=="-"){
				for(var i=5;i<x.length;i++){
					r+=nu[i];
				}
			document.querySelector("#result").value=r;
			return "r"+"solve";
			}
			else{
				var r="";
				for(var i=4;i<x.length;i++){
					r+=nu[i];
				}
	        document.querySelector("#result").value=r;
	        return "r"+"solve";	
		}
}else if(x[0]=="s" && x[1]=="q" && x[2]=="r"){
			if(x[5]=="-")
			document.querySelector("#result").value="invalid input";
			else{
	        	var r="";
				for(var i=5;i<x.length;i++){
					r+=x[i];	
				}
				var square_root=Number(r)**(0.5)
				document.querySelector("#result").value=square_root;
				return "square_root"+"solve";
		}
	}
	else{
		var y=eval(x);
		document.querySelector("#result").value=y;
		return "y"+"solve";
	}
	
}
function clr(){
	document.querySelector("#result").value="";
	return "true"+"clr";
}

/*js for task-2*/

function checkname(){
	var user=document.querySelector("#username");
	var name=user.value;
	if(!isNaN(name[0])){
		document.querySelector("#error_name").innerHTML="<b style='color:red'>(*Name cannot start with a number)</b>";
		return "false"+"checkname";
	}else{
		document.querySelector("#error_name").innerHTML="";
	}
	return "true"+"checkname";
}
function checknumber(){
	    var phone=document.querySelector("#phone_num");
	    var pho=phone.value;
	    if(pho.length<10){
		document.querySelector("#error_num").innerHTML="<b style='color:red'>(*should contain 10 digits)</b>";
		return "false"+"checknumber";
		}
		for(var i=0 ;i<pho.length;i++){
			if(isNaN(pho[i])){
				document.querySelector("#error_num").innerHTML="<b style='color:red'>(*Phone number cannot contain alphabets or symbols)</b>";
				return "false"+"checknumber";
			}
		}
		document.querySelector("#error_num").innerHTML="";
		return "true"+"checknumber";
}
function checkemail(){
	 var mail=document.querySelector("#email");
	 var mail1=mail.value;
	 var flag=0;
	 for(var i=0 ;i<mail1.length;i++){
		if(mail1[i]=="."){
				flag=1;
				break;
		}
	}
	if(flag==0){	
		document.querySelector("#gmail").innerHTML="<b style='color:red'>(*should contain one . character)</b>";
		return "false"+"checkemail";
	}
	document.querySelector("#gmail").innerHTML="";
	return "true"+"checkemail";
}

function submit1(){
	if(checkemail() && checkname() && checknumber()) {
	document.querySelector("#form_submit").removeAttribute("disabled");
	document.querySelector("#warning").innerHTML="";
	return "true"+"submit";
	}
	else{
		document.querySelector("#warning").innerHTML="<b style='color:red'>please fill all of the above details correctly</b>"
	}
}
 
 /*js for task3*/

function checkPallindrome(){
	var pln=document.querySelector("#pallin").value;
	var rev;
	rev=pln.split("").reverse().join("");
	if(pln==rev){
		alert("string is a pallindrome");
		return "true"+"checkPallindrome";
	}
	alert("string is not a pallindrome");
	return "false"+"checkPallindrome";
}
function checkAnagram(){
	var str1=document.querySelector("#string").value;
	var str2=document.querySelector("#word").value;
	
	 var string1 = str1.toLowerCase().split('').sort().join('').trim();
     var string2 = str2.toLowerCase().split('').sort().join('').trim();

	if(string1 == string2){
		alert("word is an anagram of given string");
		return "true"+"checkAnagram";
	}alert("word is an not an anagram of given string");
	return "false"+"checkAnagram";
}

/*js for task4*/
function whoSurvives(){
	var obj1=document.querySelector("#Object-1").value;
	var obj2=document.querySelector("#Object-2").value;
	var obj1_u=obj1%3;
	var obj2_u=obj2%3;
	var dict={0: "Human", 1: "Cockroach" , 2: "Nuclear Bomb"};
	if(obj1=="" || obj2=="") {
		alert("provide inputs");
	}

	else if(obj1<0 || obj1>1000 || obj2<0 || obj2>1000){
		alert("invalid input, given numbers should range from [0,1000]");
		}
	else if((obj1_u ==0 && obj2_u==1) || (obj1_u ==1 && obj2_u==0)){
		alert("Human survives");
		return "Human"+"whoSurvives";
	}else if((obj1_u==1 && obj2_u==2) || (obj1_u==2 && obj2_u==1)){
		alert("Cockroach survives");
		return "Cockroach"+"whoSurvives";
	}else if((obj1_u==0 && obj2_u==2) || (obj1_u==2 && obj2_u==0)){
		alert("Human dies");
		return "Nuclear bomb"+"whoSurvives";
	}
	else{
		alert("tie");
		return "TIE"+"whoSurvives";
	}
}
    //for a=negative and b is positive
    else if((numop[4]=="+")||(numop[4]=="-")&&(numop[5]==null)||(numop[4]=="/")||(numop[4]=="*")){
        var a=parseInt(numop[1],10);
        var b=parseInt(numop[2],10);
        a=-a;
        if(numop[4]=="+"){
            document.getElementById('displayid').value=addition(a,b);
        }
        else if(numop[4]=="-"){
            document.getElementById('displayid').value=substract(a,b);
        }
        else if(numop[4]=="*"){
            document.getElementById('displayid').value=multiply(a,b);
        }
        else if(numop[4]=="/"){
            document.getElementById('displayid').value=divide(a,b);
        }
    }
    //for a=positive and b negative
    else if((numop[3]=="+-")||(numop[3]=="--")||(numop[3]=="/-")||(numop[3]=="*-")){
        var a=parseInt(numop[0],10);
        var b=parseInt(numop[2],10);
        b=-b;
        if(numop[3]=="+-"){
            document.getElementById('displayid').value=addition(a,b);
        }
        else if(numop[3]=="--"){
            document.getElementById('displayid').value=substract(a,b);
        }
        else if(numop[3]=="*-"){
            document.getElementById('displayid').value=multiply(a,b);
        }
        else if(numop[3]=="/-"){
            document.getElementById('displayid').value=divide(a,b);
        }
    }
    //for both negative
    else if((numop[5]=="+-")||(numop[5]=="--")||(numop[5]=="/-")||(numop[5]=="*-")){
        var a=parseInt(numop[1],10);
        var b=parseInt(numop[3],10);
        a=-a;
        b=-b;
        if(numop[5]=="+-"){
            document.getElementById('displayid').value=addition(a,b);
        }
        else if(numop[5]=="--"){
            document.getElementById('displayid').value=substract(a,b);
        }
        else if(numop[5]=="*-"){
            document.getElementById('displayid').value=multiply(a,b);
        }
        else if(numop[5]=="/-"){
            document.getElementById('displayid').value=divide(a,b);
        }
    }
    else if(numop[4]==" % "){
        var a=parseInt(numop[0],10);
        var b=parseInt(numop[3],10);
        document.getElementById('displayid').value=perc(a,b).toFixed(2);
    }
    else if(ar[0]=="abs"){
        var a=parseInt(ar[1],10);
         document.getElementById('displayid').value=abs(a);
            }
    else{
        var a=parseInt(ar[1],10);
        document.getElementById('displayid').value=sqrt(a);
    }
 }


// FORM VALIDATION FUNCTIONS

function namevalid(name) {
        var patt=/^[A-Z a-z][A-Z a-z 0-9]*$/;
    if (name.value.match(patt)){
        return true;
    }
    else
    {
        alert("In UserName First Character Should Not be Number");
        name.focus();
        return false;
    }

    
}
function numvalid(num){
    var number=/^[0-9]+$/;
    if((num.value.match(number))&&(num.value.length==10)){
        return true;
    }
    else{
        alert("Phone no should contain only numbers and Should Be 10 digits Onlys");
        num.focus();
        return false;
    }

}
function emailvalid(email) {
    var emailv=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(emailv)){
        return true;
    }
    else{
        alert("Invalid email address");
        email.focus();
        return false;
    }
}
function checkcheckboxes(subject1,subject2,subject3){
    if((subject1.checked==false)&&(subject2.checked==false)&&(subject2.checked==false)){
        alert("you didnt check any of the boxes");
        return false;
    }
    else 
    {
        return true;
    }

}
function formvalid(){
    var name=document.getElementById('fname');
    var num=document.getElementById('phoneno');
    var email=document.getElementById('email');
    var subject1=document.getElementById('subject1');
    var subject2=document.getElementById('subject2');
    var subject3=document.getElementById('subject3');
    if((namevalid(name))&&(numvalid(num))&&emailvalid(email)&&checkcheckboxes(subject1,subject2,subject3)){
        return true;
    }
    else{
        return false;
    }
}



//PALINDROME AND ANAGRAM CHECKER FUNCTION

function string_valid(x){
    var patt = "^[a-zA-Z ]+$";
    if(x.value.match(patt)){
    	return true;
    }
    else
    {
    	alert("ONLY ALPHABETS ALLOWED");
    	return false;
    }
}
function pal_check(){
	var task3_str1=document.getElementById('task3_palword');
	
	if(string_valid(task3_str1)){
		var len=task3_str1.value.length;
       for ( var i = 0; i < len-1; i++ ) {
        if (task3_str1.value[i] !== task3_str1.value[len - 1 - i]) {
            document.getElementById('task3_palcheck').innerHTML="THE GIVEN WORD IS NOT A PALINDROME";
            return false;
        }
     }
     document.getElementById('task3_palcheck').innerHTML="THE GIVEN WORD IS A PALINDROME";
     return true;
	}
	else{
		return false;
	}
}

function ana_check(){
	var task3_str1=document.getElementById('task3_anaword1');
	var task3_str2=document.getElementById('task3_anaword2');
	if((string_valid(task3_str1))&&(string_valid(task3_str2))){
		var str1=document.getElementById('task3_anaword1').value.split(' ').join('');
	    var str2=document.getElementById('task3_anaword2').value.split(' ').join('');
	    str1 = str1.replace(/[^\w]/g, '').toLowerCase();
        str2 = str2.replace(/[^\w]/g, '').toLowerCase();
        if((str1.split('').sort().join('')) === (str2.split('').sort().join(''))){
        	document.getElementById('task3_anacheck').innerHTML="THE GIVEN WORD IS A ANAGRAM";
        	return true;
        }
        else{
        	document.getElementById('task3_anacheck').innerHTML="THE GIVEN WORD IS NOT A ANAGRAM";
        	return false;
        }
	}
	else{
		return false;
	}
}

//FUNCTION FOR HUMAN COCKROACH NUCLEAR BOMB GAME

function getrand_input1() {
    document.getElementById('task4_input1').value=Math.floor(Math.random()*1000);
}

function getrand_input2() {
     document.getElementById('task4_input2').value=Math.floor(Math.random()*1000);
}

function get_winner(x,y) {
     if(((x===0)&&(y===1))||((x===1)&&(y===2))||((x===2)&&(y===0))){
        return 1;
     }
     else if(((x===1)&&(y===0))||((x===2)&&(y===1))||((x===0)&&(y===2))){
        return 2;
     }
     else{
        return "tie";
     }
}


function generate_winner(){
    var x=document.getElementById('task4_input1');
    var y=document.getElementById('task4_input2');
    document.getElementById('output1').innerHTML="Object 1 Is  " + x.value;
    document.getElementById('output2').innerHTML="Object 2 Is  " + y.value;
    var map1=x.value%3;
    var map2=y.value%3;
    document.getElementById('after_mapping').innerHTML="AFTER MAPPING:";
    if(map1===0){
        document.getElementById('map1').innerHTML="Object 1 Is HUMAN i.e " + map1;
    }
    else if(map1===1){
        document.getElementById('map1').innerHTML="Object 1 Is COCKROACH i.e " + map1;
    }
    else{
        document.getElementById('map1').innerHTML="Object 1 Is NUCLEAR BOMB i.e " + map1;
    }
    if(map2===0){
        document.getElementById('map2').innerHTML="Object 2 Is HUMAN i.e " + map2;
    }
    else if(map2===1){
        document.getElementById('map2').innerHTML="Object 2 Is COCKROACH i.e " + map2;
    }
    else{
        document.getElementById('map2').innerHTML="Object 2 Is NUCLEAR BOMB i.e " + map2;
    }

    if(get_winner(map1,map2)===1){
        document.getElementById('winner').innerHTML="OBJECT 1 WINS!!!!!!!!";
    }
    else if(get_winner(map1,map2)===2){
        document.getElementById('winner').innerHTML="OBJECT 2 WINS!!!!!!!!";
    }
    else{
        document.getElementById('winner').innerHTML="ITS A TIE!!!!";
    }
    

}