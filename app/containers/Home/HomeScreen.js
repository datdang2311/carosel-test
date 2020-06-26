import React, {Component} from 'react';
import {
  AppRegistry,
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {observer} from 'mobx-react';
import {toJS} from 'mobx';
import {Navigation} from 'react-native-navigation';
import moment from 'moment';
// import {Swiper} from 'react-native-deck-swiper';

import HomeStores from './HomeStores';
import styles from './HomeStyles';

var addresActive = require('../../images/Carousel/address-active.png');
var birthdayActive = require('../../images/Carousel/birthday-active.png');
var nameActive = require('../../images/Carousel/name-active.png');
var passwordActive = require('../../images/Carousel/password-active.png');
var phoneActive = require('../../images/Carousel/phone-active.png');

var stores;

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    stores = new HomeStores();
    this.getRandomUser = this.getRandomUser.bind(this);
    this.getInfoSelected = this.getInfoSelected.bind(this);
    this.saveUserToDB = this.saveUserToDB.bind(this);
    this.deleteAllFavoriteUserFromDB = this.deleteAllFavoriteUserFromDB.bind(
      this,
    );
    this.getAllUserFavoriteFromDB = this.getAllUserFavoriteFromDB.bind(this);
  }
  componentDidMount() {
    console.log('componentDidMount');

    this.navigationEventListener = Navigation.events().bindComponent(this);
  }
  componentDidAppear() {
    console.log('componentDidAppear');
    this.getRandomUser();
    this.getAllUserFavoriteFromDB();
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  getRandomUser() {
    stores.getRandomUser();
  }

  saveUserToDB() {
    console.log(stores.usersFavorite);
    let newUser = {
      id: stores.userRandomData.user.dob,
      name:
        stores.userRandomData.user.name.first +
        ' ' +
        stores.userRandomData.user.name.last,
      dob: stores.userRandomData.user.dob,
      address: stores.userRandomData.user.location.street,
      phone: stores.userRandomData.user.phone,
      password: stores.userRandomData.user.password,
    };

    stores.saveUserToDB(newUser);
  }

  getAllUserFavoriteFromDB() {
    stores.getAllUserFavoriteFromDB();
  }

  deleteAllFavoriteUserFromDB() {
    stores.deleteAllFavoriteUserFromDB();
  }

  getInfoSelected(indexSelected) {
    console.log('getInfoSelected');

    switch (indexSelected) {
      case 1:
        const name = stores.userRandomData.user.name;
        stores.userTitle = 'Hi, My name is';
        stores.userDetail = name.first + name.last;
        return;
      case 2:
        stores.userTitle = 'My birthday is';
        stores.userDetail = moment(+stores.userRandomData.user.dob).format(
          'DD/MM/YYYY',
        );
        return;
      case 3:
        stores.userTitle = 'My address is';
        stores.userDetail = stores.userRandomData.user.location.street;
        return;
      case 4:
        stores.userTitle = 'My phone number is';
        stores.userDetail = stores.userRandomData.user.phone;
        return;
      case 5:
        stores.userTitle = 'My password is';
        stores.userDetail = stores.userRandomData.user.password;
        return;
      default:
        break;
    }
  }
  renderUserFavorite({item}) {
    console.log('renderUserFavorite');

    console.log(item);
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>{item.name}</Text>
        <Text>
          {moment(+item.dob).format('DD/MM/YYYY')}
        </Text>
        <Text>{item.phone}</Text>
      </View>
    );
  }
  renderUserFavoriteListHeader() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View>
          <Text>name</Text>
        </View>
        <View>
          <Text>dob</Text>
        </View>
        <View>
          <Text>phone</Text>
        </View>
      </View>
    );
  }
  render() {
    const {
      container,
      cardContainer,
      avatar,
      avatarContainer,
      line,
      detailContainer,
      inforTitle,
      inforDetail,
      infoIconContainer,
      infoIcon,
      avatarBorder,
    } = styles;

    return (
      <View style={container}>
        {/* <Text onPress={this.getAllUserFavoriteFromDB}>
          getAllUserFavoriteFromDB
        </Text> */}

        {stores.userRandomData.user != undefined && (
          <View style={cardContainer}>
            <View style={line} />
            <View style={avatarContainer}>
              <View style={avatarBorder} onPress={this.getInfoSelected}>
                <Image
                  style={avatar}
                  resizeMode={'stretch'}
                  source={{uri: stores.userRandomData.user.picture}}
                />
              </View>
            </View>

            <View style={detailContainer}>
              <Text style={inforTitle} onPress={this.getInfoSelected}>
                {stores.userTitle}
              </Text>
              <Text style={inforDetail} onPress={this.getInfoSelected}>
                {stores.userDetail}
              </Text>
            </View>

            <View style={infoIconContainer}>
              <TouchableOpacity onPress={() => this.getInfoSelected(1)}>
                <Image
                  source={nameActive}
                  resizeMode={'contain'}
                  style={infoIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.getInfoSelected(2)}>
                <Image
                  source={birthdayActive}
                  style={infoIcon}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.getInfoSelected(3)}>
                <Image
                  source={addresActive}
                  style={infoIcon}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.getInfoSelected(4)}>
                <Image
                  source={phoneActive}
                  style={infoIcon}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.getInfoSelected(5)}>
                <Image
                  source={passwordActive}
                  style={infoIcon}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={this.getRandomUser}>
            <Text>Swipe left </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.saveUserToDB}>
            <Text>Swipe right</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={this.deleteAllFavoriteUserFromDB}>
            <Text>Remove all user favorite </Text>
          </TouchableOpacity>
        </View> */}

        <View>
          <FlatList
            data={stores.usersFavorite}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={this.renderUserFavorite}
            ListHeaderComponent={this.renderUserFavoriteListHeader}
          />
        </View>
      </View>
    );
  }
}

export default observer(HomeScreen);
