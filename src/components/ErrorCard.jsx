import {useContext} from "react";
import {ErrContext} from "../contexts/Error";

export default function ErrorCard() {
  const {err} = useContext(ErrContext);
  return err.msg ? (
    <details>
      <summary>Opps... Something went wrong. Look for details</summary>
      <p>{err.msg}</p>
    </details>
  ) : null;
}
