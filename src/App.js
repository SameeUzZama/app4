// import { Navigation } from "./components/Navigation";
// import { Caros } from "./components/carousel";
// import { Figure } from "./components/figure";

// import { Carousel } from "react-bootstrap";
import { Figure } from "react-bootstrap";
import { ProductList } from "./api/Productlist";
import ClassComp from "./components/Classcomp"

const App=()=> {
  return (
    <div>
      {/* <Navigation /> */}
      {/* <Caros/> */}
      {/* <Figure/> */}
      {/* <Component/> */}
      <h1>Hello</h1>
      <ClassComp />
      <Figure />
      <ProductList/>
      {/* <Caros/> */}
    </div>
  );
}

export default App;
