var arr = []

var btn1  = document.getElementById('btn1')
btn1.addEventListener('click', add1)

var btn2  = document.getElementById('btn2')
btn2.addEventListener('click', add2)

var btn3  = document.getElementById('btn3')
btn3.addEventListener('click', add3)

var btn4  = document.getElementById('btn4')
btn4.addEventListener('click', add4)

var btn5  = document.getElementById('btn5')
btn5.addEventListener('click', add5)

var btn6  = document.getElementById('btn6')
btn6.addEventListener('click', add6)

var btn7  = document.getElementById('btn7')
btn7.addEventListener('click', add7)

var btn8  = document.getElementById('btn8')
btn8.addEventListener('click', add8)

var btn9  = document.getElementById('btn9')
btn9.addEventListener('click', add9)

function add1(){
    var i1 = document.getElementById('i1').value
    console.log(i1);
    var item = document.createElement('div')
var items = document.getElementById('items')
item.innerHTML = i1 +' ' +  '&#8377  99'
arr.push(99)
console.log(arr);
items.append(item)
total()

}

function add2(){
    var i2 = document.getElementById('i2').value
    console.log(i2);
    var item = document.createElement('div')
var items = document.getElementById('items')
item.innerHTML = i2 +' ' +  '&#8377  199'
arr.push(199)
console.log(arr);
items.append(item)
total()
}

function add3(){
    var i3 = document.getElementById('i3').value
    console.log(i3);
    var item = document.createElement('div')
var items = document.getElementById('items')
item.innerHTML = i3 +' ' +  '&#8377  299'
arr.push(299)
console.log(arr);
items.append(item)
total()
}


function add4(){
    var i4 = document.getElementById('i4').value
    console.log(i4);
    var item = document.createElement('div')
var items = document.getElementById('items')
item.innerHTML = i4 +' ' +  '&#8377  199'
arr.push(199)
console.log(arr);
items.append(item)
total()
}

function add5(){
    var i5 = document.getElementById('i5').value
    console.log(i5);
    var item = document.createElement('div')
var items = document.getElementById('items')
item.innerHTML = i5 +' ' +  '&#8377  199'
arr.push(199)
console.log(arr);
items.append(item)
total()
}

function add6(){
    var i6 = document.getElementById('i6').value
    console.log(i6);
    var item = document.createElement('div')
var items = document.getElementById('items')
item.innerHTML = i6 +' ' +  '&#8377  99'
arr.push(99)
console.log(arr);
items.append(item)
total()
}

function add7(){
    var i7 = document.getElementById('i7').value
    console.log(i7);
    var item = document.createElement('div')
var items = document.getElementById('items')
item.innerHTML = i7 +' ' +  '&#8377  99'
arr.push(99)
console.log(arr);
items.append(item)
total()
}

function add8(){
    var i8 = document.getElementById('i8').value
    console.log(i8);
    var item = document.createElement('div')
var items = document.getElementById('items')
item.innerHTML = i8 +' ' +  '&#8377  199'
arr.push(199)
console.log(arr);
items.append(item)
total()
}

function add9(){
    var i9 = document.getElementById('i9').value
    console.log(i9);
    var item = document.createElement('div')
var items = document.getElementById('items')
item.innerHTML = i9 +' ' +  '&#8377  299'
arr.push(299)
console.log(arr);
items.append(item)
total()
}


// add1()

function total(){
    var count =  0 
    for(var i = 0 ; i < arr.length ; i++){
      count  = count + arr[i]
      console.log(count);
    }
    
    var total  = document.getElementById('total')
    total.innerHTML ='Order Now ' + '&#8377' + " "  + count + ' ' 
    total.setAttribute = 'class' ,'h4'

    console.log(arr);

    // total.addEventListener('click',order)

    // function order(){
    //     alert('fvgfbrhk')
    // }
}

console.log(arr);

