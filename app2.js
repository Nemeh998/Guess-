'use strict';
let form=document.getElementById('form');
let submit=document.getElementById('submit');
submit.addEventListener('click',add)
function add(event){
  event.preventDefault();
  let name1=form.name.value;
  //for speas 
let deletespas=name1.trim ()
  console.log(name1)
  console.log(deletespas)
  renderUsers(deletespas);

}

    async function getgenderize(userNum) {
      let url = `https://api.genderize.io/?name=${userNum}`;
      try {
          let res = await fetch(url);
          return await res.json();
      } catch (error) {
          console.log(error);
      }
  }
 
  //===================================
  async function getUsers(userNum) {
    let url = `https://api.nationalize.io/?name=${userNum}`;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


//========================================
async function getrestcountries(userNum) {
  let url = `https://restcountries.com/v3.1/alpha?codes=${userNum}`;
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

//===============================
async function getagify(userNum) {
  let url = `https://api.agify.io/?name=${userNum}`;
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}


function localDAta(Gender,name1,flags,age,country){
  this.name1=name1;
  this.Gender=Gender;
  this.age=age;
  this.flags=flags;
  this.country=country;
  localDAta.all.push(this);
  
  }
  
   localDAta.all=[];
 async function renderUsers(userNum) {
  console.log(userNum)
let users = await getUsers(userNum);
 
let users1 = await getgenderize(userNum);
let users3 = await getagify(userNum);
let users2 = await getrestcountries(users.country[0].country_id);
console.log(users)
console.log(users.country[0].country_id)
console.log(users.name)
console.log(users1.gender,"Gender")
console.log(users2[0].flags,'البلد')
console.log(users3.age,'age')
 let name=users.name;
 let Gender=users1.gender;
 let age=users3.age;
 let flags=users2[0].flags;
 let country=users.country[0].country_id;
new localDAta(Gender,name,flags,age,country)
localStorage.setItem('data',JSON.stringify(localDAta.all));

render(Gender,name,flags,age,country)
}

let contener=document.getElementById('contener')
let said=document.getElementById('said')
function render(Genderdata,namedata,flagsdata,agedata,countrydata){
  console.log(countrydata)
 //================
  const ul=document.createElement('ul');
  contener.appendChild(ul)
//========================
const age=document.createElement('li')
const agetext=document.createTextNode(agedata)
age.appendChild(agetext)
ul.appendChild(age)
// ======================
const Gender=document.createElement('li')
const Gendertext=document.createTextNode(Genderdata)
Gender.appendChild(Gendertext)
ul.appendChild(Gender)
// ======================
const name=document.createElement('li')
const nametext=document.createTextNode(namedata)
name.appendChild(nametext)
ul.appendChild(name)
// ======================
const div=document.createElement('div')
contener.appendChild(div)
const flags=document.createElement('img')
flags.setAttribute("src", flagsdata.png);
div.appendChild(flags)

const country=document.createElement('h1')
const countrytext=document.createTextNode(countrydata)
country.appendChild(countrytext)
div.appendChild(country)

const ul2=document.createElement('ul');
said.appendChild(ul2)
// 
// let data=JSON.parse(localStorage.getItem('data'));
// for(let i=0; i<data.length;i++){

  // var entryTime;
  // if (localStorage.getItem('data')) {
  //     entryTime = JSON.parse(localStorage.getItem('data'));
  //     console.log(entryTime)
  //   } else {
      entryTime  = new localDAta().toLocaleTimeString();
      localStorage.setItem('data', JSON.stringify(entryTime ));
      
      console.log(entryTime,"nemh")
      
      
    // }
    // for(let i=0; i<entryTime.length;i++){
    // const name2=document.createElement('li')
    // const storagename=document.createTextNode(entryTime[i].name1)
    // name2.appendChild(storagename)
    // ul2.appendChild(name2)

// }
}


