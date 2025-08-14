import React, {useEffect} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from 'react-native';
import {login} from './redux/action/authaction';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const auth = useSelector(state => state.auth);

  const LoginHandler = async ({username, password}) => {
    const data = {
      username: username,
      password: password,
    };
    dispatch(login(data));
  };
  useEffect(() => {
    if (isFocused && auth.success) {
      navigation.replace('Home');
      console.log(auth);
    }
  }, [auth]);
console.log(auth.loading);
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required('Username is Required')
          .matches(/^[a-zA-Z]/, 'Username Should Only Contains Letters'),
        password: Yup.string().required('Password is Required'),
      })}
      onSubmit={(values, formikActions) => {
        LoginHandler(values);
        formikActions.resetForm()
      }}>
      {({handleBlur, handleChange, handleSubmit, values, errors}) => (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.text_header}>Login Now !</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.action}>
              <FontAwesome name="user-o" size={20} />
              <TextInput
                value={values.username}
                onBlur={handleBlur('username')}
                onChangeText={handleChange('username')}
                placeholder="Your Username"
                placeholderTextColor="#666666"
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>
            {errors.username ? (
              <View>
                <Text style={styles.error}>{errors.username}</Text>
              </View>
            ) : null}

            <View style={styles.action}>
              <FontAwesome name="lock" size={20} />
              <TextInput
                placeholder="Your Password"
                placeholderTextColor="#666666"
                style={styles.textInput}
                autoCapitalize="none"
                value={values.password}
                onBlur={handleBlur('password')}
                onChangeText={handleChange('password')}
                secureTextEntry
              />
            </View>
            {errors.password ? (
              <Text style={styles.error}>{errors.password}</Text>
            ) : null}
            {auth.loading ? (
                 <View style={styles.button}>
                 <TouchableOpacity style={styles.signIn} >
                 <ActivityIndicator color={'white'} size={30} />
            
                 </TouchableOpacity>
               </View>
           
            ) : (
              <View style={styles.button}>
                <TouchableOpacity style={styles.signIn} onPress={handleSubmit}>
                  <Text style={{color: '#fff'}}>Sign In</Text>
                </TouchableOpacity>
              </View>
            )}
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{color: 'grey', marginTop: 10}}>
                Create an account? REGISTER NOW!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};
export default Login;

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
