var l1= label("label","for","firstname","firstname");
var b1= breaker("br");
var i1 = inputele("input","type","firstname","id","firstname");
var b2 = breaker("br");

var l2= label("label","for","middlename","middlename");
var b3= breaker("br");
var i2 = inputele("input","type","middlename","id","middlename");
var b4 = breaker("br");


var l3= label("label","for","lastname","lastname");
var b5= breaker("br");
var i3 = inputele("input","type","lastname","id","lastname");
var b6 = breaker("br");

var l4= label("label","for","email","Email");
var b7= breaker("br");
var i4 = inputele("input","type","email","id","email");
var b8 = breaker("br"); 

var l5= label("label","for","contact","contact");
var b9= breaker("br");
var i5 = inputele("input","type","contact","id","contact");
var b10 = breaker("br"); 

document.body.append(l1,b1,i1,b2,l2,b3,i2,b4,l3,b5,i3,b6,l4,b7,i4,b8,l5,b9,i5,b10);











function label(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return(ele);
}

function inputele(tagname,attrname,attrvalue,attrname1,attrvalue1) {
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return(ele);
}

function breaker(element) {
    var ele = document.createElement(element);
   
    return (ele);
}

