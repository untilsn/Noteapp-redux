import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { valueNote } from "../storage/slice/NoteSlice";
import Feature from "./Feature";
import { toast } from "react-toastify";

const Card = ({ card, index }) => {
  const [titleValue, setTitleValue] = useState(card?.title || "");
  const [descValue, setDescValue] = useState(card?.desc || "");
  const btnFeatureRef = useRef(null);
  const [displayFeature, setDisplayFeature] = useState(false);

  const dispatch = useDispatch();
  const handleSubmit = (noteItem) => {
    if (!noteItem) return;
    if (titleValue === "" || descValue === "") return;
    const data = {
      ...noteItem,
      title: titleValue,
      desc: descValue,
    };
    dispatch(valueNote(data));
    toast.success("Update note success");
  };

  function handleDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  function handleTime(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }
  function handleHiddenFeature(e) {
    if (!btnFeatureRef.current.contains(e.target) && displayFeature) {
      setDisplayFeature(false);
    }
  }
  document.addEventListener("click", handleHiddenFeature);
  const backgroundColors = [
    "#FFF3CF",
    "#FFCF96",
    "#BBE2EC",
    "#c8f482",
    "#F0F3FF",
  ];
  return (
    <div
      className="text-black shadow-md rounded-xl h-[400px] bg-opacity-65 py-5 capitalize"
      style={{
        backgroundColor: backgroundColors[index % backgroundColors.length],
      }}
    >
      <input
        onChange={(e) => setTitleValue(e.target.value)}
        value={titleValue}
        type="text"
        className="w-full px-5 text-2xl capitalize bg-transparent border-none outline-none placeholder:text-gray-600"
        placeholder={index + 1}
      />
      <textarea
        onChange={(e) => setDescValue(e.target.value)}
        value={descValue}
        placeholder="write something"
        className="w-full text-xl px-5 bg-transparent capitalize border-none outline-none placeholder:text-gray-600 resize-none h-[260px] mt-5"
      ></textarea>
      <div className="flex items-center justify-between gap-2 px-5">
        <div
          ref={btnFeatureRef}
          onClick={() => setDisplayFeature(!displayFeature)}
          className="relative "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-7 h-7 active:scale-90 hover:scale-105"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
          {displayFeature ? <Feature idNote={card.id}></Feature> : ""}
        </div>

        <div className="flex gap-5 text-lg font-semibold text-opacity-80">
          <span>{handleDate(card.createAt)}</span>
          <span>{handleTime(card.time)}</span>
        </div>
        <div
          onClick={() => handleSubmit(card)}
          className="flex items-center justify-center w-10 h-10 bg-black rounded-full submit-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
