import React from "react";
import RoomList from "./RoomList";
import RoomFilter from "./RoomFilter";
import Loading from "../components/Loading";
import { RoomConsumer } from "../context";

const RoomContainer = () => {
  return (
    <RoomConsumer>
      {//function
      value => {
        console.log(value);
        const { loading, rooms, sortedRooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <div>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
};

export default RoomContainer;
