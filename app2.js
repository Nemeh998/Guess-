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
  getDatafromApi(deletespas);

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


//===========================
// localStorage
if( localStorage.getItem('data')===null){
localStorage.setItem('data',JSON.stringify([]))
  }

let list=JSON.parse(localStorage.getItem('data'))

function localDAta(Gender,name1,flags,age,country){
  this.name1=name1;
  this.Gender=Gender;
  this.age=age;
  this.flags=flags;
  this.country=country;
  // localDAta.all.push(this);
  list.push(this)
  }
  //بتصفر لللوكل ستورج
  //  localDAta.all=[];
  //
 async function getDatafromApi(userNum) {
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
localStorage.setItem('data',JSON.stringify(list));

render(Gender,name,flags,age,country)
}



let contener=document.getElementById('contener')
let said=document.getElementById('said')
// 



// render data
let male='.img/male.webp';
let female='img/female.png'
function render(Genderdata,namedata,flagsdata,agedata,countrydata){
  const div=document.createElement('div')
  let img=document.createElement('img');
  if(Genderdata==="male"){
    img.src=male;
    
    
  }else
  {
    img.src=female;
    
  }
  div.appendChild(img)
  console.log(countrydata)
  contener.appendChild(div)
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
// =================
const flagsli=document.createElement('li')

const flags=document.createElement('img')
flags.setAttribute("src", flagsdata.png);
flagsli.appendChild(flags)
ul.appendChild(flagsli)
// ======================
const countryli=document.createElement('li')

const country=document.createElement('h1')
const countrytext=document.createTextNode(countrydata)
country.appendChild(countrytext)
countryli.appendChild(country)
ul.appendChild(countryli)
// =======================
///===============================
//local storage
const ul2=document.createElement('ul');
said.appendChild(ul2)
let data=JSON.parse(localStorage.getItem('data'));
console.log(data)
  for(let i=0; i<data.length;i++){
  const name2=document.createElement('li')
  const storagename=document.createTextNode(data[i].name1)
  name2.appendChild(storagename)
  ul2.appendChild(name2)

}
}


