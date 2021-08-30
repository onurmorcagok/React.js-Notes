import PersonList from "./components/PersonList";

function App() {
  return (
    <div className="App">
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Phone <b>Directory</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <a
                    href="#addEmployeeModal"
                    className="btn btn-success"
                    data-toggle="modal"
                  >
                    <i className="material-icons">&#xE147;</i>{" "}
                    <span>Add New Person</span>
                  </a>
                </div>
              </div>
            </div>
            <PersonList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
