import React, { useState, useEffect } from 'react';

import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { StyleSheet, Text, View, Button, Image, ActivityIndicator } from 'react'
import { Async } from 'react-async';
import { auth } from './Firebase';

const GoogleAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await Async.getItem('user');
        if (userData !== null) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();

    const handleRedirectResult = async () => {
      setLoading(true);
      const result = await getRedirectResult(auth);
      if (result && result.user) {
        const userData = {
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };
        setUser(userData);
        await Async.setItem('user', JSON.stringify(userData));
      }
      setLoading(false);
    };

    handleRedirectResult();
  }, []);

  const google = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await Async.removeItem('user');
      setUser(null);
     
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      {user ? (
        <View style={styles.userInfo}>
          <Text>User Login Successful</Text>
          <Text>Name: {user.displayName}</Text>
          <Text>Email: {user.email}</Text>
          <Image source={{ uri: user.photoURL }} style={styles.profileImage} />
          <Button title="Logout" onPress={logout} />
        </View>
      ) : (
        <View>
          <Text style={{ padding: 10, fontSize: 20, fontWeight: "bold" }}>Sign In With Google</Text>
          <Button title="Google" onPress={google} />
        </View>
      )}
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfo: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default GoogleAuth;
