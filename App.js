/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useState, useRef} from 'react';
import axios from 'axios';
import LottieView from 'lottie-react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';

const App = () => {
  const [loginid, setloginId] = useState('');
  const [loginpw, setloginPw] = useState('');
  const loginidRef = useRef();
  const loginpwRef = useRef();
  const onSubmit = useCallback(async () => {
    if (!loginid || !loginid.trim()) {
      return Alert.alert('알림', '아이디를 확인해주세요!');
    }
    if (!loginpw || !loginpw.trim()) {
      return Alert.alert('알림', '비밀번호를 확인해주세요!');
    }
    try {
      const form = new FormData();
      form.append('login_id', loginid);
      form.append('login_pw', loginpw);
      form.append('login_auto', '0');
      const res = await axios({
        method: 'POST',
        url: 'https://meetinkorea.kr/member/login.app.php',
        headers: {'Content-type': 'application/x-www-form-urlencoded'},
        data: `login_id=${loginid}&login_pw=${loginpw}&login_auto=0`,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log(loginid);
      console.log(loginpw);
    }
  }, [loginid, loginpw]);

  onChangeId = useCallback(text => {
    setloginId(text);
  }, []);
  onChangePw = useCallback(text => {
    setloginPw(text);
  }, []);

  const CanGoNext = loginid || loginpw;
  return (
    <SafeAreaView>
      {/* <View style={styles.Wrapper}>
        <View style={styles.buttonZone}>

          <TextInput
            style={styles.TextInput}
            placeholder="아이디를 입력해주세요."
            value={loginid}
            onChangeText={onChangeId}
            importantForAutofill="yes"
            autoComplete="name"
            textContentType="name"
            returnKeyType="next"
            ref={loginidRef}
            blurOnSubmit={false}
            clearButtonMode="while-editing"
            onSubmitEditing={() => {
              pwRef.current?.focus();
            }}></TextInput>
        </View>
        <View style={styles.buttonZone}>
          <TextInput
            style={styles.TextInput}
            placeholder="비밀번호를 입력해주세요."
            value={loginpw}
            onChangeText={onChangePw}
            secureTextEntry
            importantForAutofill="yes"
            autoComplete="password"
            ref={loginpwRef}
            clearButtonMode="while-editing"
            onSubmitEditing={onSubmit}
            textContentType="password"></TextInput>
        </View>
        <View style={styles.buttonZone}>
          <Pressable
            onPress={onSubmit}
            style={
              !CanGoNext
                ? styles.loginButton
                : [styles.loginButton, styles.loginButtonActive]
            }
            disabled={!CanGoNext}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </Pressable>
          <Pressable>
            <Text>회원가입</Text>
          </Pressable>
        </View>
      </View> */}
      <View>
        <Text>dadddd</Text>
        <LottieView
          style={{marginLeft: 23, marginTop: 20, width: 500, height: 1000}}
          source={require('./mik.json')}
          autoPlay
          loop
        />
        <Text>dddddd</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 170,
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonActive: {
    backgroundColor: '#e2343a',
  },
  loginButtonText: {
    color: 'white',
  },
  buttonZone: {
    alignItems: 'center',
  },
  TextInput: {
    height: 50,
    width: 380,
    borderRadius: 5,
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: 15,
    fontSize: 16,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  Wrapper: {
    marginTop: 200,
  },
});

export default App;
