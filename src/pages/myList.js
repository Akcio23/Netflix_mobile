import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "../components/Card"

const MyList = () => {
  const [user, setUser] = useState(null);

  const navigation = useNavigation();

  const handlerMain = () => {
    navigation.navigate("Main")
  }

  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = await AsyncStorage.getItem("user");

      if (storedUser) {
        const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser);
      }
    };
    fetchUser();
  }, []);

  return (
    <View style={styles.body}>
      <Text style={styles.textPrimary}>Minha Lista</Text>

      {!user?.movies || user.movies.length === 0 ? (
        <View style={styles.content}>
          <Image
            source={require('../../assets/avatar.png')}
            style={{ width: 172, height: 172 }}
          />
          <Text style={styles.textSecond}>Sem filmes assistidos</Text>

          <TouchableOpacity style={styles.buttonBack} onPress={handlerMain}>
          <Text style={styles.button}>Voltar</Text>
        </TouchableOpacity>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardsContainer}>
          {user.movies.map((movie, index) => (
            <View style={styles.cardWrapper} key={index}>
              <Card movie={movie} />
            </View>
          ))}
        </View>
      
        <TouchableOpacity style={styles.buttonBack} onPress={handlerMain}>
          <Text style={styles.button}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
      )}

      
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: "100",
    paddingLeft: "30",
    paddingRight: "30",
    paddingBottom: "100",
  },
  textPrimary: {
    color: "#fff",
    fontSize: 35,
    textAlign: "center",
    marginBottom: 10
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textSecond: {
    color: "#fff",
    textAlign: "center",
    padding: 20
  },
  buttonBack: {
    backgroundColor: "#272727",
    borderRadius: 5,
    padding: 15,
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
  },
  button: {
    fontSize: 20,
    color: "#fff"
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  cardWrapper: {
    width: '48%',
    marginBottom: 20,
  },
  scrollContainer: {
    paddingTop: 20,
    paddingBottom: 80,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  cardWrapper: {
    width: '48%',
    marginBottom: 20,
  },
});

export default MyList;


