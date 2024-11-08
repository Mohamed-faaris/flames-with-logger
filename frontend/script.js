
function remove_character_at_index(str, index) {
    if (index < 0 || index >= str.length) {
        return str;
    }
    return str.slice(0, index) + str.slice(index + 1);
}

function no_of_unique_characters(name_1,name_2)
{
    for(var i = 0;i<name_1.length;i++)
    {
        var character = name_1.charAt(i);
        if (name_2.indexOf(character) != -1)
        {   
            name_1 = name_1.replace(character,'');
            name_2 = name_2.replace(character,'');
            i--;
        }
    }
    console.log(name_1+'  '+name_2+" - infunction");
    return (name_1+name_2).length;
}

function calculate_flames_by_number(str,number,start)
{
    console.log(str,number,start);
    if(str.length<2)
    {
        return str;
    }
    var index = (number+start-1)%str.length;
    str = remove_character_at_index(str,index);
    start = (index)%str.length;
    return calculate_flames_by_number(str,number,start);
}

function findRelation(character){
    if(character == "f")
        {
            return "friends";
        }

    else if(character == "l")
        {
            return "love";
        }

    else if(character == "a")
        {
            return "affection";
        }
        
    else if(character == "m")
        {
            return "mariage";
        }
        
    else if(character == "e")
        {
            return "enemy";
        }
    
    else if(character == "s")
        {
            return "sibling";
        }
    
    else
    {
        console.log("relation: ",character);
        return "invalid";
    }
}

function logger(name1,name2,relation){
    const data = {
        'name1': name1,
        'name2': name2,
        'relation': relation
      };
      
      fetch('http://localhost:3000/store', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (!response.ok) {
            console.log(`HTTP error! Status: ${response.status}`);
          }
          return response.json(); 
        })
        .then(data => {
          console.log('Response:', data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      
}

var oldName_1 = '';
var oldName_2 = '';

function calculate_flames(event)
{
    event.preventDefault();
    var result = document.getElementById('result');
    var name_1 = document.getElementById('name_1').value.toLowerCase().replace(/\s+/g, '');
    var name_2 = document.getElementById('name_2').value.toLowerCase().replace(/\s+/g, '');
    var number = no_of_unique_characters(name_1,name_2);
    var relation = findRelation(calculate_flames_by_number("flames",number,0))
    result.innerText = "result: "+ relation;
    if((oldName_1!=name_1 || oldName_2 != name_2) && name_1 != name_2){
        console.log(oldName_1,",",oldName_2,",",name_1,",",name_2)
        logger(name_1,name_2,relation)
        oldName_1 = name_1
        oldName_2 = name_2
        console.log(oldName_1,",",oldName_2,",",name_1,",",name_2)
    }
}
