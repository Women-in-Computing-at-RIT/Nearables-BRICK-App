/**
 * Created by drewg on 4/26/2017.
 */
import React, {
  PropTypes,
} from 'react';
import {
  Text,
} from 'react-native';

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};

const TabIcon = (props) => (
  <Text style={{
    color: props.selected ? 'black' :'white',
    textAlign:'center',
    borderBottomWidth: props.selected ? 5 : 0,
    fontWeight: 'bold'
  }}>{props.title}</Text>
);

TabIcon.propTypes = propTypes;

export default TabIcon;
