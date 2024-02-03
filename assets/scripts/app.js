class Product {
    title = "DEFAULT ";
    imageURL;
    description;
    price;

    constructor(title, imageURL, description, price) {
        this.title = title;
        this.imageURL = imageURL;
        this.description = description;
        this.price = price;
    }

}

class ElementAttribute {
    constructor(attributeName, attributeValue) {
        this.mame = attributeName;
        this.value = attributeValue;
    }
}

class Component {
    constructor(renderHookId) {
        console.log("SUPER CLASS CONSTRUCTOR")
        this.hookId = renderHookId;
    }

    createRootElement(tag, cssClass, attributes) {
        const rootElement = document.createElement(tag);
        if (cssClass) {
            rootElement.className = cssClass;
        }
        if (attributes && attributes.length > 0) {
            for (const attribute of attributes) {
                rootElement.setAttribute(attribute.name, attribute.value)
            }
        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }

}

class ShoppingCart extends Component {
    items = [];

    constructor(renderHookId) {
        super(renderHookId);
    }

    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total : \$${this.totalAmount.toFixed()}</h2> `
    }

    get totalAmount() {
        //    Using Reduce method in Arrays to get the total
        return this.items.reduce((previousValue, currentItem) => previousValue + currentItem.price, 0);
    }

    addProductToCart(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;

    }

    render() {

        const cartElement = this.createRootElement("section", "cart")

        // const cartElement=document.createElement("section");
        cartElement.innerHTML = `
        <h2>Total : \$${0}</h2>
        <button>Order Now</button>
        `
        this.totalOutput = cartElement.querySelector("h2");
        // return cartElement;
    }
}

class ProductItem extends Component{
//    TODO Rendering a single Product Template
    constructor(product,renderHookId) {
        super(renderHookId);
        this.product = product;
    }

    addToCart() {
        App.addProductToCart(this.product);
    }

    render() {
        // const productElement = document.createElement("li");
        const productElement = this.createRootElement("li","product-item")
        // productElement.className = "product-item";
        productElement.innerHTML = `
            <div>  
            <h1>${this.product.title}</h1>
            <img src="${this.product.imageURL}" alt="${this.product.title}"/>
            <div class="product-item__content">
                <h2>${this.product.title} </h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add To Cart</button>
          
            </div>
            </div>
            `;

        const addCartBtn = productElement.querySelector("button");
        addCartBtn.addEventListener("click", this.addToCart.bind(this))


    }
}

class ProductList extends Component{
    products = [new Product("Product 1", "https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 19.99),
        new Product("Product 2", "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 35.99),
        new Product("Product 3", "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..", 100),
        new Product("Product 4", "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 480),
    ];

    constructor(renderHookId) {
        super(renderHookId);
    }

    render() {
        // const productList = document.createElement("ul");
        this.createRootElement("ul","product-list",[new ElementAttribute("id","prod-list")])
        // TODO Adding all the products
        for (const product of this.products) {
            const productItem = new ProductItem(product,"prod-list");
            productItem.render();

        }
        // return productList
    }
}

class Shop {

    render() {

        this.cart = new ShoppingCart("app");
        this.cart.render();
        const productList = new ProductList("app");
        productList.render();

    }
}

class App {

    static init() {
        const shop = new Shop();
        shop.render()
        this.cart = shop.cart; //Shop.cart
    }

    static addProductToCart(product) {
        this.cart.addProductToCart(product);

    }
}


App.init()