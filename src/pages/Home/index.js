import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm } from '../../utils';
import { Input } from '../../components';

const Home = () => {
  const [form, setForm] = useForm({
    numOne: '',
    numTwo: '',
    numThree: '',
    selectionOne: false,
    selectionTwo: false,
    selectionThree: false
  });

  return (
    <View style={styles.container}>
          <Input
            value={form.numOne}
            isSelected={form.selectionOne}
            onChangeText={(value) => setForm('numOne', value)}
            onValueChange={(value) => setForm('selectionOne', value)}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default Home;
