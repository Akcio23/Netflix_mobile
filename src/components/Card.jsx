import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Card = ({ movie }) => {
  if (!movie || typeof movie !== 'object' || !movie.Title) return null;
  const navigation = useNavigation();

  const handleDetails = () => {
    navigation.navigate("Details",{ movie })
  }
  
  return (
    
    <TouchableOpacity onPress={handleDetails} style={styles.card}  >

      <Image
        source={{ uri: movie.Poster }}
        style={{ width: 150, height: 200, borderRadius: 8, marginBottom: 10}}
      />
      <Text style={styles.cardText}>{movie.Title}</Text>
      <Text style={styles.cardText}>Ano: {movie.Year}</Text>

    <TouchableOpacity style={styles.buttonDetails} onPress={handleDetails}>
      <Text style={styles.textButton}>Detalhes</Text>
    </TouchableOpacity>
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  cardText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
  },
  buttonDetails: {
    backgroundColor:"#fff",
    padding: 10,
    paddingHorizontal:35,
    borderRadius: 5,
    margin: 10
  },
  textButton: {
    color: "#b31515"
  }
});

export default Card;
