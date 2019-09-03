
var knowHowArr = [];
knowHowArr.push('Programmera', 'Spela gitarr', 'Spela PS4', 'Fiska', 'Leka med barn');

var block1 = document.getElementById('firstBlock');
var newHTML = '<div id="secondBlock"><p>Det är kul att:</p></div>';
block1.insertAdjacentHTML('afterend', newHTML);

var list = document.createElement('ul');

for (i=0; i<knowHowArr.length; i++) {

        var item = document.createElement('li');
        item.innerText = knowHowArr[i];
        list.appendChild(item);

}

document.getElementById("secondBlock").appendChild(list);