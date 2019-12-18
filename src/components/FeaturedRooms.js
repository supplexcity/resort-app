import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Title from "./Title";
import Room from "./Room";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    //const { greeting, value } = this.context;
    let { loading, featuredRooms: rooms } = this.context; //value of featuredRooms is assigned to var rooms
    //console.log(rooms);
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="featured rooms"></Title>
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
