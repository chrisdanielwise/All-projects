let first_btn = document.getElementById('first_btn');
let main_form = document.getElementById('main_form');
let answer = document.getElementById('answer');
let question = document.getElementById('question');
let submit = document.getElementById('submit');
let output_1 = document.getElementById('output_1');
let output_2 = document.getElementById('output_2');
var message = document.getElementById('message');
var two = document.getElementById('two')
let second_btn = document.getElementById('second_btn')
first_btn.addEventListener('click',function(e){
   
    main_form.style.display = 'flex';
    e.preventDefault
})

function fun1(){
    output_1.innerHTML = question.value ;
    output_2.innerHTML = answer.value ; 
    two.style.display = 'block' 
    main_form.style.display = 'none'
}
submit.addEventListener('click', fun1)
second_btn.addEventListener('click',function(){
    if(output_2.style.display = 'none'){
        output_2.style.display = 'block'
    }

})