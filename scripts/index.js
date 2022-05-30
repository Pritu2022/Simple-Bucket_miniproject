// Add the coffee to local storage with key "coffee"
///   https://masai-mock-api.herokuapp.com/coffee/menu

let url=`https://masai-mock-api.herokuapp.com/coffee/menu`

async function getdata(){
   try{
        let res= await fetch(url)
        //console.log(res)
     let coff=await res.json()
        let x=coff.menu.data
        console.log(x)
        append(x)
    }
    catch(error){
        console.log(error)
    }    
}

getdata()

function append(coffy){

   

    coffy.forEach(function(el){
        let box=document.createElement("div")
            
          let title=document.createElement("p")
          title.innerText=el.title

        let img=document.createElement("img")
        img.src=el.image

        let price=document.createElement("p")
        price.innerText=el.price

        let type=document.createElement("p")
        type.innerText=el.description

       let id=document.createElement("p")
        id.innerText=el.id

        let cart=document.createElement("button")
        cart.innerText="Add to bucket"
        cart.setAttribute("id","add_to_bucket")
        cart.addEventListener("click",function(){
            addtocart(el)
        })
   
    //     let len=coffy.length
    //  console.log(len)

    //    document.getElementById("coffee_count").innerText=len

    box.append(img,title,price,type,id,cart)

  //console.log(img,title,price,type,id,cart)

    let y=document.getElementById("menu")
    y.append(box)

    
})
     



var arr=JSON.parse(localStorage.getItem("coffee")) || [];

function addtocart(el){
      arr.push(el)
    localStorage.setItem("coffee",JSON.stringify(arr))
}

}