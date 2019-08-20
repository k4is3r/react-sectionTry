import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { RoomConsumer } from "../context";
import Loading from "./Loading";

export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {value => {
        const { loading, sortedRooms, rooms } = value;
        return (
          <div>
            Hello from Rooms Container
            <RoomsFilter />
            <RoomsList />
          </div>
        );
      }}
    </RoomConsumer>
  );
}
