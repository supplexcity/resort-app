import React from "react";
import Room from "./Room";

const RoomList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(room => {
          console.log(room);
          return <Room key={room.id} room={room} />;
        })}
      </div>
    </section>
  );
};

export default RoomList;
