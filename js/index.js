//1
/* 
var n = window.prompt("Enter a number :");
console.log(n); 
*/


//2
/*
var n = window.prompt("Enter a number :");
if((n%4==0)&&(n%3==0)){
    console.log("yes");
}else{
    console.log("no");
}
*/


//3
/*
var n1 = window.prompt("Enter a number :");
var n2 = window.prompt("Enter a number :");
if(Number(n1)>Number(n2)){
    console.log(n1);
}else{
    console.log(n2);
}
*/


//4
/*
var n = window.prompt("Enter a number :");
if(Number(n)<0){
    console.log("negative");
}else{
    console.log("positive");
}
*/


//5
/*
var maxn = 0;
var minn = 0 ;
for (var i = 0; i < 3; i++) {
    var n = window.prompt("Enter a number :");
    if(i==0){
        maxn , minn = Number(n) ;
    }
    if((maxn<n)&&i!=0){
        maxn=Number(n);
    }
    if((minn>n)&&i!=0){
        minn=Number(n);
    }
}
console.log("max number = " + maxn);
console.log("min number = " + minn);
*/


//6
/*
var n = window.prompt("Enter a number :");
if(n%2==0){
    console.log("even");
}else{
    console.log("odd");
}
*/


//7
/*
var c = window.prompt("Enter a character :");
switch(c){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log("vowel");
        break;
    default:
        console.log("consonant");
}
*/


//8
/*
var s = "1";
var n = window.prompt("Enter a number :");
for (var i = 2; i < Number(n)+1; i++) {
    s = s + "," + i ;
}
console.log(s);
*/


//9
/*
var n = window.prompt("Enter a number :");
var s = " " + n ;
for (var i = 2; i < 13; i++) {
    s = s + " " + (i*n) ;
}
console.log(s);
*/


//10
/*
var s = "";
var n = window.prompt("Enter a number :");
for (var i = 2; i < Number(n)+1; i+=2) {
    if(i==2){
        s=s+2;
    }else{
        s = s + "," + i ;
    }
}
console.log(s);
*/


//11
/*
var b = window.prompt("Enter the base :");
var p = window.prompt("Enter the power :");
var s = 1 * b;
for (var i = 1; i < Number(p); i++) {
    s = s * b;
}
console.log(s);
*/


//12
/*
var t = 0;
for (var i = 1; i < 6; i++) {
    var n = window.prompt("Enter the mark of subject"+ i +" :");
    t+=Number(n);
}
console.log("total marks : " + t +"\naverage marks : " + (t/5) + "\npercentage : " + (t/5) );
*/


//13
/*
var c = window.prompt("Enter month number :");
switch(c){
    case '1':
    case '3':
    case '5':
    case '7':
    case '8':
    case '10':
    case '12':
        console.log("31");
        break;
    case '4':
    case '6':
    case '9':
    case '11':
        console.log("30");
        break;
    case '2':
        console.log(28 + "or" + 29)
        break;
    default:
        console.log("not month number");
}
*/


//14
/*
for (var i = 1; i < 6; i++) {
    var m = window.prompt("Enter the mark of subject"+ i +" :");
    if(Number(m)>=90){
        console.log("Grad A")
    }
    else if(Number(m)>=80){
        console.log("Grad B")
    }
    else if(Number(m)>=70){
        console.log("Grad C")
    }
    else if(Number(m)>=60){
        console.log("Grad D")
    }
    else if(Number(m)>=40){
        console.log("Grad E")
    }else{
        console.log("Grade F")
    }
}
*/


//15
/*
var c = window.prompt("Enter month number :");
switch(c){
    case '1':
    case '3':
    case '5':
    case '7':
    case '8':
    case '10':
    case '12':
        console.log("31");
        break;
    case '4':
    case '6':
    case '9':
    case '11':
        console.log("30");
        break;
    case '2':
        console.log(28 + "or" + 29)
        break;
    default:
        console.log("not month number");
}
*/


//16
/*
var c = window.prompt("Enter a character :");
switch(c){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log("vowel");
        break;
    default:
        console.log("consonant");
}
*/


//17
/*
var a = window.prompt("Enter the first Number :");
var b = window.prompt("Enter the second Number :");
switch(Number(a) > Number(b)){
    case true:
        console.log("Max is "+a);
        break;
    default:
        console.log("Max is "+b);
}
*/


//18
/*
var n = window.prompt("Enter a number :");
switch(n%2){
    case 0 :
        console.log("even");
        break;
    default :
    console.log("odd");
}
*/


//19
/*
var n = window.prompt("Enter a number :");
switch(true){
    case Number(n)<0 :
        console.log("negative");
        break;
    case Number(n)==0 :
        console.log("zero");
        break;
    default:
        console.log("positive");
}
*/


//20
/*
var o = window.prompt("Enter the operatiion :\n1for+\n2for*\n3for-\n4for/");
var a = window.prompt("Enter number a :");
var b = window.prompt("Enter number b :");
switch(Number(o)){
    case 1:
        console.log(Number(a)+Number(b));
        break;
    case 2:
        console.log(a*b);
        break;
    case 3:
        console.log(a-b);
        break;
    case 4:
        while(b==0){
            b=window.prompt("can not divide by zero renter the value for b :")
        }
        console.log(a/b);
        break;
}
*/