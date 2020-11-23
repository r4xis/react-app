import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import userImage from "./default-user.jpg";

function Main() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [userCard, setUserCard] = useState(false);
  const [userID, setUserID] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin")
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:5000/admin/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRowClick = (id) => {
    setUserCard(true);
    setUserID(id);
  };
  return products[0] && users[0] ? (
    <div id="Main">
      {userCard ? (
        <Card className="card">
          <Card.Header
            style={{
              width: "100%",
              fontSize: "25px",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            Kullanıcı Bilgisi
          </Card.Header>
          <Card.Img
            style={{ width: "100px" }}
            src={userImage}
            className="image"
          />
          <Card.Body className="cardBody">
            <Card.Subtitle className="cardText">
              <span>User ID:</span> {users[userID - 1].id}
            </Card.Subtitle>
            <Card.Text className="cardText">
              <span>Email:</span> {users[userID - 1].email}
            </Card.Text>
            <Card.Text className="cardText">
              <span>Kayıt Tarihi:</span>{" "}
              {users[userID - 1].createdAt.split("T")[0]}{" "}
              {users[userID - 1].createdAt.split("T")[1].split("Z")[0]}
            </Card.Text>
          </Card.Body>
        </Card>
      ) : null}
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Ürün Adı</th>
            <th>Birimi</th>
            <th>Eski Fiyatı</th>
            <th>Güncel Fiyatı</th>
            <th>Kullanıcı</th>
          </tr>
        </thead>
        {products.map((data) => {
          return (
            <tbody key={data.id}>
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.unit}</td>
                <td>{data.previous_price} TRY</td>
                <td>{data.current_price} TRY</td>
                <td onClick={() => handleRowClick(users[data.owner - 1].id)}>
                  {users[data.owner - 1].email}
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  ) : (
    <div id="Main"></div>
  );
}

export default Main;
