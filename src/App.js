import { NotificationProvider } from "@web3uikit/core";
import "./App.css";
import { SteamsDemo } from "./components/StreamsDemo";

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <SteamsDemo />
      </NotificationProvider>
    </div>
  );
}

export default App;
