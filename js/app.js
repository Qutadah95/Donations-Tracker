'use strict';
Donation.allDonator = [];
let array=[];
function Donation(name, amount, age) {
    this.name = name;
    this.amount = amount;
    this.age = age;
    Donation.allDonator.push(this);

}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let form = document.getElementById('form');
form.addEventListener('submit', submitQuery);
function submitQuery(event) {
    event.preventDefault();
    location.reload();
    let name = event.target.DonatorName.value;
    let amount = event.target.DonationAmount.value;
    let age = random(20, 60);
    new Donation(name, amount, age);
    setItem();
    list();
 
    
    
}

Donation.prototype.render = function () {
    let table = document.getElementById('table');
    let trElemant = document.createElement('tr');
    table.appendChild(trElemant);
    let tdElemant1 = document.createElement('td');
    trElemant.appendChild(tdElemant1);
    tdElemant1.textContent = array[0].name;
    let tdElemant2 = document.createElement('td');
    trElemant.appendChild(tdElemant2);
    tdElemant2.textContent = array[0].amount;
    let tdElemant3 = document.createElement('td');
    trElemant.appendChild(tdElemant3);
    tdElemant3.textContent = array[0].age;


}
function list(){
    
    let table = document.getElementById('table');
    table.textContent='';
    let tablehedar=document.createElement('tr');
    table.appendChild(tablehedar);
    let tdhedar=document.createElement('td');
    tablehedar.appendChild(tdhedar);
    tdhedar.textContent='Donator Name';
    let tdhedar1=document.createElement('td');
    tablehedar.appendChild(tdhedar1);
    tdhedar1.textContent='Donation Amount';
    let tdhedar2=document.createElement('td');
    tablehedar.appendChild(tdhedar2);
    tdhedar2.textContent='age';

   for (let j = 0; j < array.length; j++) {
    let trElemant = document.createElement('tr');
    table.appendChild(trElemant);
    let tdElemant1 = document.createElement('td');
    trElemant.appendChild(tdElemant1);
    tdElemant1.textContent = array[j].name;
    let tdElemant2 = document.createElement('td');
    trElemant.appendChild(tdElemant2);
    tdElemant2.textContent = array[j].amount;
    let tdElemant3 = document.createElement('td');
    trElemant.appendChild(tdElemant3);
    tdElemant3.textContent = array[j].age;
}
       
   }
        

function setItem(){
    localStorage.setItem('Donator',JSON.stringify(Donation.allDonator));
    
    }
    function getitem(){
    
        let item=JSON.parse(localStorage.getItem('Donator'));
        if (item !==null) {
            for (let i = 0; i < item.length; i++) {
                let newDonation=new Donation(item[i].name,item[i].amount,item[i].age);
                array.push(newDonation);
                // newDonation.render();  
            }
           
        }
        list();
        
    
    }

    let clear=document.getElementById('div');
    clear.addEventListener('submit',clearfun);
    function clearfun(e){
        localStorage.clear();
        location.reload();

    }

getitem();
console.log(array);

