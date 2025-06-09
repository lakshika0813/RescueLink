import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Background from './components/Background';
import Btn from './components/Btn';
import { yellowOrange } from './components/Constants';
import Field from './components/Field';

const Signup = ({ navigation }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    contact: '',
    password: '',
    confirm_password: ''
  });

  const [errors, setErrors] = useState({
    firstname: '',
    password: '',
    confirm_password: ''
  });

  const handleSignup = async () => {
    // Client-side validation
    const { firstname, password, confirm_password } = formData;

    let valid = true;
    const newErrors = {};

    if (!firstname.trim()) {
      newErrors.firstname = 'Please enter your first name.';
      valid = false;
    }

    if (!password || password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
      valid = false;
    }

    if (password !== confirm_password) {
      newErrors.password = 'Passwords do not match.';
      newErrors.confirm_password = 'Passwords do not match.';
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('http://192.168.29.56:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.text();

      if (result === 'Account created') {
        // Alert.alert('Success', 'Account created successfully!');
        navigation.navigate('Login');
      } else {
        Alert.alert('Signup Failed', result);
      }

    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    setErrors(prevState => ({ ...prevState, [name]: '' }));
  };

  return (
    <Background>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginTop: 20 }}>Register</Text>
        <Text style={{ color: 'white', fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}>Create a new account</Text>
        <View style={{ backgroundColor: 'white', height: 700, width: 460, borderTopLeftRadius: 130, paddingTop: 50, alignItems: 'center' }}>
          <Field placeholder="First Name" onChangeText={(text) => handleChange('firstname', text)} />
          {errors.firstname ? <Text style={{ color: 'red' }}>{errors.firstname}</Text> : null}

          <Field placeholder="Last Name" onChangeText={(text) => handleChange('lastname', text)} />

          <Field placeholder="Contact Number" keyboardType="number-pad" onChangeText={(text) => handleChange('contact', text)} />

          <Field placeholder="Password" secureTextEntry={true} onChangeText={(text) => handleChange('password', text)} />
          {errors.password ? <Text style={{ color: 'red' }}>{errors.password}</Text> : null}

          <Field placeholder="Confirm Password" secureTextEntry={true} onChangeText={(text) => handleChange('confirm_password', text)} />
          {errors.confirm_password ? <Text style={{ color: 'red' }}>{errors.confirm_password}</Text> : null}

          <Btn textColor="white" bgColor={yellowOrange} btnLabel="Signup" Press={handleSignup} />

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Already have an account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{ color: yellowOrange, fontWeight: 'bold', fontSize: 16 }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
