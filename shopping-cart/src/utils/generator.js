import { v4 as uuidv4 } from 'uuid';

export const generateRandomProduct = () => {
    const products = [
        {
            id: uuidv4(),
            name: 'Produto 1',
            price: 10,
            quantity: 1,
        },
                {
            id: uuidv4(),
            name: 'Produto 2',
            price: 20,
            quantity: 1,
        },
                {
            id: uuidv4(),
            name: 'Produto 3',
            price: 30,
            quantity: 1,
        },
                {
            id: uuidv4(),
            name: 'Produto 4',
            price: 40.5,
            quantity: 1,
        },
                {
            id: uuidv4(),
            name: 'Produto 5',
            price: 50,
            quantity: 1,
        },
                {
            id: uuidv4(),
            name: 'Produto 6',
            price: 60,
            quantity: 1,
        },
                {
            id: uuidv4(),
            name: 'Produto 7',
            price: 70,
            quantity: 1,
        },
                {
            id: uuidv4(),
            name: 'Produto 8',
            price: 80.88,
            quantity: 1,
        },
                {
            id: uuidv4(),
            name: 'Produto 9',
            price: 90,
            quantity: 1,
        },
                {
            id: uuidv4(),
            name: 'Produto 10',
            price: 100,
            quantity: 1,
        },

    ];

    const random = Math.floor(Math.random() * products.length);

    return products[random];
};