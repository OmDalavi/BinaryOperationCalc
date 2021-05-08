alert("Hello There , This is a Sample Calculator which can only perform operations on just 2 numbers at a time like 2+3=5. it cant do 2+3+5=10 ");
alert("Thank You for Using :) ");



var i;

for(i=0;i<16;i++)
{
	
	document.querySelectorAll("button")[i].addEventListener("click",myFunc);
	
}
var a=0;
var b=0;
var operator;

function myFunc(){

	var char=this.textContent;
	switch(char){
		case '7':
			a*=10;
			a+=7;
			document.querySelector("#answer").textContent=a;
			break;
		case '8':
			a*=10;
			a+=8;
			document.querySelector("#answer").textContent=a;
			break;
		case '9':
			a*=10;
			a+=9;
			document.querySelector("#answer").textContent=a;
			break;
		case '4':
			a*=10;
			a+=4;
			document.querySelector("#answer").textContent=a;
			break;
		case '5':
			a*=10;
			a+=5;
			document.querySelector("#answer").textContent=a;
			break;
		case '6':
			a*=10;
			a+=6;
			document.querySelector("#answer").textContent=a;
			break;
		case '1':
			a*=10;
			a+=1;
			document.querySelector("#answer").textContent=a;
			break;
		case '2':
			a*=10;
			a+=2;
			document.querySelector("#answer").textContent=a;
			break;
		case '3':
			a*=10;
			a+=3;
			document.querySelector("#answer").textContent=a;
			break;
		case '+':
			operator='+';
			b=a;
			a=0;
			document.querySelector("#answer").textContent='+';
			break;
	    case '-':
			operator='-';
			b=a;
			a=0;
			document.querySelector("#answer").textContent='-';
			break;
		case '/':
			operator='/';
			b=a;
			a=0;
			document.querySelector("#answer").textContent='/';
			break;
		case 'X':
			operator='X';
			b=a;
			a=0;
			document.querySelector("#answer").textContent='X';
			break;
		case 'C':
			document.querySelector("#answer").textContent=0;
			break;
		case '=':
			var answer=result(a,operator,b);
			document.querySelector("#answer").textContent=answer;
			a=0;
			b=0;
			break;
		case '0':
			a*=10;
			a+=0;
			break;
			document.querySelector("#answer").textContent=a;

	}
	
	
}

function result(a,operator,b){
	switch(operator){
		case '+':
			return a+b ;
			break;
		case '-':
			return b-a ;
			break;
		case 'X':
			return a*b ;
			break;
		case '/':
			return b/a ;
			break;
	}
}