import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../storage/slice/NoteSlice";
import { v4 } from "uuid";

const Sidebar = () => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    const data = {
      id: v4(),
      favorite: false,
      title: "",
      desc: "",
      createAt: Date.now(),
      time: new Date().getTime(),
    };
    dispatch(addNote(data));
  };

  return (
    <div className="max-w-[120px] w-full flex flex-col gap-10 items-center h-[80vh] border-r border-gray-300 sticky top-[80px]">
      <Button onClick={handleAdd}></Button>
      <ul className="flex flex-col gap-10">
        <li className="bg-[#f6e7bb] rounded-full w-7 h-7"></li>
        <li className="bg-[#f7c281] rounded-full w-7 h-7"></li>
        <li className="bg-[#a2e2f1] rounded-full w-7 h-7"></li>
        <li className="bg-[#b7e370] rounded-full w-7 h-7"></li>
        <li className="bg-[#cbd3f6] rounded-full w-7 h-7"></li>
      </ul>
    </div>
  );
};

export default Sidebar;
