import axios from "axios";
// export default axios.get('http://localhost:3000/explorers')
// .then(function (response){
//   console.log("Response: " + response);
// }).catch(function(error){
//   console.log("This is an error: " + error);
// }).then(function(){
//   console.log("end");
// })

export default axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json"
  }
});
