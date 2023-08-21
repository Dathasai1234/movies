// import React from "react";
// import "./Actions.css";

// const Actions = () => {
//   return (
//     <div>
//       <form className="flex">
//         <label>From</label>
//         <input type="date" value="2023-03-02" />
//         <label>To</label>
//         <input type="date" value="2023-07-08" />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Actions;

import React, { useState } from "react";
import "./Actions.css";

const Actions = ({ onYearSubmit }) => {
  const [fromYear, setFromYear] = useState("2023");
  const [toYear, setToYear] = useState("2023");

  const handleSubmit = (e) => {
    e.preventDefault();
    onYearSubmit(fromYear, toYear);
  };

  return (
    <div>
      <form className="flex" onSubmit={handleSubmit}>
        <label>From</label>
        <input type="number" value={fromYear} onChange={(e) => setFromYear(e.target.value)} />
        <label>To</label>
        <input type="number" value={toYear} onChange={(e) => setToYear(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Actions;
