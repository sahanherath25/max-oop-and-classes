const foodArray = ["Pizza", "Burger", "Sushi", "Pasta", "Salad"];


const [first, second, ...others] = foodArray;

console.log(first)
console.log(second)
console.log(others)


const nested = [2, 3, [99, 100]]

const [x, , [y, z]] = nested;

// console.log(x, z)

const restaurant = {
    name: "Delicious Bites",
    location: "123 Main Street, Cityville",
    categories: ["Italian", "Mexican", "Vegetarian", "Desserts"],
    menu: {
        appetizers: ["Bruschetta", "Guacamole", "Caprese Salad"],
        mainCourses: ["Spaghetti Bolognese", "Enchiladas", "Vegetarian Stir-Fry"],
        desserts: ["Tiramisu", "Churros", "Chocolate Fondue"],
    },
    openingHours: {
        weekday: "10:00 AM - 9:00 PM",
        weekend: "11:00 AM - 10:00 PM",
    },
};

console.log(foodArray)

const previousMenu=["String Hoppers","Wheat","Rice and Curry"]
const clonedObject=[...previousMenu,...foodArray]

previousMenu[0]="FUCK YOU NISHANTHA"

console.log(foodArray)
console.log(previousMenu)
console.log(clonedObject)
clonedObject[2]="SURU";


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




