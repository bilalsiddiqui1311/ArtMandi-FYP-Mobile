import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

import {URL} from './utils/constant';

const ActivateUser = ({navigation}) => {
 
  const LoginHandler = async ({uid, token}) => {
    const data = {
      uid: uid,
      token: token,
    };
    var form = new FormData();
    form.append('uid', data.uid);
    form.append('token', data.token);
    try {
      axios
        .post(URL.Url + 'activate/',form)
        .then(res => {
          console.log(res.data);
        navigation.navigate('Login')
           })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      alert(error?.response?.data?.message || error?.message);
    }
  };
  return (
    <Formik
      initialValues={{
        uid: '',
        token: '',
      }}
      validationSchema={Yup.object({
        uid: Yup.string().required('User ID is Required'),
        token: Yup.string().required('Token is Required'),
      })}
      onSubmit={(values, formikActions) => {
        LoginHandler(values);
      }}>
      {({handleBlur, handleChange, handleSubmit, values, errors}) => (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.text_header}>Verify Now !</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.action}>
              <FontAwesome name="user-o" size={20} />
              <TextInput
                value={values.username}
                onBlur={handleBlur('uid')}
                onChangeText={handleChange('uid')}
                placeholder="Your User ID"
                placeholderTextColor="#666666"
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>
            {errors.uid ? (
              <View>
                <Text style={styles.error}>{errors.uid}</Text>
              </View>
            ) : null}

            <View style={styles.action}>
              <FontAwesome name="lock" size={20} />
              <TextInput
                placeholder="Your Token"
                placeholderTextColor="#666666"
                style={styles.textInput}
                autoCapitalize="none"
                value={values.token}
                onBlur={handleBlur('token')}
                onChangeText={handleChange('token')}
              />
            </View>
            {errors.token ? (
              <Text style={styles.error}>{errors.token}</Text>
            ) : null}
            <View style={styles.button}>
              <TouchableOpacity style={styles.signIn} onPress={handleSubmit}>
                <Text style={{color: '#fff'}}>Verify Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};
export default ActivateUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  textInput: {
    paddingLeft: 10,
    paddingBottom: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#009387',
    borderRadius: 10,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 3,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  error: {
    color: 'red',
  },
});
