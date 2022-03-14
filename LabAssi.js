const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const ulist = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
// const RemoveTodo = document.getElementById("removebtn");


function newTodo() {
  var itemAdded = document.querySelectorAll('.ToDoitem');

  /*Add Logic for creating a new Todo Item. */
  var crtLi = document.createElement('li');
  crtLi.className = 'ToDoitem';

  var divTodo = document.createElement('div');
  divTodo.className = "div-addTodo";

  ulist.parentNode.appendChild(divTodo);
  var TextBox = document.createElement("INPUT");
  TextBox.setAttribute("type", "text");


// Adding checkbox to temporary div
  divTodo.appendChild(TextBox);
  var btn = document.createElement("button");
  btn.innerHTML = "Submmit Todo";
  divTodo.appendChild(btn);

  // Submiting Todo in Div
  btn.onclick = () => {
    console.log(TextBox.value);
    
    crtLi.appendChild(document.createTextNode(TextBox.value));
    divTodo.parentNode.removeChild(divTodo);
  }
  // Creating check box
  var chkbx = document.createElement("INPUT");
  chkbx.className="check_box";
  chkbx.setAttribute("type", "checkbox");
  crtLi.appendChild(chkbx);

  // Adding everything of an item in a list!
  ulist.appendChild(crtLi);

  let arr = Array.from(itemAdded);
  itemCountSpan.innerHTML = arr.length + 1;
  uncheckedCountSpan.innerHTML = getCheckedCount();

}

// ##################*********** Remove Function **************#############
let count = 1;
function removeTodo() {
  if( count % 2 != 0)
   {   count=2;
      /*Add Logic for removing an existing TODO Item */
        var itemCount = document.querySelectorAll('.ToDoitem');
        var array = Array.from(itemCount);

        array.forEach(element => {
          var closebtn = document.createElement('button');
          closebtn.className = "remove_item";
          closebtn.textContent = "X";
          element.appendChild(closebtn);
        });


        var btnCount = document.querySelectorAll('.remove_item');
        var arr = Array.from(btnCount);

// assiging function to each close button for deletion
        arr.forEach((item) => {
          
          item.onclick = function (x) {
            var li = x.target.parentNode;
            ulist.removeChild(li);
            console.log("Delete Button Pressed");
            cal_cont();
          };
        uncheckedCountSpan.innerHTML = getCheckedCount();

        });

        // list.innerHTML = " ";
        // itemCountSpan.innerHTML = "";
      
      function cal_cont(){
        var countitm = document.querySelectorAll('.ToDoitem');
        var Arr = Array.from(countitm);
        itemCountSpan.innerHTML = Arr.length;

      }
    }
    else if(count % 2 == 0){
      console.log("entered in else ");
      var Clist = document.querySelectorAll('.ToDoitem');
      var ArrClist = Array.from(Clist);
      ArrClist.map((item)=>{
         var li = document.querySelector('.remove_item');
         item.removeChild(li);
      });
      console.log("outered in else ");

      count=1;
    }
}
function getCheckedCount(){
const all_check_chkBox = document.querySelectorAll('check_box');

  let cnt = 0;
  let arr = Array.from(all_check_chkBox);
  arr.forEach((item)=>{if(item.value == false){
    cnt+=1;
  }})
  // cnt = arr.length - uncheck.length;
  console.log(cnt);
  return cnt;
}
