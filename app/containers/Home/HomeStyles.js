import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: '#CCC',
    // backgroundColor : '#CCC',
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding : 10,
    borderColor: '#CCC',
    borderWidth : 1
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  avatarBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 100,
    overflow: 'hidden',
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
    marginBottom: 30,
  },
  avatarContainer: {
    // backgroundColor: '#000',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  line: {
    borderWidth: 1,
    width: '100%',
    position: 'absolute',
    top: 110,
    borderColor: '#CCC',
  },
  detailContainer: {
    alignItems: 'center',
  },
  inforTitle: {
    color: '#999',
    fontSize: 18,
    // fontFamily: 'Ubuntu,sans-serif',
  },
  inforDetail: {
    color: '#2c2e31',
    fontSize: 38,
    margin: 5,
    textTransform: 'lowercase',
    textAlign: 'center',
  },
  infoIconContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
  infoIcon: {
    // borderWidth: 1,
    // borderColor: '#CCC',
    width: 40,
    height: 40,
    marginHorizontal: 3,
  },

  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
});
