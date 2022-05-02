import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { client } from "../client";
import MasonryLayout from "./MasonaryLayout";
import Spinners from "./Spinners";
import { feedQuery, searchQuery } from "../utils/data";
const Feed = () => {
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();
  const [pins, setPins] = useState(null);
  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);

      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading)
    return <Spinners message="We are adding new Ideas to your feed " />;

  if(!pins?.length) return <h2 className="flex items-center justify-center font-bold">No pins available</h2>
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
