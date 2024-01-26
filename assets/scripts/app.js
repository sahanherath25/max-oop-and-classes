const productList={
    products : [
        {
            title: "Product 1",
            imageURL: "https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 19.99,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            title: "Product 2",
            imageURL: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 29.99,
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            title: "Product 3",
            imageURL: "https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 39.99,
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        },
        {
            title: "Product 4",
            imageURL: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 49.99,
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            title: "Product 5",
            imageURL: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 59.99,
            description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ],
    render(){

        const renderHook=document.querySelector("#app");
        const productList=document.createElement("ul");
        productList.className="product-list";

       // TODO Adding all the products
        for(const product of this.products){
        //    creating li for each prod and add to ul

            console.log(product)
            const productElement=document.createElement("li");
            productElement.className="product-item";
            productElement.innerHTML=`
            <div>  
            <h1>${product.title}</h1>
            <img src="${product.imageURL}" alt="${product.title}"/>
            <div class="product-item__content">
                <h2>${product.title} </h2>
                <h3>\$${product.price}</h3>
                <p>${product.description}</p>
                <button>Add To Cart</button>
          
            </div>
            </div>
            `;
            productList.append(productElement)
        }
        renderHook.append(productList)
    },

}


productList.render()

class Product {


}