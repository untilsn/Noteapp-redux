import React, { useEffect } from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const CardContant = () => {
  const notes = useSelector((state) => state.note.notes);
  return (
    <div className="w-full px-20">
      <h1 className="text-5xl font-semibold">Notes</h1>
      <div className="grid w-full grid-cols-4 gap-10 mt-10">
        {notes.length > 0 &&
          notes.map((item, index) => (
            <Card key={item.id} card={item} index={index}></Card>
          ))}
      </div>
    </div>
  );
};

export default CardContant;
