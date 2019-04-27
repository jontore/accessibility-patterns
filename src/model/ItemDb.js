const items = [
  {
    id: 0,
    name: 'Blue shoe',
    description: 'A nice new blue shoe',
    price: 300,
    image: {
      id: 'blue-01.jpeg',
      alt: 'A man with a blue shoe',
    }
  }
];


class ItemDb {
  listItems() {
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