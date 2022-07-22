
    function localDAta(dataObject){
      if( localStorage.getItem('data')===null){
          localStorage.setItem('data',JSON.stringify([]))
            }
          
    let list=JSON.parse(localStorage.getItem('data'));
    list.push(dataObject)
    localStorage.setItem('data',JSON.stringify(list));
    console.log(list,"localstorage")
    }
    // بتصفر لللوكل ستورج
  //    localDAta.all=[];

  // let said=document.getElementById('said')
  // export async function load(){
  //   //get from local storage

  //   const ul=document.createElement('ul');
  //   let data=JSON.parse(localStorage.getItem('data'));
  //   console.log(data.name)
  //   for(let i=0; i<data.length;i++){
  //     const name2=document.createElement('li')
  //     const storagename=document.createTextNode(data[i].name)
  //     name2.appendChild(storagename)
  //     ul.appendChild(name2)
  //     said.appendChild(ul)
  //     //call rende
  //   }

  // }
  // load()
  export default localDAta;