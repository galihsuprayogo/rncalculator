import React, {useState, useEffect, useRef} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useForm } from '../../utils';
import { Input, Gap, Button } from '../../components';

const Home = () => {
  const [form, setForm] = useForm({
    numOne: '',
    numTwo: '',
    numThree: '',
    selectionOne: false,
    selectionTwo: false,
    selectionThree: false
  });

  const operator = [
    {label: '+'},
    {label: '-'},
    {label: 'x'},
    {label: '/'}
  ]

  const [calculate, setCalculate] = useState(0);
  const timeOut = useRef(null);

  useEffect(() => {
    timeOut.current = setTimeout(() => {
      form.selectionOne === false ? reset() : '';
    }, 50);
    return () => clearTimeout(timeOut.current);
  }, [form.selectionOne]);

  useEffect(() => {
    timeOut.current = setTimeout(() => {
      form.selectionTwo === false ? reset() : '';
    }, 50);
    return () => clearTimeout(timeOut.current);
  }, [form.selectionTwo]);

  useEffect(() => {
    timeOut.current = setTimeout(() => {
      form.selectionThree === false ? reset() : '';
    }, 50);
    return () => clearTimeout(timeOut.current);
  }, [form.selectionThree]);

  const onContinue = (label) => {
    if(form.selectionOne === true && form.selectionTwo === false && form.selectionThree === false ||
      form.selectionOne === false && form.selectionTwo === true && form.selectionThree === false ||
      form.selectionOne === false && form.selectionTwo === false && form.selectionThree === true){
      alert('Minimal dua check list');
    } else if(form.selectionOne === true && form.selectionTwo === true && form.selectionThree === false){
        if(!/^\d+$/.test(form.numOne) || !/^\d+$/.test(form.numTwo)){
          alert('Angka aja ya, jangan yang lain!');
          reset();
        } else {
          const a = Number(form.numOne);
          const b = Number(form.numTwo);
          if(a === 0 || b === 0){
            alert('Diisi dulu ya! jangan buru-buru');
          } else{
            if(label === '+'){
              setCalculate(a + b);
            }
            if(label === '-'){
              setCalculate(a - b);
            }
            if(label === 'x'){
              setCalculate(a * b);
            }
            if(label === '/'){
              setCalculate(a / b);
            }
            reset();
          }  
        }
    } else if(form.selectionOne === true && form.selectionTwo === false && form.selectionThree === true){
        if(!/^\d+$/.test(form.numOne) || !/^\d+$/.test(form.numThree)){
          alert('Angka aja ya, jangan yang lain!');
          reset();
        } else{
          const a = Number(form.numOne);
          const b = Number(form.numThree);
          if(a === 0 || b === 0){
            alert('Diisi dulu ya! jangan buru-buru');
          } else{
            if(label === '+'){
              setCalculate(a + b);
            }
            if(label === '-'){
              setCalculate(a - b);
            }
            if(label === 'x'){
              setCalculate(a * b);
            }
            if(label === '/'){
              setCalculate(a / b);
            }
            reset();
          }  
        }    
    } else if(form.selectionOne === false && form.selectionTwo === true && form.selectionThree === true){
        if(!/^\d+$/.test(form.numTwo) || !/^\d+$/.test(form.numThree)){
          alert('Angka aja ya, jangan yang lain!');
          reset();
        } else{
          const a = Number(form.numTwo);
          const b = Number(form.numThree);
          if(a === 0 || b === 0){
            alert('Diisi dulu ya! jangan buru-buru');
          } else{
            if(label === '+'){
              setCalculate(a + b);
            }
            if(label === '-'){
              setCalculate(a - b);
            }
            if(label === 'x'){
              setCalculate(a * b);
            }
            if(label === '/'){
              setCalculate(a / b);
            }
            reset();
          }
        }
    } else if(form.selectionOne === true && form.selectionTwo === true && form.selectionThree === true){
      if(!/^\d+$/.test(form.numOne) || !/^\d+$/.test(form.numTwo) || !/^\d+$/.test(form.numThree)){
        alert('Angka aja ya, jangan yang lain!');
        reset();
      } else {
        const a = Number(form.numOne);
        const b = Number(form.numTwo);
        const c = Number(form.numThree)
         if(label === '+'){
          setCalculate(a + b + c);
         }
         if(label === '-'){
          setCalculate(a - b - c);
         }
         if(label === 'x'){
          setCalculate(a * b * c);
         }
         if(label === '/'){
          setCalculate(a / b / c);
         }
        reset();
      } 
    } else{
      alert('Dicentang dulu, Plis!');
    }
  };

  const reset = () => {
    setForm('reset');
  };

  return (
    <View style={styles.container}>
      <Input
        value={form.numOne}
        isSelected={form.selectionOne}
        onChangeText={(value) => setForm('numOne', value)}
        onValueChange={(value) => setForm('selectionOne', value)}
      />
      <Gap height={15} />
      <Input
        value={form.numTwo}
        isSelected={form.selectionTwo}
        onChangeText={(value) => setForm('numTwo', value)}
        onValueChange={(value) => setForm('selectionTwo', value)}
      />
      <Gap height={15} />
      <Input
        value={form.numThree}
        isSelected={form.selectionThree}
        onChangeText={(value) => setForm('numThree', value)}
        onValueChange={(value) => setForm('selectionThree', value)}
      />
      <Gap height={30} />
      <View style={styles.wrapperButton}>
        <Button title={'+'} onPress={() => onContinue(operator[0].label)}/>
          <Gap width={15} />
        <Button title={'-'} onPress={() => onContinue(operator[1].label)}/>
          <Gap width={15} />
        <Button title={'x'} onPress={() => onContinue(operator[2].label)}/>
          <Gap width={15} />
        <Button title={'/'} onPress={() => onContinue(operator[3].label)}/>
      </View>
      <Gap height={20} />
      <View style={styles.wrapperResult}>
        <Text style={styles.text}>Hasil : </Text>
        <Text style={styles.text}>{calculate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  wrapperButton:{
    flexDirection: 'row',
  },
  wrapperResult:{
    flexDirection: 'row',
    borderTopWidth: 2,
    paddingTop: 25,
  },
  text:{
    fontSize: 18,
  }
});
export default Home;
