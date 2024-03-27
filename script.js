function lable_create(tagname, attr1, attrval, content) {
  var ele = document.createElement(tagname);
  ele.setAttribute(attr1, attrval);
  ele.innerHTML = content;
  return ele;
}

function break_create() {
  var break_ele = document.createElement("br");
  return break_ele;
}

function input_create(tagname, attr1, attrval, idname) {
  var input_ele = document.createElement(tagname);
  input_ele.setAttribute(attr1, attrval);
  input_ele.id = idname;
  return input_ele;
}

var first_name = lable_create("lable", "for", "fname", "First Name");
let lable_break = break_create();
let input_fname = input_create("input", "type", "first_name", "fname");
let input_break = break_create();

var last_name = lable_create("lable", "for", "fname", "Last Name");
let lname_break = break_create();
let input_lname = input_create("input", "type", "first_name", "fname");
let lname_break1 = break_create();

var email = lable_create("lable", "for", "email", "Email");
let email_break = break_create();
let input_email = input_create("input", "type", "email", "email");
let email_break1 = break_create();

var pass = lable_create("lable", "for", "pass", "Password");
let pass_break = break_create();
let input_pass = input_create("input", "type", "pass", "pass");
let pass_break1 = break_create();

var add = lable_create("lable", "for", "add", "Address");
let add_break = break_create();
let input_add = input_create("input", "type", "add", "add");
let add_break1 = break_create();

document.body.append(
  first_name,
  lable_break,
  input_fname,
  input_break,
  last_name,
  lname_break,
  input_lname,
  lname_break1,
  email,
  email_break,
  input_email,
  email_break1,
  pass,
  pass_break,
  input_pass,
  pass_break1,
  add,
  add_break,
  input_add,
  add_break1
);
