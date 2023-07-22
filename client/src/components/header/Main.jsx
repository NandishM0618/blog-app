import { category } from "../../assets/data";
import Head from "./Head";
export default function Main(params) {
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div style={containerStyles}>
      <Head slides={category} />
    </div>
  );
}
