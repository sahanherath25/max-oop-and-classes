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

const {name: hotelName, location: place} = restaurant
//
// console.log(hotelName)
// console.log(place)
//
// const {mainMenu="Not Yet Added",categories:catalog="OUR DEFAULT CATALOG"}=restaurant
//
// console.log(mainMenu,catalog)

//TODO Mutation
// let a=100;
// let b =200;

const numbers= {a:911,b:480,c:99};
({a,b}=numbers)


//TODO Nested Objects

const {openingHours:{weekday,weekend}}=restaurant;

console.log(weekend)
console.log(weekday)


