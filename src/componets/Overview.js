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

  componentDidMount() {
    const type = this.props.match.params.type;
    this.setItems(type);
  }
  
  
  
  async componentDidUpdate(nextProps) {
    if (this.props.match.params.type !== 
      nextProps.match.params.type) {
        const type = this.props.match.params.type;
        this.setItems(type);
    }
  }
  
  
  async setItems(type) {
    try {
      const items = await ItemDb.listItems(type);
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
        <ul className="itemlist">
          {this.state.items.map(item => <OverviewItem item={item} />)}
        </ul>
      </>
    );
  }
}

export default Overview;