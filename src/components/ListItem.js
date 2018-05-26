import React, {Component} from 'react';
import {StyleSheet, LayoutAnimation, View, Text, ListView, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import CardSection from './CardSection';
import * as actions from '../actions';

class ListItem extends Component {

  componentWillUpdate(){
    LayoutAnimation.spring();
  }

  renderDesctiption(){
    if(this.props.expanded){
      return (
        <CardSection>
          <Text style={styles.textExpanded}>
          {this.props.article.description}
          </Text>
        </CardSection>
      );
    }
  }

  render () {
    const {title, id} = this.props.article;
    console.log(id);
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectArticle(id)}>
        <View>
          <CardSection>
            <Text style={styles.textStyle}> {title} </Text>
          </CardSection>

          {this.renderDesctiption()}

        </View>

      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 15
  },
  textExpanded: {
    flex: 1,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13,
    padding: 10
  }
});

const mapStateToProps = (state, ownProps) => {

  const expanded = state.selectedArticleId === ownProps.article.id;

  return {expanded};
};

export default connect(mapStateToProps, actions)(ListItem);
