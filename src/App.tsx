import { Fragment } from "react";
import Horaire from "./components/Horaire/Horaire";
import Navbar from "./components/Navbar/Navbar";
import Options from "./components/Options/Options";

const App = () => {

  return (
    <div className="antialiased h-screen text-slate-500 dark:text-slate-400 bg-gray-50 dark:bg-slate-900">
      <Fragment>
        <Navbar />
        <Horaire />
        {/* <Options /> */}
      </Fragment>
    </div>
  )
}

export default App