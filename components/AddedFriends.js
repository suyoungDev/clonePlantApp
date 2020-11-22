import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
}from 'react-native';

import { COLORS, FONTS, icons, images, SIZES } from '../constants';

import styled from 'styled-components';

const Container = styled.View`
  height: 20%;
  background-color: ${COLORS.lightGray};
`;

export default function AddedFriends(){
  return(
    <Container>
      <Text>Added to Friends</Text>
    </Container>
  )
}
