function calculate_flames(event){
    event.preventdefault();
    var result = document.getElementById('result');
    var name_1 = document.getElementById('name_1').value//.tolower().replace(/\s+/g, '');
    var name_2 = document.getElementById('name_2').value//.tolower().replace(/\s+/g, '');
    result.innerText = "result"+name_1+name_2;
}