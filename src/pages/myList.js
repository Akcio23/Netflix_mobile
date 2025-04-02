import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MyList = () => {
  const navigation = useNavigation();

  const handlerMain = () => {
    navigation.navigate("Main")
  }
  return (
    <View style={styles.body}>
      <Text style={styles.textPrimary} >Minha Lista</Text>

      <View style={styles.content}>
        <Image
          source={require('../../assets/avatar.png')}
          style={{ width: 172, height: 172 }} />
        <Text style={styles.textSecond} >Sem filmes assistidos</Text>
      </View>

      <TouchableOpacity style={styles.buttonBack} onPress={handlerMain}>
        <Text style={styles.button}>Voltar</Text>
      </TouchableOpacity>
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
    textAlign: "center"
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

});

export default MyList;


