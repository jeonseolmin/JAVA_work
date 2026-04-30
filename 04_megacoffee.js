const megaCoffee = {
    name : "megaCoffee",
    menus : [
        {
            name : '아메리카노',
            price : '2000',
            category: '커피',
            options:['Hot','Ice']
        }
        ,
        {
            name : '카페라떼',
            price : '3000',
            category: '커피',
            options:['Hot','Ice']
        }
        ,{
            name : '딸기스무디',
            price : '4500',
            category: '음료',
            options:['Ice']
        }
        ,{
            name : '망고주스',
            price : '4000',
            category: '음료',
            options:['Ice']
        }
    ],
    orders : [
        {
            menuName : "아메리카노",
            option :  "ICE",
            quantity : "2"
        },
        {
            menuName : "딸기스무디",
            option :  "ICE",
            quantity : "1"
        },
        {
            menuName : "카페라떼",
            option :  "Hot",
            quantity : "3"
        }
    ]
}

console.log(megaCoffee.name);
console.log(megaCoffee.menus[0].name);
console.log(megaCoffee.menus[2].price);
console.log(megaCoffee.menus[3].options[0]);
console.log(megaCoffee.orders[0].quantity);
console.log(megaCoffee.orders[0].quantity);
console.log(megaCoffee.orders[1].menuName);
console.log(megaCoffee.orders[2].option);