import React from 'react';
import ReactDataGrid from 'react-data-grid';
import MaterialTable from 'material-table';
import RCTable from 'rc-table';

class DensifyGrid1 extends React.Component {
  columns = [];
  rows = [];
  constructor(props) {
    super(props);
  }
  massageData() {
    this.rows = [];
    this.columns = [];
    if (this.props.selection == 1) {
      this.columns = this.props.columns;
      this.rows = this.props.rows;
    } else if (this.props.selection == 2){
      //alter columns/rows to match requirements
      for (var i = 0; i < this.props.columns.length; i++) {
        this.columns.push({title:this.props.columns[i].key, field:this.props.columns[i].name});
      }
      for (var i = 0; i < this.props.rows.length;i++) {
        var obj = new Object();
        for (var j = 1; j <=20; j++) {
          obj["column"+j] = this.props.rows[i]["id"+j];
        }
        this.rows.push(obj);
      }      
    } else if (this.props.selection == 3){
      //alter columns/rows to match requirements
      for (var i = 0; i < this.props.columns.length; i++) {
        this.columns.push(
          {
            title:this.props.columns[i].key, 
            dataIndex:this.props.columns[i].key,
            key:this.props.columns[i].key,
            field:this.props.columns[i].name
          }
        );
      }
      for (var i = 0; i < this.props.rows.length;i++) {
        var obj = new Object();
        for (var j = 1; j <=20; j++) {
          console.log("debug:i="+i+", j="+j);
          obj[this.props.columns[j-1].key] = this.props.rows[i]["id"+(j-1)];
        }
        this.rows.push(obj);
      }      
    }
  }
  
  render() {
    this.massageData();
    if (this.props.selection == 1) {
      return (
        <ReactDataGrid
          columns={this.columns}
          rows={this.rows}
        />  
      );
    } else if (this.props.selection == 2){
      return (
        <MaterialTable
          columns={this.columns}
          data={this.rows}
        />  
      );
    } else {
      return (
        <RCTable columns={this.columns} data={this.rows} tableLayout="auto"/>
      )
    }
  }
}
export default DensifyGrid1;