const Realm = require('realm');
import {toJS} from 'mobx';
const UserSchema = {
  name: 'User',
  properties: {
    name: 'string',
    dob: 'string',
    address: 'string',
    phone: 'string',
    password: 'string',
    id: 'string',
  },
};

export const addUserFavorite = (data, callback) => {
  console.log(data);
  Realm.open({schema: [UserSchema]})
    .then(realm => {
      realm.write(() => {
          realm.create(
            'User',
            {
              id: data.id ? data.id.toString() : '',
              name: data.name ? data.name.toString() : '',
              dob: data.dob ? data.dob.toString() : '',
              address: data.address ? data.address.toString() : '',
              phone: data.phone ? data.phone.toString() : '',
              password: data.password ? data.password.toString() : '',
            },
            true,
          );
        console.log('save user thành công');
        callback(realm.objects('User'));
      });
    })
    .catch(error => {
      console.log('addUserFavorite error');
      console.log(error);
    });
};

export const getAllUserFavorite = callback => {
  Realm.open({schema: [UserSchema]})
    .then(realm => {
      console.log('getAllUserFavorite thành công');
      let allUserFavorite = realm.objects('User');
      console.log(allUserFavorite);
      callback(allUserFavorite);
    })
    .catch(error => {
      console.log('getAllUserFavorite err');
      console.log(error);
    });
};

export const removeAllUserFavorite = callback => {
  Realm.open({schema: [UserSchema]}).then(realm => {
    realm
      .write(() => {
        let allVPs = realm.objects('User');
        realm.delete(allVPs);
        console.log('Xóa thành công');
      })
      .catch(error => {
        console.log('Xóa lỗi');
        console.log(error);

        //   callback(false);
      });
  });
  // .catch(error => {
  //   console.log('realm open UserSchema error');
  //   console.log(error);
  // });
};
