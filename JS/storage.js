


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


    export default localDAta;
        