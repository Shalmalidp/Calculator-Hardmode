// DECLARING VARIABLES FOR FUNCTIONS
var add, sub, div, mul;
// DECLARING VARIABLE FOR COMPUTED ANSWER
var val;
//DECLARING VARIABLE TO GRAB BUTTON CLICKS FROM HTML

var num1=Document.querySelector('#zero');
var num2=Document.querySelector('#one');
var num3=Document.querySelector('#two');
var num4=Document.querySelector('#three');
var num5=Document.querySelector('#four');
var num6=Document.querySelector('#five');
var num7=Document.querySelector('#six');
var num8=Document.querySelector('#seven');
var num9=Document.querySelector('#eight');
var num0=Document.querySelector('#nine');

//DECLARING VARIABLE TO GRAB OPERATOR
var opr_add=Document.querySelector('#additon');
var opr_sub=Document.querySelector('#subtraction');
var opr_div=Document.querySelector('#division');
var opr_ multi=Document.querySelector('#multi');


//DECLARE VARIABLE TO GRAB THE INPUT TEXT BOX
var reply=Document.querySelector('#ans');



//DECLARING VARIABLES TO ASSIGN THE 2 NUMS ON EITHER SIDE OF OPERATORS 
// EITHER USING SUBSTRING OR SLICE FUNCTION as its a string variable
var entered_num1 =;
var entered_num1 =;

//FUNCTIONS CREATED FOR MATH OPERATIONS
add = function(){
  //GETTING THE VALUE FROM THE STRING NUMBER(NUM.VALUE)
  val = Number(entered_num1.value) + Number(entered_num2.value);
  
  // update answer to test content to = value
  reply.textContent = val;
};

// SIMILARLY DOING FOR THE OTHER OPERATORS

sub = function(){
  val = Number(entered_num1.value) - Number(entered_num2.value);
   reply.textContent = val;
};


div = function(){
  val = Number(entered_num1.value) / Number(entered_num2.value);
   reply.textContent = val;
};

mul = function(){
  val = Number(entered_num1.value) * Number(entered_num2.value);
  reply.textContent = val;
};

//WHEN THE OPERATOR BUTTONS ARE CLICKED
opr_add.addEventListener('click',add);
opr_sub.addEventListener('click',sub);
opr_div.addEventListener('click',div);
opr_multi.addEventListener('click',mul);

// EXTRACTING VALUES OF EACH BUTTON CLICKED



