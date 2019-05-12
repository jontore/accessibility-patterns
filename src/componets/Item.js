import ItemDb from '../model/ItemDb';

import React from 'react';
import AddToCart from './cart/AddToCart';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  async componentDidMount() {
    try {
      const id = parseInt(this.props.match.params.id, 10);
      const item = await ItemDb.getItem(id);
      this.setState({
        item,
      });
    } catch (e) {
      this.props.history.push('/404');
    }
  }

  render() {
    if (!this.state.item ) {
      return <h2>Loading</h2>;
    }

    const { name, image, description, price } = this.state.item;
    return (
      <section
        className="item"
      >
        <h2>{name}</h2>
        <img
          className="item--image"
          src={`http://localhost:3000/images/${image.id}`}
          alt={image.alt}
        />
        <p>{description}</p>
        <p>Price: {price}</p>
        <AddToCart item={this.state.item} />
      </section>
    );
  }
}

export default Item;