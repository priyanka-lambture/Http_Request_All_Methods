// window.onload(myfun())
// function myfun(){
// document.write("hi")
// }

window.onload = async function () {
    //fetch().then().then().catch()
    var comment = document.getElementById("comment");
   let res = await fetch("http://localhost:1000", { method: "GET" });
    // console.log(res.json());
    let datas = await res.json();
    // console.log(data)
    for (let data of datas) {
        // console.log(data)
        let div = `
        <div class="mx-[7%] my-3" >    
        <div class="bg-white shadow rounded p-2">
        <div class="flex justify-between">
                    <h3 class="mb-3 font-bold text-1×1">${data.title}</h3>
                   <div>
                    <button class="me-2" id="${data.id}" onclick="editData(${data.id})" ><i class="fa fa-edit"></i></button>
                    <button class="me-2" id="${data.id}"onclick="deleteData(${data.id})"><i class="fa fa-trash"></i></button>
                     </div>
                     </div>
                    <p>${data.body}</p>
                     </div>
                     </div>`
        comment.innerHTML += div;

    }

}
// DELETE Functionality
function deleteData(id) {
    // alert(id)
    fetch(`http://localhost:1000/${id}`, { method: "DELETE" });

    // .then((response) => response.json());
    // .then((json) => console.log(json));

    // alert("Data is Deleted Sucessfully")
}
    // EDIT Functionality
function editData(id){
    // alert(id);
    fetch(`http://localhost:1000/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'abcsd',
          body: 'abcoijadd ijsodal ioajs',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

}

// POST Method

let form = document.getElementById('form');
// console.log(form)
form.onsubmit = async function(e){
  e.preventDefault();
  // console.log(form[0].value);
  // console.log(form[1].value);
  // console.log(form[2].value);
let formData = JSON.stringify({
  title : form[0].value,
  body : form[1].value,
 userID : form[2].value,
  
})
// console.log(formData);
var res = await fetch(`http://localhost:1000`, {
  method: 'POST',
  body: formData,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

var data = await res.json();
console.log(data);

// console.log(res);
  // .then((response) => response.json())
  // .then((json) => console.log(json));
}

window.onload = async function (){
 var res = await  axios.get(`http://localhost:1000`);
 console.log(res.data); 
}