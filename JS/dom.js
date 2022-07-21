
let contener=document.getElementById('contener')
//
let containerDiv = document.createElement('div');
// render data
let male='./img/male.png';
let female='./img/female.jpg'
export function render(Genderdata,namedata,flagsdata,agedata,countrydata){
    const div=document.createElement('div')
    let img=document.createElement('img');
  if(Genderdata==="male"){
    img.src=male;
    
    
  }else
  {
    img.src=female;
    
  }
  containerDiv.appendChild(div)
  div.appendChild(img)
  //================
  const ul=document.createElement('ul');
  containerDiv.appendChild(ul)
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


contener.appendChild(containerDiv)

}
// const item = document.querySelector('#itemId')
// while (item.containerDiv) {
//   item.removeChild(item.containerDiv)
// }

export default render;