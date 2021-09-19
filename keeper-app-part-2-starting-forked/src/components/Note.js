// import React from "react";
// // import notes from "../notes";

// function createEntry(emojiTerm) {
//   return (
//     <Entry
//       key={emojiTerm.key}
//       title={emojiTerm.title}
//       content={emojiTerm.content}
//     />
//   );
// }

// function Note() {
//   return (
//     <div className="note">
//       <dl className="dictionary">{notes.map(createEntry)}</dl>
//     </div>
//   );
// }

// export default Note;
import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
