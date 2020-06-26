import React, {Component} from 'react';

class CardComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={cardContainer}>
        <View style={line} />
        {/* Avatar */}
        <View style={avatarContainer}>
          <View style={avatarBorder} onPress={this.getInfoSelected}>
            <Image
              style={avatar}
              resizeMode={'stretch'}
              source={{uri: props.user.picture}}
            />
          </View>
        </View>

        {/* Information */}
        <View style={detailContainer}>
          <Text style={inforTitle} onPress={this.getInfoSelected}>
            {props.userTitle}
          </Text>
          <Text style={inforDetail} onPress={this.getInfoSelected}>
            {props.userDetail}
          </Text>
        </View>

        {/* Icon info */}
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
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
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
});
