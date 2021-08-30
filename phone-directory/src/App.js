import PersonList from "./components/PersonList";

import PersonContextProvider from "./contexts/PersonContext";

function App() {
  return (
    <div className="App">
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <PersonContextProvider>
              <PersonList />
            </PersonContextProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
