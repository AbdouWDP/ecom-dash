import Aside from "./Aside";
import Dashbord from "./Dashbord";

function Home() {
  return (
    <>
      <main className="main d-flex">
        <Aside />
        <Dashbord />
      </main>
    </>
  );
}

export default Home;
