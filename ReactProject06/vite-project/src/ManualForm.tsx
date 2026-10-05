import { useState } from "react";

const ManualForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    role: "Frontend",
    experince: "",
    cover: "",
  });
  return (
    <div>
      <h1>Manual Form</h1>
    </div>
  );
};

export default ManualForm;
