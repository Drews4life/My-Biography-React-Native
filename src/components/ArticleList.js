import React, {Component} from 'react';
import {View, Text, ListView} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

class ArticleList extends Component {

  componentWillMount() {
    const listView = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    });

    this.dataSource = listView.cloneWithRows(this.props.articles);
  }

  renderRow(article){
    return <ListItem article={article} />
  }

  render () {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return { articles: state.articles};
};

export default connect(mapStateToProps)(ArticleList);
