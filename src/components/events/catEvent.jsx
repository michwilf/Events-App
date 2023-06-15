import React from "react";
import Link from "next/link";
import Image from "next/image";

const CatEvent = ({ data, pageName }) => {
  return (
    <div className="cat_events">
      <h1>Events in {pageName}</h1>
      <div className="content">
        {data.map((event) => {
          const { id, title, image, city, description } = event;
          return (
            <Link
              href={`/events/${city}/${id}`}
              key={id}
              passHref
              legacyBehavior
            >
              <a className="card">
                <Image src={image} width={300} height={300} alt={title} />
                <h2>{title}</h2>
                <p>{description}</p>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CatEvent;
