import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icons} from '../../assets/Icons';
import Itemdivider from '../itemDivider';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
interface HeaderInterface {
    header: string;
}
const Header = ({header}: HeaderInterface) => {
  const {goBack} = useNavigation();
  const back_handler = () => {
    goBack();
  };
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>{header}</Text>
        <TouchableOpacity
          onPress={back_handler}
          style={styles.back_button}>
          <View>
            <Icons.back_simple height={25} width={25} />
          </View>
        </TouchableOpacity>
      </View>
      <Itemdivider />
    </View>
  );
};
export default Header;
