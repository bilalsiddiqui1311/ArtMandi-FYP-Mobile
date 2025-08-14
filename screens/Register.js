import React, {Fragment, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {signup} from './redux/action/authaction';
import {useIsFocused} from '@react-navigation/native';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const isFocused = useIsFocused();

  const RegisterHandler = async ({
    username,
    email,
    password,
    confirmPassword,
  }) => {
    try {
      const data = {
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };
      dispatch(signup(data));
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
      if (isFocused && auth.success) {
        navigation.replace('ActiveUser');
        console.log(auth);
      }
   
  }, [auth]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView>
          <View style={styles.header}>
            <Text style={styles.text_header}>Register Now !</Text>
          </View>
          <Formik
            initialValues={{
              username: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={Yup.object({
              username: Yup.string()
                .required('Username is Required')
                .matches(/^[a-zA-Z]/, 'Username Should Only Contains Letters'),
              email: Yup.string()
                .required('Email is Required')
                .email('Invalid Email'),
              password: Yup.string()
                .required('Password is Required')
                .min(6, 'Minimum Length Should be 6'),
              confirmPassword: Yup.string().when('password', {
                is: val => (val && val.length > 0 ? true : false),
                then: Yup.string()
                  .oneOf(
                    [Yup.ref('password')],
                    'Both password need to be the same',
                  )
                  .required('Password is Required'),
              }),
            })}
            onSubmit={(values, formikActions) => {
              RegisterHandler(values);
              formikActions.resetForm()
            }}>
            {({handleBlur, handleChange, handleSubmit, values, errors}) => (
              <Fragment>
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
                    <Text style={styles.error}>{errors.username}</Text>
                  ) : null}
                  <View style={styles.action}>
                    <FontAwesome name="at" size={20} />
                    <TextInput
                      value={values.email}
                      onBlur={handleBlur('email')}
                      onChangeText={handleChange('email')}
                      keyboardType="email-address"
                      placeholder="Your Email"
                      placeholderTextColor="#666666"
                      style={styles.textInput}
                      autoCapitalize="none"
                    />
                  </View>
                  <View>
                    {errors.email ? (
                      <Text style={styles.error}>{errors.email}</Text>
                    ) : null}
                  </View>
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
                  <View style={styles.action}>
                    <FontAwesome name="lock" size={20} />
                    <TextInput
                      placeholder="Confirm Password"
                      placeholderTextColor="#666666"
                      style={styles.textInput}
                      autoCapitalize="none"
                      value={values.confirmPassword}
                      onBlur={handleBlur('confirmPassword')}
                      onChangeText={handleChange('confirmPassword')}
                      secureTextEntry
                    />
                  </View>
                  {errors.confirmPassword ? (
                    <Text style={styles.error}>{errors.confirmPassword}</Text>
                  ) : null}
                  {auth.loading ? (
                    <View style={styles.button}>
                      <TouchableOpacity style={styles.signIn}>
                        <ActivityIndicator color={'white'} size={30} />
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View style={styles.button}>
                      <TouchableOpacity
                        style={styles.signIn}
                        onPress={handleSubmit}>
                        <Text style={{color: '#fff'}}>Sign Up</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={{color: 'grey', marginTop: 10}}>
                      Already have account? SIGN IN
                    </Text>
                  </TouchableOpacity>
                </View>
              </Fragment>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    marginTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footer: {
    height: Dimensions.get('screen').height,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
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
    paddingLeft: 30,
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
