/* 1-var x= +prompt("enter number");
if(x==5){
    console.log(5);


}
else if(x==2){
    console.log(2);
}*/




/* 2-var x= +prompt("enter number");
if(x%3==0 && x%4==0){
    console.log("true");
    
}
else{
    console.log("false");
    
}*/


/*3-var num1= +prompt("enter num1");
var num2 =+prompt("enter num2");
if (num1>num2){
    console.log(num1);
}
else{
    console.log(num2);
}*/



/* 4-var x =+prompt("enter num");

if(x>0){
    console.log("+ve");

}
else if(x<0){
    console.log("-ve");
}*/


/* 5-var num1=+prompt("enter f_name");
var num2=+prompt("enter s_name");
var num3=+prompt("enter T_name ");

var maxNum=num1;
var minNum=num1;

if(num2>maxNum){
    maxNum=num2;
}

else if(num3>maxNum){
    maxNum>num3
}


if (num2 < minNum) {
    minNum = num2;
  }
  else if (num3 < minNum) {
    minNum = num3;
  }
  console.log(maxNum + " The max  " + minNum + "   The min");*/



  /*6-var num=+prompt("enter integer number");
  if(num %2==0){
    console.log("even")
  }
  else{
    console.log("odd")
  }*/


   /*7- var char= prompt("enter a character");
    if(char=="a" ||char=="e" || char=="i"|| char=="o"|| char=="u"||
        char=="A"|| char=="E" || char=="I"|| char=="O"|| char=="U"){
            console.log("vowel");
            
        }
        else{
            console.log("consonant");
        }*/



/*8-*/  /* var num = +prompt("enter number");
 for(  x= 1 ; x <= num; x++){
    if (x<num){
        console.log(x +"");  
    }
    else{
        console.log(x);
        
    }
    
}*/


/*9-*/ /*var num =+prompt('enter num');*/
/*var result= ""
for(y=1; y<12;y++){
    result += ('number * i');
    if ( 'i '< 12){
        result += "";
    }
    console.log(result);
    */

  /*9-*/  /*var number = Number(prompt("  enter number:"));

  var  result = "";
  for (let x = 1; x <= 12; x++) {
    result += +(number * x); //
    if (x < 12) {
      result += ";";    
    }
  }
  console.log(result);*/






 /*10-*/ /*var number = + prompt("enter a number");
for(x = 1; x <= number ; x ++){
    if (x % 2 === 0){

         console.log(x);
    }

    
}*/

/*12*/ /*var mark1 = +prompt("Enter first mark:");
      var mark2 = +prompt("Enter second mark:");
      var mark3 = +prompt("Enter third mark:");
      var mark4 = +prompt("Enter fourth mark:");
      var mark5 = +prompt("Enter fifth mark:");


     var total= mark1+ mark2+mark3+mark4+mark5;
     var average= total/5;
     var percentage=(total/500)*100;
      console.log("total:"+total);
      console.log("average:"+average);
      console.log("percentage:"+percentage+"%");*/



      /*13-*/ /* var month=+prompt("the month number");
                var days;
                switch (month) {
                    case 1:
                     case 3: 
                     case 5: 
                     case 7:
                      case 8: 
                      case 10: 
                      case 12:
                        days = 31;
                        break;
                      case 4:
                       case 6: 
                       case 9: 
                       case 11:
                        days = 30;
                        break;
                      case 2:
                        days = 28;
                        break;
                }
                   console.log("The month is " + days + " day.");*/

        /*14-  */ /*var mark1 = Number(prompt("enter the first mark:"));
                  var grade1= ("");
                  if(mark1>=90) grade1= "A";
                  else if (mark1>=80)grade1="B";
                  else if (mark1 >=70)grade1="C";
                  else if( mark1>=50)grade1="D";
                  else grade1="F"
                  console.log(`the first mark: ${grade1} ${mark1}%`);



                  var mark2 = Number(prompt("enter the second mark:"));
                  var grade2= ("");
                  if(mark2>=90) grade2= "A";
                  else if (mark2>=80)grade2="B";
                  else if (mark2 >=70)grade2="C";
                  else if( mark2>=50)grade2="D";
                  else grade2="F"
                  console.log(`the second mark:${grade2} ${mark2}%`);


                  var mark3 = Number(prompt("enter the third mark:"));
                  var grade3= ("");
                  if(mark3>=90) grade3= "A";
                  else if (mark3>=80)grade3="B";
                  else if (mark3 >=70)grade3="C";
                  else if( mark3>=50)grade3="D";
                  else grade3="F"
                  console.log(`the third mark: ${grade3}  ${mark3}%`);


 var mark4 = Number(prompt("enter the fourth mark:"));
                  var grade4= ("");
                  if(mark4>=90) grade4= "A";
                  else if (mark4>=80)grade4="B";
                  else if (mark4 >=70)grade4="C";
                  else if( mark4>=50)grade4="D";
                  else grade4="F"
                  console.log(`the fourth mark: ${grade4}  ${mark4}%`);


                  var mark5 = Number(prompt("enter the fifth mark:"));
                  var grade5= ("");
                  if(mark5>=90) grade5= "A";
                  else if (mark5>=80)grade5="B";
                  else if (mark5>=70)grade5="C";
                  else if( mark5>=50)grade5="D";
                  else grade5="F"
                  console.log(`the fifth mark: ${grade5}  ${mark5}%`);*/



                  /*15-*/  /*var month= +prompt("enter the number of days in that month");
                  var days;
                  switch(month){
                    case 1:
                        case 3:
                        case 5:
                        case 7:
                        case 8:
                        case 10:
                        case 12:
                            days = 31;
                            console.log("31");
                            
                            break;
                        case 4:
                        case 6:
                        case 9:
                        case 11:
                            days = 30;
                            console.log("30");
                            
                            break;
                        case 2:
                            days = 28;
                            console.log("28");
                             
                            break;
                          
                  }*/
                 

/*16-*/ /*var char = prompt("enter a character:" );

switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("vowel ");
        break;
    default:
        console.log(" consonant");
} */

                /*17-*/
               /* var num1 = Number(prompt(  'enter the  num1'));
var num2 = Number(prompt("  enter the num2"));

switch (true) {
    case (num1 > num2):
        console.log(`${num1}the max num  `);
        break;
    case (num2 > num1):
        console.log(`${num2}  the max num `);
        break;
    default:
        console.log(" num1 == num2");
}*/


/*18-*/  /*var  number = Number(prompt(" enter integer number :"));

switch (number % 2 === 0) {
    case true:
        console.log("Even ");
        break;
    case false:
        console.log("odd ");
        break;
}*/


/*19-*/ /* var num = Number(prompt(" enter integer number :"));

switch (true) {
    case (num > 0):
        console.log("+ve ");
        break;
    case (num < 0):
        console.log("-ve ");
        break;
    case (num === 0):
        console.log("0 ");
        break;
    default:
        console.log("not a valid num   ");
}*/
   
/*20-*/ /*var num1= +prompt("enter num1");
var num2 =+prompt("enter num2");
 var operator = prompt("enter operator(+, -, *, /):");
 var result;
  switch(operator){
    case('+'):
    result = num1 + num2;
    break;
     case('-'):
     result = num1 - num2;
     break;
     case('*'):
     result = num1 * num2;
     break;
     case('/'):
     result = num1 /num2;
     break;

  }
console.log("result:" + result);*/


/*var container ='';
for(i = 0 ; i < 100 ; i++){
    if(i%2==0)
    container+= "<h3 class='light'>hello</h3>"
   else
   container+= "<h3 class='dark'>hello</h3>"

}
 document.getElementById('demo').innerHTML= container




 var names =["ali","sara","ola","ahmed" ,"anas"];

 names[5]="mahmoud"
  
 for(i = 0 ; i < 6 ; i++){
    console.log(names[i]);
    
 }





var employess=[
    {empName:"ahmed" , phone:"33333333", email:"44444wafaa@.com", salary:"10000"},
    {empName:"anas" , phone:"33333333", email:"44444wafaa@.com", salary:"10000"},
    {empName:"wafaa" , phone:"33333333", email:"44444wafaa@.com", salary:"10000"},
    {empName:"sara" , phone:"33333333", email:"44444wafaa@.com", salary:"10000"},
    {empName:"ali" , phone:"33333333", email:"44444wafaa@.com", salary:"10000"},
    {empName:"ola" , phone:"33333333", email:"44444wafaa@.com", salary:"10000"},
]
var container =""
for(i=0; i<employess.length; i++){

   container += `<div class="col-md-3">
    <div class="border border-1 bg-black">
        <h6>name:${employess[i].empName}</h6>
        <h6>phon:${employess[i].phone}</h6>
        <h6>email:${employess[i].email}</h6>
        <h6>salary:${employess[i].salary}</h6>
    </div>
</div>`

}

document.getElementById("rowData").innerHTML= container*/



var quotes = [
    { quote: "Resentment is like drinking poison and waiting for your enemies to die.", author: "Nelson Mandela" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.", author: "H. Jackson Brown" },
    { quote: "We accept the love we think we deserve.", author: " Stephen Chbosky" },
    { quote: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },

];

for (var i = 0; i < quotes.length; i++) {
    console.log('Quote:', quotes[i].quote);
    console.log('Author:', quotes[i].author);
}



function displayRandomQuote() {
    var randomQuoteIndex = parseInt(Math.random() * quotes.length);
    
    var selectedQuote = quotes[randomQuoteIndex].quote; 
    var selectedAuthor = quotes[randomQuoteIndex].author; 

    document.getElementById("quoteText").innerHTML = '"' + selectedQuote + '"';
    document.getElementById("quoteAuthor").innerHTML = '-' + selectedAuthor+'.';
}

