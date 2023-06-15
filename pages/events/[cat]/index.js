import CatEvent from "../../../src/components/events/catEvent";

const EventsCatPage = ({ data, pageName }) => {
  function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  pageName = capitalizeFirstLetter(pageName);

  return <CatEvent data={data} pageName={pageName} />;
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/data.json");
  const paths = events_categories.map((event) => ({
    params: { cat: event.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("../../../data/data.json");
  const id = context?.params.cat;
  const data = allEvents.filter((event) => event.city === id);
  return {
    props: {
      data,
      pageName: id,
    },
  };
}
