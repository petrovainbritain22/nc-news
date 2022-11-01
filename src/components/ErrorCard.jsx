import {useContext} from "react";
import {ErrContext} from "../contexts/Error";

export default function ErrorCard() {
  const {err} = useContext(ErrContext);
  return err.msg ? (
    <details style={{backgroundColor: "white", padding: "1em"}}>
      <summary>Opps... Something went wrong. Look for details</summary>
      <p>{err.msg}</p>
    </details>
  ) : null;
}
