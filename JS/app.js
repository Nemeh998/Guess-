

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
  async function getNationality(userNum) {
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

export {getNationality, getgenderize, getrestcountries, getagify};