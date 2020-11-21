import React from 'react';
import {
  View,
  Text
}from 'react-native';
import styled from 'styled-components';
import { SIZES } from '../constants';

const Container = styled.View`
  position: absolute;
  top:50px;
  left: ${SIZES.padding}px;
  right: ${SIZES.padding}px;
`;
const Row = styled.View`
  flex: 1;
  flex-direction: row;
`;

const PlantDetail = () => {
  return(
    <Container>
      <Row>
        
      </Row>
    </Container>
  )
}

export default PlantDetail;