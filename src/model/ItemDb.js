const items = [
  {
    id: 0,
    name: 'Blue shoe',
    description: 'A nice new blue shoe',
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
    description: 'A nice red blue shoe',
    price: 200,
    type: 'shoe',
    image: {
      id: 'red-3.jpg',
      alt: 'A red shoe with wihet laces',
    }
  },
  {
    id: 2,
    name: 'Yellow shoe',
    description: 'A nice new yellow shoe',
    price: 100,
    type: 'shoe',
    image: {
      id: 'yellow-2.jpg',
      alt: 'A yellow shoe with wihet laces',
    }
  },
  {
    id: 3,
    name: 'Blue sock',
    description: 'A nice new blue sock',
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
    description: 'A nice new blue sock',
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
    description: 'A nice new blue sock',
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