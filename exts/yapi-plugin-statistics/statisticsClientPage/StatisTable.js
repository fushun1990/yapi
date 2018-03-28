import React, { Component } from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types'
import _ from 'underscore';



const columns = [
  {
    title: 'BU',
    dataIndex: 'bu',
    key: 'bu',
    width: 200
  },
  {
    title: '项目',
    dataIndex: 'project',
    key: 'project',
    width: 100
  },
  {
    title: '分组',
    dataIndex: 'interface',
    key: 'interface'
  },
  {
    title: 'mock数据',
    dataIndex: 'mock',
    key: 'mock'
  }
];

class SchemaTable extends Component {

  static propTypes = {
    dataSource: PropTypes.object
  }

  constructor(props) {
    super(props);
    
  }

  render() {    
    
    
    dataSource = _.isArray(dataSource) ? dataSource : []
    return <Table bordered size="small" pagination={false} dataSource={dataSource} columns={columns} />;
  }
}
export default SchemaTable;