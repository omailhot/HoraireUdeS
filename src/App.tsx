import { Fragment } from "react";
import Horaire from "./components/Horaire/Horaire";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="h-screen bg-gray-50 text-slate-500  antialiased dark:bg-slate-900 dark:text-slate-400">
      <Fragment>
        <Navbar />
        <Horaire />
      </Fragment>
    </div>
  );
};

export default App;
