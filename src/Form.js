import "./Stylesheets/styles.css";
import React, { Component } from "react";
import "./Stylesheets/formstyle.css";
import Page from "./Slike/pageclass.png";

export class Form extends Component {
  state = {
    ime: "",
    prezime: "",
    lozinka: "",
    email: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <div className="bgform">
          <div className="header-container">
            <h1>
              Napravite profil za dodatan sadržaj i za obavijesti za nove
              analize!!
            </h1>
            <img src={Page} className="pageclass" alt="Page" />
          </div>
          <hr className="formhr" />
          <div className="formmain">
            <div className="forme">
              <form onSubmit={this.onSubmit}>
                <h2>Unesite ime:</h2>
                <input
                  placeholder="ime"
                  value={this.state.ime}
                  onChange={(e) => this.setState({ ime: e.target.value })}
                />
                <h2>Unesite prezime:</h2>
                <input
                  placeholder="prezime"
                  value={this.state.prezime}
                  onChange={(e) => this.setState({ prezime: e.target.value })}
                />
                <h2>Unesite e-mail:</h2>
                <input
                  placeholder="email"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <h2>Unesite lozinku:</h2>
                <input
                  type="password"
                  placeholder="lozinka"
                  value={this.state.lozinka}
                  onChange={(e) => this.setState({ lozinka: e.target.value })}
                />
                <br />
                <button type="submit">Potvrdi</button>
              </form>
            </div>
            <div className="inputodg">
              <div className="inputiacc">
                <h3>Ime: {this.state.ime}</h3>
                <h3>Prezime: {this.state.prezime}</h3>
                <h3>E-mail: {this.state.email}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
