import { AuctionProduct, AuctionState } from "./interfaces/AuctionProduct";

export const products: AuctionProduct[] = [{
    id: 1,
    thumbnail: '/assets/images/products/car_small.jpg',
    thumbnail_big: '/assets/images/products/car.jpg',
    title: 'Brand new Tesla Model S',
    description: 'This auctionic car is very wonderful products of our company',
    max_retail_price: 42500,
    start_time: '2021-08-28 19:20',
    end_time: '2021-08-28 20:00',
    highest_bidder: 'IBIDBIG2022',
    bid_count: 10,
    wild_card: 450.00,
    lux: 250,
    buy_in_limit: 500,
    current_buy_in: 100,
    state: AuctionState.ACTIVE,
    images: [{
        id: 1,
        src: '/assets/images/products/tesla.jpg'
    }, {
        id: 2,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvNSDqNxP0GW6VQorNnPMMRWwA0C3O9oY-_02-P9gi1BbyzhwKWoHJDb2ypuCXKGJtMcE&usqp=CAU'
    }, {
        id: 3,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVaJx4ndONzd-Q-aTqDmHOY2MyRh1WoEzlGzjgYNLvvOWToNclQlN-KjHqM2D7y2Q6QhY&usqp=CAU'
    }, {
        id: 4,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjOh-QBIEm-Zn64F6I-xFQ7n4EfxwmFVQHcS5gW7o72Ut6Pkkj96rfg21enT5XJPvjrmU&usqp=CAU'
    }, {
        id: 5,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgUyKrJD8TSWuSbZOewXLKU2Bpu-dRdXJo8cwI-aLnCZuoR8mnXGbMRD7sjmeAA3T9oHA&usqp=CAU'
    },]
},
{
    id: 1,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe95-bGY1zliejdM0FssE9jzcTpr_zMSZjiw&usqp=CAU',
    title: 'Brand new Tesla Model S',
    description: 'This auctionic car is very wonderful products of our company',
    max_retail_price: 3000,
    start_time: '2021-08-22 19:20',
    end_time: '2021-08-30 20:00',
    highest_bidder: 'IBIDBIG2022',
    bid_count: 9,
    wild_card: 250.00,
    buy_in_limit: 500,
    current_buy_in: 10,
    lux: 150,
    state: AuctionState.ACTIVE,
    images: [{
        id: 1,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe95-bGY1zliejdM0FssE9jzcTpr_zMSZjiw&usqp=CAU'
    }]
},
{
    id: 1,
    thumbnail: '/assets/images/products/car_small.jpg',
    thumbnail_big: '/assets/images/products/car.jpg',
    title: 'Brand new Tesla Model S',
    description: 'This auctionic car is very wonderful products of our company',
    max_retail_price: 42500,
    start_time: '2021-08-20 19:20',
    end_time: '2021-08-22 20:00',
    highest_bidder: 'IBIDBIG2022',
    bid_count: 10,
    wild_card: 450.00,
    lux: 250,
    buy_in_limit: 500,
    current_buy_in: 100,
    state: AuctionState.DONE,
    winner: {
        avatar: "data:image/jpeg;base64,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",
        name: "ASAP",
        point: 13
    },
    images: [{
        id: 1,
        src: '/assets/images/products/tesla.jpg'
    }, {
        id: 2,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvNSDqNxP0GW6VQorNnPMMRWwA0C3O9oY-_02-P9gi1BbyzhwKWoHJDb2ypuCXKGJtMcE&usqp=CAU'
    }, {
        id: 3,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVaJx4ndONzd-Q-aTqDmHOY2MyRh1WoEzlGzjgYNLvvOWToNclQlN-KjHqM2D7y2Q6QhY&usqp=CAU'
    }, {
        id: 4,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjOh-QBIEm-Zn64F6I-xFQ7n4EfxwmFVQHcS5gW7o72Ut6Pkkj96rfg21enT5XJPvjrmU&usqp=CAU'
    }, {
        id: 5,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgUyKrJD8TSWuSbZOewXLKU2Bpu-dRdXJo8cwI-aLnCZuoR8mnXGbMRD7sjmeAA3T9oHA&usqp=CAU'
    },]
},
{
    id: 1,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe95-bGY1zliejdM0FssE9jzcTpr_zMSZjiw&usqp=CAU',
    title: 'Brand new Tesla Model S',
    description: 'This auctionic car is very wonderful products of our company',
    max_retail_price: 3000,
    start_time: '2021-08-22 19:20',
    end_time: '2021-08-30 20:00',
    highest_bidder: 'IBIDBIG2022',
    bid_count: 9,
    wild_card: 250.00,
    buy_in_limit: 500,
    current_buy_in: 10,
    lux: 150,
    state: AuctionState.READY,
    images: [{
        id: 1,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe95-bGY1zliejdM0FssE9jzcTpr_zMSZjiw&usqp=CAU'
    }]
}
]