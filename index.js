const axiosfetch = document.getElementById("axiosfetch")
const inpOne = document.getElementById("inpOne")
const inpTwo = document.getElementById("inpTwo")
const ido = document.getElementById("idO")
const btn = document.getElementById("btn")


// FETCH POST


btn.addEventListener('click', function () {
    fetch('https://northwind.vercel.app/api/customers', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contactName: inpOne.value,
            contactTitle: inpTwo.value
           }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data gonderildi" + data);
          });
})



// AXIOS POST

function fetchPost () {
            axios.post("https://northwind.vercel.app/api/customers", {
                contactName: inpOne.value,
                contactTitle: inpTwo.value
            }).then(res => {
                    console.log(res);
                })
                }
                                btn.addEventListener('click', fetchPost)




//FETCH DELETE

function FetchDel() {
        let url = `https://northwind.vercel.app/api/customers/${ido.value}`;

        fetch(url, {
          method: "DELETE",
        }).then((res) => console.log(res));
      }

btn.addEventListener('click', FetchDel)


//AXIOS DELETE

function axiosDelete () {
    axios.delete(`https://northwind.vercel.app/api/customers/${ido.value}`)
}
btn.addEventListener('click', axiosDelete)






