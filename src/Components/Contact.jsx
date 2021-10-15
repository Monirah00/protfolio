import React, { Component } from "react";

export default class Contact extends Component {
  state = {
    text: "",
    email: "",
    library: "React",
  };
  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "email") {
      this.setState({
        email: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        library: e.target.value,
      });
    }
  };
  submitHandler = (e) => {
    const { text, email, library } = this.state;
    e.preventDefault();
    console.log(text, email, library);
  };
  render() {
    const { text, email, library } = this.state;
    return (
      <div>
        <section className="Contact-bg bg-black">
          <div className="row">
            <h2 className="Contact-Me">Contact Me</h2>
            <hr className="text-white" />
            <div className="col-lg-6 col-12">
              <form
                className="from-control text-center p-5 text-white"
                onSubmit={this.submitHandler}
              >
                <label className="label">Name : </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  value={text}
                  onChange={this.handleChange}
                />
                <br /> <br />
                <label className="label">Email : </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={this.handleChange}
                />
                <br /> <br />
                <select
                  className="option"
                  value={library}
                  onChange={this.handleChange}
                >
                  <option value="React">React</option>
                  <option value="Angular">Angular</option>
                </select>
                <br /> <br />
                <button className="btn btn-info" type="submit">
                  Submit Now
                </button>
              </form>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="Alladdress">
                <h2 className="Details">My Address</h2>
                <p className="Details">Present Home : Dhanmondi-32</p>
                <p className="Details">House : 58/C,Shukrabad</p>
                <p className="Details">Email : nerob0000@gmail.com</p>
                <p className="Details">GitHub : Monirah00</p>
                <p className="Details">Contact No : 01756808137</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
