import React, { Component } from "react";
import items from "./data";
import Client from "./Contentful";

//Client.getEntries().then(response => console.log(response.items));

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  //getData
  getData = async () => {
    try {
      let response = await Client.getEntries();
      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter(room => room.featured === true);
      //console.log(rooms);
      //console.log(featuredRooms);
      let maxPrice = Math.max(...rooms.map(room => room.price));
      let maxSize = Math.max(...rooms.map(room => room.size));
      this.setState({
        rooms: rooms,
        featuredRooms: featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice: maxPrice,
        maxSize: maxSize
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    // this.getData
    this.getData();
    /*let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    //console.log(rooms);
    //console.log(featuredRooms);
    let maxPrice = Math.max(...rooms.map(room => room.price));
    let maxSize = Math.max(...rooms.map(room => room.size));
    this.setState({
      rooms: rooms,
      featuredRooms: featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice: maxPrice,
      maxSize: maxSize
    });*/
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, id, images };
      return room;
    });
    return tempItems;
  }

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  handleChange = event => {
    const type = event.target.type;
    const name = event.target.name;
    const value = event.target.value;
    console.log(event);
    console.log(type, name, value);
  };

  filterRooms = () => {
    console.log("hello from filter rooms function in context");
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomProvider, RoomConsumer };
