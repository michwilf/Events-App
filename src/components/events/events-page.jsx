import React from "react";
import Link from "next/link";
import Image from "next/image";

const AllEvents = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((event) => {
        const { id, title, image } = event;
        return (
          <Link href={`/events/${id}`} key={id}>
            <div className="card">
              <Image src={image} width={300} height={250} alt={title} />
              <h2>{title}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AllEvents;
