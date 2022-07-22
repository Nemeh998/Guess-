
import {getagify, getgenderize, getrestcountries, getNationality} from './app.js';
import localDAta from './storage.js';
import  render  from './dom.js';

let form=document.getElementById('form');

form.addEventListener('submit',add);

async function add(event){
  event.preventDefault();
  let name1=form.name.value;
  //for speas 
name1=name1.trim ()
let usersNational = await getNationality(name1);
let usersgender = await getgenderize(name1);
let usersage = await getagify(name1);
let userscountri = await getrestcountries(usersNational.country[0].country_id);

 let dataObject = {
   name: usersNational.name, 
   gender: usersgender.gender, 
   age: usersage.age,
   flags: userscountri[0].flags,
   country :usersNational.country[0].country_id
  };
  

render(dataObject.gender,dataObject.name,dataObject.flags,dataObject.age,dataObject.country);

localDAta(dataObject)
}
