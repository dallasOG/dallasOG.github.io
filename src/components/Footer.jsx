import { useState } from "react";

import "../styles/components/footer.sass";

function Footer() {
  const [count, setCount] = useState(0)
  return (
    <> 
      <div className="main-footer">
        <p>(C) 2023 - {new Date().getFullYear()}. All Rights Reserved.</p>
      </div>
      <div className="easter-egg">
        <p>you clicked {count} times xD</p>
        <button onClick={() => setCount(count + 1)}>easter egg</button>
      </div>
    </>
  );
}

export default Footer;
