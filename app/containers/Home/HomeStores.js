import Request from '../../api/Request';
import {extendObservable, toJS} from 'mobx';
import moment from 'moment';
import {
  getAllUserFavorite,
  addUserFavorite,
  removeAllUserFavorite,
} from '../../commons/Database';
class HomeStores {
  constructor() {
    extendObservable(this, {
      userRandomData: {},
      usersFavorite: [],
      userDetailSelected: 1,
      userTitle: '',
      userDetail: '',
    });
  }

  getRandomUser() {
    console.log('getRandomUser');

    Request.getRandomUser(data => {
      this.userRandomData = data;
      let arrPicture = this.userRandomData.user.picture.split(':');
      this.userRandomData.user.picture = arrPicture[0] + 's:' + arrPicture[1];
      this.setUserDetail();
      console.log(toJS(this.userRandomData));
    });
  }

  setUserDetail() {
    console.log('setUserDetail');
    const name = this.userRandomData.user.name;
    this.userTitle = 'Hi, My name is';
    this.userDetail = name.first + ' ' + name.last;
  }

  getAllUserFavoriteFromDB() {
    getAllUserFavorite(data => {
      console.log(data);

      if (data.length == 0) this.usersFavorite = [];
      else {
        this.usersFavorite = data;
      }
      console.log(this.usersFavorite);
    });
  }

  saveUserToDB(newUser) {
    console.log('saveUserToDB');
    addUserFavorite(newUser, data => {
      this.usersFavorite = data;
    });
  }

  deleteAllFavoriteUserFromDB() {
    removeAllUserFavorite();
  }

  getNewUser() {}
}
export default HomeStores;
