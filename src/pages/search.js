'use client'
import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import auth from "../services/config.axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Search = () => {
  const navigation = useNavigation();

  const [value, setValue] = useState('')

  const searchInfo = async (value) =>{
    try {
      const response = await auth.get('',{
        params:{
          t: value
        }
      })

      if (!response.data.Title){
        Alert.alert('Filme não encontrado')
        return 
      }

      await savedInfo(response.data)

      Alert.alert("Filme adicionado a lista", response.data.Title)

    }catch(erro){
      Alert("Serviço indisponivel")
    }
  }

  const savedInfo = async (data) => {
    try {
      if (!data || typeof data !== 'object' || !data.Title) {
        Alert.alert('Erro tente novamente!');
        return;
      }

      const user = await AsyncStorage.getItem("user");
      const userObj = user ? JSON.parse(user) : {};
  
      const updatedUser = {
        ...userObj,
        movies: [...(userObj.movies || []), data]
      };
  
      await AsyncStorage.setItem("user", JSON.stringify(updatedUser));
      

    } catch (error) {
      console.error("Erro ao salvar dados no AsyncStorage:", error);
    }
  };

  const handleMain = () => {
    navigation.navigate("Main")
  }

  const handleMyList = () => {
    navigation.navigate("MyList")
  }
  return (
    <View style={styles.body}>
      <Text style={styles.textPrimary}>Qual filme procura?</Text>
      <TextInput style={styles.textinput}
      value={value}
      onChangeText={(value) => setValue(value)}
      />

      <View style={styles.container} >
        <TouchableOpacity style={styles.buttonAdd} onPress={() => searchInfo(value)} >
          <Text style={styles.button}>Adicionar a minha lista</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRed} onPress={handleMyList}>
          <Text style={styles.button}>Ir para minha lista</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonBack} onPress={handleMain}>
        <Text style={styles.button}>Voltar</Text>
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
    gap: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
  textPrimary: {
    color: "#fff",
    fontSize: 35
  },
  textinput: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    width: "100%"
  },
  buttonAdd: {
    backgroundColor: "#e50914",
    borderRadius: 5,
    padding: 15,
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
  },
  buttonRed: {
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
  container: {
    width: '100%',
    gap: 10
  },
  buttonBack: {
    backgroundColor: "#272727",
    borderRadius: 5,
    padding: 15,
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
    marginTop: 100
  },

});

export default Search;


