import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Gap } from '../../atoms';
import { colors } from '../../../utils';

const Input = ({
  value, onChangeText, isSelected, onValueChange
}) => (
<View style={styles.container}>
  <View style={styles.wrapper}>
    <View style={styles.divInput(isSelected)}>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        editable={isSelected}
        value={ value }
        onChangeText={onChangeText}
      />
    </View>
    <Gap width={20} />
    <View style={styles.divCheckBox}>
      <CheckBox
        disabled={false}
        value={isSelected}
        onValueChange={onValueChange}
        tintColors={{ true: 'black' }}
      />
    </View>
  </View>
</View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  divInput: (isSelected) => ({
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: isSelected === false ? colors.disable : 'white'
  }),
  input: {
    flex: 1,
    padding: 10,
    color: 'black'
  },
  divCheckBox: {
    alignSelf: 'center'
  }
});
export default Input;
