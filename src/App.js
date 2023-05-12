import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import FileSearch from "./components/FileSearch";

function App() {
  const fileSearch = (keyword) => {
    // filter out the new files based on the keyword
    // const newFiles = filesArr.filter(file => file.title.includes(keyword))
    // setSearchedFiles(newFiles)
  }

  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-3 bg-light left-panel">
          <FileSearch
            title='My Document'
            onFileSearch={fileSearch}
          />
        </div>
        <div className="col-9 bg-primary right-panel">
          <h1>right</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
