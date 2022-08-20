let products = {
    data: [
      {
        productName: "Tour to Nha Trang",
        category: "Combo",
        price: "7,000,000",
        image: "#",
        link: "",
      },

      {
        productName: "Quy Nhon Airplane Ticket",
        category: "Transport",
        price: "1,000,000",
        image: "#",
      },

      {
        productName: "Ha Long Bay",
        category: "Combo",
        price: "4,000,000",
        image: "#",
      },

      {
        productName: "Sapa Cong Doan Hotel",
        category: "Hotel",
        price: "400,000",
        image: "#",
      },

      {
        productName: "Da Nang City",
        category: "Combo",
        price: "1,000,000",
        image: "#",
      },

      {
        productName: "Tam Dao with motorbike",
        category: "Tour",
        price: "800,000",
        image: "pink-trousers.jpg",
      },

      {
        productName: "Altavar hotel",
        category: "hotel",
        price: "600,000",
        image: "brown-jacket.jpg",
      },

      {
        productName: "sleeper car to Sapa",
        category: "Transport",
        price: "300,000",
        image: "comfy-gray-pants.jpg",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText =i.price  + " VND" ;
    container.appendChild(price);
    //link
    let link = document.createElement("p");
    link.innerText =i.link;
    container.appendChild(link);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };