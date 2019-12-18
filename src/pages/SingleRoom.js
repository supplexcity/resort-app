import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import Banner from "../components/banner";
import Hero from "../components/Hero";
import defaultBcg from "../images/room-1.jpeg";
import StyledHero from "../components/StyledHero";

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  //componentDidMount()
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);
    if (!room) {
      //for urls whose room is not present
      return (
        <div className="error">
          <h3>No such rooms found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }
    const {
      //destructoring
      name,
      breakfast,
      pets,
      capacity,
      size,
      price,
      extras,
      description,
      images
    } = room;
    const [mainImg, ...defaultImg] = images;
    console.log(defaultImg); //rest of images except first
    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((image, index) => {
              return <img key={index} src={image} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>deatils</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((extra, index) => {
              return <li key={index}>- {extra}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
