import React from "react";
import Navbar from "./Navbar";
import CardContainer from "./CardContainer";
import BottomNavbar from "./BottomNavbar";

function App(props) {
  const [resListener, setResListener] = React.useState("");
  // const [python, setPython] = React.useState(undefined);
  const python = false;

  // React.useEffect(() => {
  //   fetch(process.env.REACT_APP_API_URL + "/switch", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setPython(data[0].python));
  // }, [python]);

  return (
    <div className="container">
      <Navbar setOpensOptions={props.setOpensOptions} />
      <div className="card-container">
        <CardContainer
          resListener={resListener}
          setResListener={setResListener}
          python={python}
        />
      </div>
      <BottomNavbar setResListener={setResListener} python={python} />
    </div>
  );
}

export default App;
