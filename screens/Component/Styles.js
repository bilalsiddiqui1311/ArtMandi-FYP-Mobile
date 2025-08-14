
import {StyleSheet, Dimensions} from 'react-native';
const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;
import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    margin: 0,
    width: '100%',
  },
  scrollView: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
  },
  imageBox: {
    width: '100%',
    padding: 30,
  },
  buttonContainer: {
    height: 50,
    justifyContent: 'center',
    // borderBottomWidth: 0.2,
    paddingLeft: 30,
  },
  buttonText: {
    color: colors.darkBlack,
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
  },
  footerContainer: {
    paddingBottom: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#03387e',
    opacity: 0.5,
  },
  toggleButton: {
    width: '70%',
    height: 50,
    marginLeft: 30,
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: colors.defaultBlack,
    justifyContent: 'space-between',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  toggleButtonPill: {
    backgroundColor: '#FEDB29',
    height: '100%',
    width: '50%',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  toggleButtonInactive: {
    backgroundColor: 'transparent',
    height: '100%',
    width: '50%',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  pillText: {
    fontFamily: 'Gilroy-SemiBold',
    color: colors.defaultBlack,
    fontSize: 14,
  },
  toggleText: {
    fontFamily: 'Gilroy-SemiBold',
    color: colors.white,
    fontSize: 14,
  },
});
