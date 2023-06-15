import SingleEvent from "@/src/components/events/single-event";

const EventPage = ({ data }) => {
  return <SingleEvent data={data} />;
};

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("../../../data/data.json");
  const paths = allEvents.map((event) => ({
    params: { cat: event.city, id: event.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("../../../data/data.json");
  const id = context?.params.id;
  const data = allEvents.filter((event) => event.id === id);
  return {
    props: {
      data: data,
      eventName: id,
    },
  };
}
