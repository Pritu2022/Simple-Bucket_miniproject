// On clicking remove button the item should be removed from DOM as well as localstorage.

let data=JSON.parse(localStorage.getItem("coffee")) 

data.forEach(function(el){
    let box1=document.createElement("div")
            
          let a=document.createElement("p")
          a.innerText=el.title

        let b=document.createElement("img")
       b.src=el.image

        let c=document.createElement("p")
        c.innerText=el.price

        let d=document.createElement("p")
        dinnerText=el.description

       let j=document.createElement("p")
        j.innerText=el.id

        let r=document.createElement("button")
       r.innerText="remove"
        r.setAttribute("id","remove_coffee")
        r.addEventListener("click",function(){
            remove(el)
        })
   
    //     let len=coffy.length
    //  console.log(len)

    //    document.getElementById("coffee_count").innerText=len

    box1.append(b,a,c,d,j,r)

  //console.log(b,a,c,d,j,r)

    let z=document.getElementById("bucket")
    z.append(box1)


})

let len=data.length
document.getElementById("coffee_count").innerText=len
document.getElementById("total_amount").innerText=234