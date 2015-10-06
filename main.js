// DECLARING VARIABLES FOR FUNCTIONS
var add, sub, div, mul;
// DECLARING VARIABLE FOR COMPUTED ANSWER
var val clr_scr;

//DECLARING FUNCTION VARIABLES FOR EACH BUTTON
var n0,n1,n2,n3,n4,n5,n6,n7,n8,n9, num_clicked;


//DECLARING VARIABLE TO GRAB BUTTON CLICKS FROM HTML
var but_click = document.querySelector(".num");
var num0 = document.querySelector('#zero');
var num1 = document.querySelector('#one');
var num2 = document.querySelector('#two');
var num3 = document.querySelector('#three');
var num4 = document.querySelector('#four');
var num5 = document.querySelector('#five');
var num6 = document.querySelector('#six');
var num7 = document.querySelector('#seven');
var num8 = document.querySelector('#eight');
var num9 = document.querySelector('#nine');


//DECLARING VARIABLE TO GRAB OPERATOR
var opr_add = document.querySelector('#additon');
var opr_sub = document.querySelector('#subtraction');
var opr_div = document.querySelector('#division');
var opr_ multi = document.querySelector('#multi');
var clear_button = document.querySelector('#clear');


//DECLARE VARIABLE TO GRAB THE INPUT TEXT BOX
var reply = document.querySelector('#ans');



//DECLARING VARIABLES TO ASSIGN THE 2 NUMS ON EITHER SIDE OF OPERATORS 
// EITHER USING SUBSTRING OR SLICE FUNCTION as its a string variable
var entered_num1;
var entered_num1;

//FUNCTION TO CLEAR INFO
clr_scr=function(){
  reply.value = null;
}

//FUNCTIONS CREATED FOR MATH OPERATIONS
add = function(){
  //GETTING THE VALUE FROM THE STRING NUMBER(NUM.VALUE)
  val = Number(entered_num1.value) + Number(entered_num2.value);
  
  // update answer to test content to = value
  reply.value = val;
};

// SIMILARLY DOING FOR THE OTHER OPERATORS

sub = function(){
  val = Number(entered_num1.value) - Number(entered_num2.value);
   reply.value = val;
};


div = function(){
  val = Number(entered_num1.value) / Number(entered_num2.value);
   reply.value= val;
};

mul = function(){
  val = Number(entered_num1.value) * Number(entered_num2.value);
  reply.value = val;
};


//WHEN THE OPERATOR BUTTONS ARE CLICKED
opr_add.addEventListener('click',add);
opr_sub.addEventListener('click',sub);
opr_div.addEventListener('click',div);
opr_multi.addEventListener('click',mul);

// EXTRACTING VALUES OF EACH BUTTON CLICKED
clear_button.addEventListener('click',clr_scr);

num0.addEventListener('click',n0);
num1.addEventListener('click',n1);
num2.addEventListener('click',n2);
num3.addEventListener('click',n3);
num4.addEventListener('click',n4);
num5.addEventListener('click',n5);
num6.addEventListener('click',n6);
num7.addEventListener('click',n7);
num8.addEventListener('click',n8);
num9.addEventListener('click',n9);


//CREATING BUTTON FUNCTIONS
n0 =function(){
  num_clicked=num0.textContent;
  reply.value=String(num_clicked);
}
n1 =function(){
  num_clicked=num1.textContent;
  reply.value=num_clicked;
}
n2 =function(){
  num_clicked =num2.textContent;
  reply.value =num_clicked;
}
n3 =function(){
  num_clicked =num3.textContent;
  reply.value =num_clicked;
}
n4 =function(){
  num_clicked =num4.textContent;
  reply.value =num_clicked;
}
n5 =function(){
  num_clicked =num5.textContent;
  reply.value =num_clicked;
}
n6 =function(){
  num_clicked =num6.textContent;
  reply.value =num_clicked;
}
n7 =function(){
  num_clicked =num7.textContent;
  reply.value =num_clicked;
}
n8 =function(){
  num_clicked=num8.textContent;
  reply.value =num_clicked;
}
n9 =function(){
  num_clicked=num9.textContent;
  reply.value =num_clicked;
}






