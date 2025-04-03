import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image
} from "react-native";

export default class RegisterUser extends Component {
  state = {
    user: "",
    email: "",
    phone: "",
    cpf: "",
    curso: "",
    password: "",
    confirmedPassword: "",
    
  };

  handleCadastro = async () => {
    const { user, email, phone, cpf, curso, password, confirmedPassword } = this.state;

    if (!user || !email || !phone  || !cpf || !curso || !password || !confirmedPassword) {
      alert("Preencha todos os campos!");
      return;
    }
    const data = {
      user,
      email,
      phone,
      cpf,
      curso,
      password,
      confirmedPassword
    };
    await AsyncStorage.setItem("user", JSON.stringify(data));
    this.props.navigation.navigate("RegisterSucess");
  };

  handlerHome = ()=> {
    this.props.navigation.navigate("Login");
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
            source={require('../../assets/image.png')}
            style={{ width: 166.15, height: 45 }} />

          <Text style={styles.text}>Cadastre-se</Text>
        <View style={styles.body}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={this.state.user}
          onChangeText={(user) => this.setState({ user })}
          placeholderTextColor="#888"
        />
          <TextInput
          style={styles.input}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="telefone"
          value={this.state.phone}
          onChangeText={(phone) => this.setState({ phone })}
          placeholderTextColor="#888"
        />
          <TextInput
          style={styles.input}
          placeholder="CPF"
          value={this.state.cpf}
          onChangeText={(cpf) => this.setState({ cpf })}
          placeholderTextColor="#888"
        />
          <TextInput
          style={styles.input}
          placeholder="Curso"
          value={this.state.curso}
          onChangeText={(curso) => this.setState({ curso })}
          placeholderTextColor="#888"
        />
          <TextInput
          style={styles.input}
          placeholder="Senha"
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
          placeholderTextColor="#888"
        />
          <TextInput
          style={styles.input}
          placeholder="Confirme a senha"
          secureTextEntry={true}
          value={this.state.confirmedPassword}
          onChangeText={(confirmedPassword) => this.setState({ confirmedPassword })}
          placeholderTextColor="#888"
        />
        
        <TouchableOpacity style={styles.button} onPress={this.handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonvoltar} onPress={this.handlerHome }>
        <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: "85",
    paddingLeft: "30",
    paddingRight: "30",
    gap:30
  },
  body:{
    flex: 1,
    gap: 10
  },
  text: {
    color: "#ffff",
    fontSize: 50,
    fontWeight: 500,
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
  button: {
    backgroundColor: "#e50914",
    borderRadius: 5,
    padding: 15,
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff"
  },
  buttonvoltar: {
    backgroundColor: "#272727",
    borderRadius: 5,
    padding: 15,
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
  },
});
