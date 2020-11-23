import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ModalComponent from "./Modal";

export default class Products extends Component {
  state = {
    products: [],
    table_header: [
      "Ürün Adı",
      "Birimi",
      "Güncel Fiyatı",
      "Önceki Fiyatı",
      "Değişim Oranı",
    ],
    modalVisible: false,
  };

  componentDidMount() {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": this.props.route.params.params.tokenConfig.token.toString(),
      },
    };
    axios
      .get("http://192.168.0.13:5000/products", config)
      .then((res) => {
        this.setState({ products: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate(prevState, prevProps) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": this.props.route.params.params.tokenConfig.token.toString(),
      },
    };
    axios
      .get("http://192.168.0.13:5000/products", config)
      .then((res) => {
        this.setState({ products: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }

  onAddProduct() {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": this.props.route.params.params.tokenConfig.token.toString(),
      },
    };
    axios
      .post("http://192.168.0.13:5000/products", product, config)
      .catch((err) => {
        console.log(err);
      });
  }

  changeRate(curPrice, prePrice) {
    var changeRate = ((curPrice / prePrice) * 100 - 100).toFixed(2);
    if (changeRate < 0) {
      changeRate = changeRate * -1;
    }
    return changeRate;
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/background/bg.jpg")}
          style={styles.container}
        >
          <View style={styles.body}>
            <Text style={styles.header}>Ürün Adı</Text>
            <Text style={styles.header}>Birimi</Text>
            <Text style={styles.header}>Eski Fiyatı</Text>
            <Text style={styles.header}>Güncel Fiyatı</Text>
            <Text style={styles.header}>Değişim Oranı</Text>
          </View>
          {this.state.products.map((data) => {
            return (
              <View
                key={data.id}
                style={[styles.body, data.id % 2 === 0 ? styles.body2 : null]}
              >
                <Text style={styles.list}>{data.name}</Text>
                <Text style={styles.list}>{data.unit}</Text>
                <Text style={styles.list}>{data.previous_price} TRY</Text>
                <Text style={styles.list}>{data.current_price} TRY</Text>
                <Text style={styles.list}>
                  <FontAwesomeIcon
                    icon={
                      (
                        (data.current_price / data.previous_price) * 100 -
                        100
                      ).toFixed(2) > 0
                        ? faArrowUp
                        : faArrowDown
                    }
                    size={12}
                    style={
                      (
                        (data.current_price / data.previous_price) * 100 -
                        100
                      ).toFixed(2) < 0
                        ? { backgroundColor: "green", color: "#fff" }
                        : { backgroundColor: "red", color: "#fff" }
                    }
                  />{" "}
                  {this.changeRate(data.current_price, data.previous_price)}%
                </Text>
              </View>
            );
          })}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setState({ modalVisible: !this.state.modalVisible });
            }}
          >
            <Text style={styles.buttonText}> Yeni Ürün Ekle </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.replace("Home");
            }}
          >
            <Text style={styles.buttonText}> Çıkış </Text>
          </TouchableOpacity>
          {this.state.modalVisible ? (
            <ModalComponent
              token={this.props.route.params.params.tokenConfig.token.toString()}
              url={this.props.url}
            />
          ) : null}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  body: {
    alignItems: "center",
    flexDirection: "row",
    borderTopWidth: 0.25,
    borderBottomWidth: 0.25,
    backgroundColor: "#E8E8E8",
  },
  body2: {
    backgroundColor: "#DCDCDC",
  },
  list: {
    fontSize: 14,
    flex: 1,
    padding: 5,
    textAlign: "center",
  },
  header: {
    backgroundColor: "#0089FF",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    minHeight: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#F6AB2B",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
});
