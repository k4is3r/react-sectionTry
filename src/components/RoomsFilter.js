import React from "react";
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title';

//get all unique values 
const getUnique = (items, value, )=>{
  return [...new Set(items.map(item => item[value]))]
}
export default function RoomsFilter({rooms}) {
  const context = useContext(RoomContext);
  const {
    handleChange, type, capacity, price, minPrice, masPrice, 
    minSize, maxSize, breakfast, pets
  } = context;
//get unique types
  let types = getUnique(rooms,'type');
//add all
types = ['all',...types];
//mas to jsx
types = types.map((item,index)=>{
  return <option value={item} key={index}>{item}</option>
})
  let people = getUnique(rooms, 'capacity');
  people = people.map((item,index)=>{
    return <option key={index} value={item}>{item}</option>
  })

  return <section className="filert-contai"> 
    <Title tile="search rooms"/>
    <form className="filter-form">
      {/*Select type */}
      <div className="form-group">
        <label htmlFor="type">room type</label>
        <select name="type" id="type" value={type} 
        className="form-control" onChange={handleChange}>
        {types}
        </select>
      </div>
      {/* end select type */}
      {/*Guests */}
      <div className="form-group">
        <label htmlFor="capacity">Guests</label>
        <select name="capacity" id="capacity" value={capacity} 
        className="form-control" onChange={handleChange}>
        {people}
        </select>
      </div>
      {/* end Guests */}
    </form>
  </section>;
}
