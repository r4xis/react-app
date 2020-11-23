import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

class ModalComponent extends Component {
  state = {
    modalVisible: false,
    name: "",
    current_price: "",
    previous_price: "",
    unitList: ["kg", "litre", "adet/paket"],
    selectedUnit: 0,
    unit: "kg",
  };

  componentDidMount() {
    this.setState({ modalVisible: true });
  }

  onModal() {
    const { name, current_price, previous_price, unit } = this.state;
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": this.props.token,
      },
    };
    const body = JSON.stringify({
      name,
      current_price,
      previous_price,
      unit,
    });
    axios
      .post("http://192.168.0.13:5000/products", body, config)
      .catch((err) => {
        console.log(err);
      });
    this.setState({
      modalVisible: false,
    });
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.setState({ modalVisible: false });
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => {
            this.setState({ modalVisible: false });
          }}
        ></TouchableOpacity>
        <View style={styles.modal}>
          <Text style={styles.header}>Ürün Adı:</Text>
          <TextInput
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}
            placeholder="Ürün Adı"
            placeholderTextColor="gray"
            style={styles.input}
          />
          <Text style={styles.header}>Güncel Birim Fiyatı:</Text>
          <TextInput
            value={this.state.current_price}
            onChangeText={(current_price) => this.setState({ current_price })}
            placeholder="TRY"
            placeholderTextColor="gray"
            style={styles.input}
          />
          <Text style={styles.header}>Eski Birim Fiyatı:</Text>
          <TextInput
            value={this.state.previous_price}
            onChangeText={(previous_price) => this.setState({ previous_price })}
            placeholder="TRY"
            placeholderTextColor="gray"
            style={styles.input}
          />
          <Text style={[styles.header, styles.header2]}>Birimi:</Text>
          <View style={{ borderWidth: 1 }}>
            <Picker
              style={{ height: 40, width: 100 }}
              selectedValue={this.state.selectedUnit}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({
                  unit: this.state.unitList[itemValue],
                  selectedUnit: itemValue,
                })
              }
              mode="dropdown"
            >
              {this.state.unitList.map((item, index) => {
                return <Picker.Item label={item} value={index} key={index} />;
              })}
            </Picker>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.onModal();
            }}
          >
            <Text style={styles.buttonText}>Ekle</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  modal: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  header2: {
    marginBottom: 5,
  },
  button: {
    width: 100,
    alignItems: "center",
    backgroundColor: "#0028BD",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 15,
    color: "#fff",
  },
  input: {
    width: 200,
    fontSize: 16,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 5,
  },
});

export default ModalComponent;
