import "./Home.css";
import Tasks from "../../components/Tasks/Tasks";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div className="Form">
      <Header />
      <Form />
      <Tasks />
    </div>
  );
};

export default Home;
