import { useState } from "react";
import ManualForm from "./ManualForm";
import HookForm from "./HookForm";
function App(){
  const [tab, setTab] = useState("manual");
  return (
    <>
      <div>
        <div className="shell">
          <h1>Job Application</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam ea vitae itaque distinctio accusamus voluptatibus vero eius repellendus perferendis dolorum. Explicabo dignissimos sit qui illo accusamus voluptatem nemo quae cumque.</p>
        </div>
        <div className="tab">
          <button onClick={()=> setTab("manual")}>controlled - Manual</button>
          <button onClick={()=> setTab("rhf")}>React hook form</button>
        </div>
        <h1>Getting started with react</h1>
        {tab === "manual" ? <ManualForm /> : <HookForm />}
      </div>
    </>
  )
}

export default App;