const items = [
  {
    id: 0,
    name: 'Blue shoe',
    description: 'A blue sailor shoe with blue white checked pattern in the back',
    price: 300,
    type: 'shoe',
    image: {
      id: 'blue-01.jpeg',
      alt: 'A blue shoe with white laces',
    }
  },
  {
    id: 1,
    name: 'Red shoe',
    description: 'A classic vans shoe in red fabric, with white stiching. Low cut and flexible flat rubber sole.',
    price: 200,
    type: 'shoe',
    image: {
      id: 'red-3.jpg',
      alt: 'A red shoe with white laces',
    }
  },
  {
    id: 2,
    name: 'Yellow shoe',
    description: 'A classic vans shoe in yellow fabric, with white stiching. Low cut and flexible flat rubber sole.',
    price: 100,
    type: 'shoe',
    image: {
      id: 'yellow-2.jpg',
      alt: 'A yellow shoe with white laces',
    }
  },
  {
    id: 3,
    name: 'Blue sock',
    description: 'A thin blue sock, with no rubber band',
    price: 300,
    type: 'sock',
    image: {
      id: 'blue_sock.jpg',
      alt: 'A man with a blue sock',
    }
  },
  {
    id: 4,
    name: 'Red sock',
    description: 'a red adidas football sock, with white detials. The sock is of a thick material and goes up to the knee',
    price: 200,
    type: 'sock',
    image: {
      id: 'red_sock.jpg',
      alt: 'A man with a blue sock',
    }
  },
  {
    id: 5,
    name: 'Yellow sock',
    description: 'A thin yellow sock, with no rubber band',
    price: 100,
    type: 'sock',
    image: {
      id: 'yellow_sock.jpg',
      alt: 'A man with a blue sock',
    }
  }
];


class ItemDb {
  listItems(type) {
    if (type) {
      const filteredItems = items.filter(item => item.type === type);
      return Promise.resolve(filteredItems);
    }
    return Promise.resolve(items);
  }
  
  getItem(id) {
    const matchItem = items.find(item => item.id === id);
    if(!matchItem) {
      return Promise.reject('Can not find item');
    }

    return Promise.resolve(matchItem);
  }
}


export default new ItemDb();