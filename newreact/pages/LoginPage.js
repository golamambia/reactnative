import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

const LoginPage = ({navigation}) => {
  const [userName, setUserName] = useState('AboutReact');
  const getDataUsingGet = () => {
    //GET request
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'GET',
      //Request Type
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        alert(JSON.stringify(error));
        console.error(error);
      });
  };
  const getDataUsingPost = () => {
    //POST json
    var dataToSend = {title: 'foo', body: 'bar', userId: 1};
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    //POST request
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        'Content-Type': 
          'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          React Native Pass Value From One Screen to Another
          Using React Navigation
        </Text>
        <Text style={styles.textStyle}>
          Please insert your name to pass it to second screen
        </Text>
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={getDataUsingGet}>
            <Text style={styles.textStyle}>
              Get Data Using GET
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={getDataUsingPost}>
            <Text style={styles.textStyle}>
              Get Data Using POST
            </Text>
          </TouchableOpacity>
        {/*Input to get the value from the user*/}
        <TextInput
          value={userName}
          onChangeText={(username) => setUserName(username)}
          placeholder={'Enter Any value'}
          style={styles.inputStyle}
        />
        {/* On click of the button we will send the data as a Json
          From here to the Second Screen using navigation */}
        <Button
          title="Go Home"
          //Button Title
          onPress={() =>
            navigation.navigate('FirstPage', {
              paramKey: userName,
            })
          }
        />
      </View>
      
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
  },
});