import React from "react";
import axios from "axios";
import { axiosConfig, baseUrl } from "../pages/CreateUserPage"

export default class UsersListPage extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getAllUsers();
  }
  getAllUsers = async () => {
    try {
      const response = await axios.get(baseUrl, axiosConfig);
      this.setState({ users: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  deleteUser = (id) => {
    if (window.confirm("Deseja mesmo deletar o usuário?")) {
      axios
        .delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          axiosConfig
        )
        .then((res) => {
          this.getAllUsers();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    const mapUsers = this.state.users.map((user) => {
      return (
        <div key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => this.deleteUser(user.id)}>Deletar</button>
        </div>
      );
    });
    return (
      <div>
        <h2>Lista de Usuários</h2>
        {mapUsers}
      </div>
    );
  }
}