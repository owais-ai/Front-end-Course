import Image from "next/image";
import ParentComponent from "./components/ParentComponent";
import ChildComponent from "./components/ChildComponent";

export default function Home() {
  return (
    <div>
      <ParentComponent />
      <ChildComponent name="Owais" age={30} class={10}/>
    </div>
  );
}
