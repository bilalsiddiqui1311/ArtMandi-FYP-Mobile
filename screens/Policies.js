import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

function Policies({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <TouchableOpacity
            style={{paddingRight: 10}}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Image
              source={require('./images/arrow.png')}
              style={{
                height: 30,
                width: 30,
                resizeMode: 'contain',
                tintColor: 'white',
              }}></Image>
          </TouchableOpacity>
          <View style={{alignItems:'center'}}>
      
          <Text style={styles.text_header}>PRIVACY & POLICY</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <ScrollView>
          <View>
            <View className="Outer">
              <View className="inner-container">
                <Text>
                  Please read this privacy policy (the “Policy”) carefully to
                  understand how we use personal information. If you do not
                  agree with this Policy, your choice is not to use Fiverr.com
                  site and mobile applications and its related sites,
                  applications, services and goods or any other website operated
                  by Fiverr that links to this Policy (the “Site”). By accessing
                  or using this Site, you agree to this Policy. This Policy may
                  change from time to time; any changes we make to this Policy
                  will be posted on this Site, we will also take any other
                  steps, to the extent required by applicable law, including
                  notifying you and/or seeking your explicit consent to material
                  changes. Changes to this Policy are effective as of the stated
                  "Last Updated" date. Other than where we have sought such
                  explicit consent from you, your continued use of the Site
                  after we make changes will constitute acceptance of, and
                  agreement to be bound by, those changes, so please check the
                  Policy periodically for any updates or changes.
                </Text>
                <Text style={{marginTop: 5, fontWeight: 'bold'}}>
                  {' '}
                  How Long Do We Keep Personal Information
                </Text>
                <Text>
                  {' '}
                  We will keep personal information only for as long as is
                  required to fulfil the purpose for which it was collected.
                  However, in some cases we will retain personal information for
                  longer periods of time.{' '}
                </Text>
                <Text style={{marginTop: 5, fontWeight: 'bold'}}>
                  {' '}
                  Children Under the Age of 13{' '}
                </Text>
                <Text>
                  {' '}
                  Our Site is not intended for children under 13 years of age
                  and we do not knowingly collect personal information from
                  children under 13.{' '}
                </Text>
                <Text style={{marginTop: 5, fontWeight: 'bold'}}>
                  {' '}
                  Where We Store Personal Information
                </Text>
                <Text>
                  {' '}
                  Some of the personal information you provide to us will be
                  stored or processed on our behalf by third party suppliers and
                  data processors and may be located in our server
                </Text>
                <Text style={{marginTop: 5, fontWeight: 'bold'}}>
                  {' '}
                  Security
                </Text>
                <Text>
                  {' '}
                  We take great care in maintaining the security of the Site and
                  your information and in preventing unauthorized access, loss,
                  misuse, alteration, destruction or damage to it through
                  industry standard technologies and internal procedures.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
export default Policies;

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
});
