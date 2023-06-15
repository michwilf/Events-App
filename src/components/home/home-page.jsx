import Image from "next/image";
import Link from "next/link";

export const HomePage = ({ data }) => {
  return (
    <div className="home_body">
      {data?.map((event) => (
        <Link className="card" href={`/events/${event.id}`} key={event.id}>
          <div className="image">
            <Image src={event.image} width={450} height={275} alt="london" />
          </div>
          <div className="content">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
