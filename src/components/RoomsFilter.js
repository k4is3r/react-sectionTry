import React from "react";
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title';


export default function RoomsFilter() {
  const context = useContext(RoomContext);
  const {
    handleChange, type, capacity, price, minPrice, masPrice, 
    minSize, maxSize, breakfast, pets
  } = context;

  return <section className="filert-contai"> 
    
  </section>;
}
