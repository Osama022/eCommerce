export function filterCategory() {
    let checkedImages = document.querySelectorAll(".checkedImage")
    let inputSearch = document.querySelector(".inputSearch")
    checkedImages = [...checkedImages]
    checkedImages = checkedImages.filter((image) => !image.classList.contains("hidden"))
    if (checkedImages[0] != undefined) {
    let products = document.querySelectorAll(".product")
        products.forEach((product) => {
            product.classList.add("hidden")
        })
        checkedImages.forEach((image) => {
            products.forEach((product) => {
                product.children[1].children[2].innerHTML == image.parentElement.parentElement.children[1].innerHTML ? product.classList.remove("hidden") : false;
              })
        })
          inputSearch.addEventListener("focus", () => {
              document.onkeyup = () => {
        
  
                  let val = inputSearch.value.toLowerCase()
                  if (val != "") {
                  products.forEach((product) => {
                      product.classList.add("hidden")
                  })
                  checkedImages.forEach((image) => {
                      products.forEach((product) => {
                          
                          if (product.children[1].children[2].innerHTML == image.parentElement.parentElement.children[1].innerHTML && (product.children[1].children[0].innerHTML.toLowerCase().match(val) !== null || product.children[1].children[1].innerHTML.toLowerCase().match(val) !== null)) {
                            console.log(true);
                              product.classList.remove("hidden")
                          }
                        })
                  })
              } else {
                  products.forEach((product) => {
                      product.classList.add("hidden")
                  })
                  checkedImages.forEach((image) => {
                      products.forEach((product) => {
                          product.children[1].children[2].innerHTML == image.parentElement.parentElement.children[1].innerHTML ? product.classList.remove("hidden") : false;
                        })
                  })
              }
              }
            })
    } else {
        let products = document.querySelectorAll(".product")
        products.forEach((product) => {
            product.classList.remove("hidden")
          })
          let inputSearch = document.querySelector(".inputSearch")
  
      
          function search() {
            let val = inputSearch.value.toLowerCase()
            if (val != "") {
              products.forEach((product) => {
                product.classList.add("hidden")
                product.children[1].children[0].innerHTML.toLowerCase().match(val) !== null ? product.classList.remove("hidden") : false;
                product.children[1].children[1].innerHTML.toLowerCase().match(val) !== null ? product.classList.remove("hidden") : false;
              })
            } else {
              products.forEach((product) => {
                product.classList.remove("hidden")
              })
            }
          }
      
          inputSearch.onfocus = () => {
            document.onkeyup = () => {
              search()
            }
          }
    }
}