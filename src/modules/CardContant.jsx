import React, { useEffect } from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const CardContant = () => {
  const notes = useSelector((state) => state.note.notes);
  const sortedNotes = [...notes].sort((a, b) => {
    if (a.pin && !b.pin) return -1; // a có pin, b không có pin
    if (!a.pin && b.pin) return 1; // a không có pin, b có pin
    return 0; // cả hai đều có pin hoặc không có pin
  });
  console.log(notes);
  return (
    <div className="w-full px-20">
      <h1 className="text-5xl font-semibold">Notes</h1>
      <div className="grid w-full grid-cols-4 gap-10 mt-10">
        {sortedNotes.length > 0 &&
          sortedNotes.map((item, index) => (
            <Card key={item.id} card={item} index={index}></Card>
          ))}
      </div>
    </div>
  );
};

export default CardContant;
