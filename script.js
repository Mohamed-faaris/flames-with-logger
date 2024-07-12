
function no_of_unique_characters(name_1,name_2)
{
    for(var i = 0;i<name_1.length;i++)
    {
        var character = name_1.charAt(i);
        if (name_2.indexOf(character) != -1)
        {
            console.log(i);   
            name_1 = name_1.replace(character,'');
            name_2 = name_2.replace(character,'');
            i--;
        }
    }
    console.log(name_1+name_2+" - infunction");
    return (name_1+name_2).length;
}

function calculate_flames(event)
{
    event.preventDefault();
    var result = document.getElementById('result');
    var name_1 = document.getElementById('name_1').value.toLowerCase().replace(/\s+/g, '');
    var name_2 = document.getElementById('name_2').value.toLowerCase().replace(/\s+/g, '');
    console.log(name_1+name_2+" beforefunction");
    var number = no_of_unique_characters(name_1,name_2);
    console.log(number+" afterfunction");
    result.innerText = "result: "+number.toString();
}
