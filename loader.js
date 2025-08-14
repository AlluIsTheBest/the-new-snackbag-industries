

fetch("companies.json")
    .then(response => response.json())
    .then(data => {



        const areaaa = document.getElementById("companies")

        data.forEach(element => {
            newelement = document.createElement("div")
            newimg = document.createElement("img")
            newtext = document.createElement("p")
            newelement.classList.add("businessbox")
            newtitle = document.createElement("h1")
            newownertitle = document.createElement("h2")
            texdiv = document.createElement("div")
            texdiv.classList.add("textdiv")
            newbtn = document.createElement("button")
            newbtn.classList.add("transparent")

            newbtn.addEventListener("click", () =>{
                localStorage.setItem("current", JSON.stringify(element))
                window.location.href = "catalogue.html"
            });
            
            

            newimg.src = element["picture"]
            areaaa.appendChild(newelement)
            newelement.appendChild(newbtn)
            newbtn.appendChild(newimg)
            texdiv.appendChild(newtitle)
            texdiv.appendChild(newownertitle)
            texdiv.appendChild(newtext)
            newelement.appendChild(texdiv)
            newtitle.innerHTML = element["name"]
            newownertitle.innerHTML = element["minecraft"]
            newtext.innerHTML = element["description"]




        });


    })

    .catch(error => console.log(error))