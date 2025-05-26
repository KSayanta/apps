import Card from "./components/Card";
import Header from "./components/Header";
import Main from "./components/Main";
import { MdOutlineCloudDone } from "react-icons/md";
export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Card icon={<MdOutlineCloudDone />} title="Deveoldmend Bithd">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, non.
          Animi at blanditiis qui quisquam modi similique, voluptatem debitis
          deleniti ullam placeat aspernatur illo maxime, laudantium itaque
          commodi? Voluptatibus, quos.
        </Card>
      </Main>
    </>
  );
}
