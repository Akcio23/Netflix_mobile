import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from '@expo/vector-icons';

const Main = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  const handleHome = () => {
    navigation.navigate("Login")
  }

  const handleSearch = () => {
    navigation.navigate("Search")
  }

  const handleMyList = () => {
    navigation.navigate("MyList")
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

      {user && <Text style={styles.text}>Bem vindo {user.user}</Text>}

      <View style={styles.options}>

        <TouchableOpacity onPress={handleSearch}>
          <MaterialIcons name="search" size={150} color="#fff" style={styles.buttons} />
          <Text style={styles.textBox}>Pesquisar Filmes</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleMyList}>
          <MaterialIcons name="checklist" size={150} color="#fff" style={styles.buttonsT} />
          <Text style={styles.textBox}>Minha Lista</Text>

        </TouchableOpacity>

      </View>
      <TouchableOpacity style={styles.buttonEntrar} onPress={handleHome} >
        <Text style={styles.button}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    gap: 40,
    paddingLeft: "30",
    paddingRight: "30",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 40,
    textAlign: "left"
  },
  options: {
    display: "flex",
    flexDirection: "row",
    gap: 30
  },
  buttons: {
    backgroundColor: "#479ced",
    borderRadius: 25,
    height: 150
  },
  buttonsT: {
    backgroundColor: "#ff8300",
    borderRadius: 25,
    height: 150
  },
  textBox: {
    color: "#fff",
    fontSize: 20,
    marginTop: 10,
    textAlign: "center"
  },
  buttonEntrar: {
    backgroundColor: "#e50914",
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
  textCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  }
});

export default Main;
