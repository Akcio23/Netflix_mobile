import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";

const Details = () => {
  const route = useRoute();
  const { movie } = route.params;
  const navigation = useNavigation();


  const handleMylist = () => {
    navigation.navigate("MyList")
  }

  const handleDeleteMovie = async () => {
    try {
      const storedUser = await AsyncStorage.getItem("user");

      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);

        const updatedMovies = parsedUser.movies.filter(
          (m) => m.imdbID !== movie.imdbID
        );
        const updatedUser = { ...parsedUser, movies: updatedMovies };

        await AsyncStorage.setItem("user", JSON.stringify(updatedUser));

        Alert.alert("Filme removido")
        navigation.navigate("MyList");
      }
    } catch (error) {
      console.error("Erro ao remover o filme:", error);
    }
  };



  return (
    
  
    <ScrollView style={styles.body}>
      <Text style={styles.textPrimary}>Sobre o filme</Text>

      <View style={{ alignItems: 'center', marginTop: 50, marginBottom: 20 }}>
        <Image
          source={{ uri: movie.Poster }}
          style={{
            width: 150,
            height: 200,
            borderRadius: 8,
            marginBottom: 10
          }}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.cardText}>Titulo: {movie.Title}</Text>
        <Text style={styles.cardText}>Genero: {movie.Genre}</Text>
        <Text style={styles.cardText}>Tempo de duração: {movie.Runtime}</Text>
        <Text style={styles.cardText}>Ano: {movie.Year}</Text>
        <Text style={styles.cardText}>Diretor: {movie.Director}</Text>
        <Text style={styles.cardText}>Metascore: {movie.Metascore}</Text>
      </View>

      <TouchableOpacity style={styles.buttonEx} onPress={handleDeleteMovie}>
        <Text style={styles.button}>Excluir</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonBack} onPress={handleMylist}>
        <Text style={styles.button}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: 100,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 100,
  },
  content: {
    flex: 1,
    marginLeft: 50
  },
  textPrimary: {
    color: "#fff",
    fontSize: 35,
    textAlign: "center"
  },
  cardText: {
    color: "#fff",
    textAlign: "left",
    marginTop: 5,
    fontSize: 20,
    paddingBottom: 5
  },
  buttonBack: {
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
  buttonEx: {
    backgroundColor: "#272727",
    borderRadius: 5,
    padding: 15,
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  
});

export default Details;
