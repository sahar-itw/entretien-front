import "./App.css";
import { axios } from "./data";

type Project = any;

function Project({ title, description }: Project) {
  return (
    <div
      style={{
        border: "solid 1px white",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <h2>{title}</h2>
      <div>{description}</div>
    </div>
  );
}

function getData(): Promise<any> {
  return axios.get("https://my-data.com");
}

function App() {
  return (
    <>
      <h1>My projects</h1>
      <div className="container">
        <Project title="My project" description="An amazing description" />
      </div>
    </>
  );
}

export default App;
