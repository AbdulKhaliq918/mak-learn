import React from "react"
import { useAuthContext } from "contexts/AuthContext";
import Routes from "./pages/Routes"
import ScreenLoader from "components/ScreenLoader";

import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  const { isAppLoading } = useAuthContext()
  if(isAppLoading){
    return <div className="min-vh-100 d-flex justify-content-center align-items-center"><ScreenLoader /></div>
  }
  return (
    <>
      {!isAppLoading
        ? <Routes />
        : <ScreenLoader />
      }
    </>
  );
}

export default App;
