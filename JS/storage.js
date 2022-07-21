

//===========================
// localStorage


    function localDAta(dataObject){

console.log(dataObject)
        if( localStorage.getItem('data')===null){
            localStorage.setItem('data',JSON.stringify([]))
              }
            
      let list=JSON.parse(localStorage.getItem('data'));
      // localDAta.all.push(this);
      list.push(dataObject)

      localStorage.setItem('data',JSON.stringify(list));

      }
      // بتصفر لللوكل ستورج
    //    localDAta.all=[];
      
    export default localDAta;
          // render()