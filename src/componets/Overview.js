import React from 'react';

import OverviewItem from './OverviewItem';
import ItemDb from '../model/ItemDb';

class Overview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  async componentDidMount() {
    try {
      const items = await ItemDb.listItems();
      this.setState({
        items
      });
    } catch (e) {
      this.props.history.push('/404');
    }
  }

  render() {
    return (
      <>
        <h2>Shoes:</h2>
        <ul>
          {this.state.items.map(item => <OverviewItem item={item} />)}
        </ul>
      </>
    );
  }
}

export default Overview;