import './NotesGroup.css';
// const groups = [
//   { id: "CU", name: "Cuvette Notes" },
//   { id: "MG", name: "My personal grp" },
//   { id: "JS", name: "Javascript grp" },
//   { id: "HT", name: "HTML grp" },
//   { id: "CS", name: "CSS Notes" },
//   { id: "SQ", name: "SQL Notes" },
//   { id: "PY", name: "Python Notes" },
// ];

function onCreate(name,color) {
  // let id= name.charAt(0);
  let id = "x";
  // console.log(name);
  // console.log(color);
  return (
    <>
      <div className="notes-group">
        
        {/* <p>Group Name:{}</p> */}
        {/* {groups.map((group) => ( */}
          <div className="group-item">
            <div style={{backgroundColor:{color}}} className="group-icon">{id}</div>
            <span className="group-name">{name}</span>
          </div>
        {/* ))} */}
      </div>
    </>
  );
}

export default onCreate;
