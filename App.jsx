import { useState } from "react";
import SplashScreen from "./SplashScreen";
import Home from "./Home";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;