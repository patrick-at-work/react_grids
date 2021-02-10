import React from 'react';
import DensifyGrid from './densify-grid1';

class DensifyGridContainer extends React.Component {
  selectGrid = 1;
  constructor(props) {
    super(props);
  }
  clickHandler(i) {
    this.selectGrid = i;
    this.setState({selectGrid:i});
  }
  
  render() {
    return (
      <div>
      <button onClick={()=>this.clickHandler("1")}>
      react-data-grid
      </button>
      <button onClick={()=>this.clickHandler("2")}>
      material-table
      </button>
      <button onClick={()=>this.clickHandler("3")}>
      rc-table
      </button>
      <DensifyGrid columns={this.props.columns} rows={this.props.rows} selection={this.selectGrid}/>
    </div>
      )
  }
}

export default DensifyGridContainer;