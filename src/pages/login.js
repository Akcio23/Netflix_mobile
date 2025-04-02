import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = async () => {
    const user = await AsyncStorage.getItem("user")
    if (!user) {
      alert("No registered users!")
      return
    }
    const userJson = JSON.parse(user)
    if (userJson.email === email && userJson.password === password) {
      navigation.navigate("Main")
    } else {
      alert("Invalid email or password!")
    }
  };

  const handlerCodden = () => {
    alert("Serviço fora do ar. Tente novamente mais tarde!")
  }

  const handleRegister = () => {
    navigation.navigate("RegisterUser")
  }

  return (
    <View style={styles.container}>

      <View style={styles.containerTop}>

        <View>
          <Image
            source={require('../../assets/image.png')}
            style={{ width: 166.15, height: 45 }} />
        </View>


        <Text style={styles.text}>Entrar</Text>
        <View style={styles.body}>

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#888" />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#888" />

          <View style={styles.buttonInput}>

            <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogin}>
              <Text style={styles.button}>Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.textSecond}>OU</Text>

            <TouchableOpacity style={styles.buttonCodigo} onPress={handlerCodden}>
              <Text style={styles.button}>Usar um código de acesso</Text>
            </TouchableOpacity>

            <Text style={styles.textDefault}>Esqueceu a senha?</Text>

            <Text style={styles.cadastro}>
              Primeira Vez aqui?
              <Text style={styles.cadastroUP} onPress={handleRegister}>
                Assine Agora
              </Text>
            </Text>

          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  containerTop: {
    paddingTop: "85",
    paddingLeft: "30",
    paddingRight: "30",
    flex: 1,
    gap: 50
  },
  body: {
    flex: 1,
    alignItems: "center",
    gap: 20

  },
  buttonInput: {
    flex: 1,
    width: "100%",
  },
  text: {
    color: "#ffff",
    fontSize: "50",
    fontWeight: 500,

  },
  textSecond: {
    color: "#fff",
    textAlign: "center",
    padding: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#474144",
    borderRadius: 5,
    padding: 20,
    width: "100%",
    backgroundColor: "#1c2432",
    color: "#fff",
    placeholderTextColor: "#fff"
  },
  buttonEntrar: {
    backgroundColor: "#e50914",
    borderRadius: 5,
    padding: 15,
    width: "100%",
    alignItems: "center",
    marginVertical: 5,

  },
  buttonCodigo: {
    backgroundColor: "#272727",
    borderRadius: 5,
    padding: 20,
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
  },
  button: {
    fontSize: 20,
    color: "#fff"
  },
  textDefault: {
    color: "#fff",
    textAlign: "center",
    margin: 10,
    textDecorationLine: "underline"
  },
  cadastro: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    margin: 20
  },
  cadastroUP: {
    fontWeight: 900
  }
});

export default Login;
