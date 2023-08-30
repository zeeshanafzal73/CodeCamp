import React, { Component } from "react";
import './MemeGenerator.css'
export default class MemeGenrator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemesImages: [],
    };
  }
  componentDidMount(){
    fetch('https://api.imgflip.com/get_memes')
    .then(response=>response.json())
    .then(response=>{
      const {memes} = response.data
      this.setState({allMemesImages : memes})
    })
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit =(e)=>{
    e.preventDefault()
    const randNum= Math.floor(Math.random()*this.state.allMemesImages.length)
    const imageLink=this.state.allMemesImages[randNum].url
    this.setState({randomImage:imageLink})
 
  }
  render() {
    return (
      <>
      <div className="meme-container">
        <form onSubmit={this.handleSubmit} className="">
          <div className="container">
            <h2>Enter Top Text</h2>
            <input type="text" name="topText" onChange={this.handleChange} />
            <h2>Bottom Text</h2>
            <input
              type="text"
              name="bottomText"
              onChange={this.handleChange}
            ></input>
            <button type="submit" >Gen</button>
            
          </div>
        </form>

        <div className="meme">
        <img   className="meme-image" src={this.state.randomImage} alt="Random Img" />
        <h2 className="top">{this.state.topText}</h2>
        <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
        </div>
      </>
    );
  }
}
