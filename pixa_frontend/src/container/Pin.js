import React, { useState } from "react";
import { AiFillPropertySafety } from "react-icons/ai";
import { Routes, Route } from "react-router-dom";
import { CreatePin, Navbar, Feed, PinDetail, Search } from "../Components";
import CreatPin from "../Components/CreatPin";
const Pin = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-50">
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          user={props.user ?? props.user}
        />
      </div>
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          <Route
            path="/pin-detail/:pinId"
            element={<PinDetail user={props.user} />}
          />
          <Route path="/create-pin" element={<CreatePin user={props.user} />} />
          <Route
            path="/search"
            element={
              <Search
                user={props.user}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Pin;
