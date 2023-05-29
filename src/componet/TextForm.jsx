import React, {useState} from "react";
import { Button } from "@mui/material";

const TextForm = (props) => {

    const [Text, setText] = useState("");

    const handleOnChange = (event) => {
      setText(event.target.value);
    };
    const handleUpClick = () => {
      let newTaxt = Text.toUpperCase();
      setText(newTaxt);
    };
  
    const handleLoClick = () => {
      let newTax = Text.toLowerCase();
      setText(newTax);
    };
  
    const handleClearClick = () => {
      let newTax = "";
      setText(newTax);
    };
    const handleCopyClick = () => {
      let Text = document.getElementById("MyBox");
      Text.select();
      navigator.clipboard.writeText(Text.value);
      document.getSelection().removeAllRanges();
    };
    const handleExSpaceClick = () => {
      let newTaxt = Text.split(/[ ] + /);
      setText(newTaxt.join(" "));
    };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="my-3">{props.headding}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="MyBox"
            rows="10"
            value={Text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <Button
          disabled={Text.length === 0}
          className="mx-1 my-1"
          variant="contained"
          color="success"
          onClick={handleUpClick}
        >
          Uppercase
        </Button>
        <Button
          disabled={Text.length === 0}
          className="mx-1 my-1"
          variant="contained"
          color="success"
          onClick={handleLoClick}
        >
          LowerCase
        </Button>
        <Button
          disabled={Text.length === 0}
          className="mx-1 my-1"
          variant="contained"
          color="success"
          onClick={handleClearClick}
        >
          Clear Text
        </Button>
        <Button
          disabled={Text.length === 0}
          className="mx-1 my-1"
          variant="contained"
          color="success"
          onClick={handleCopyClick}
        >
          Copy Text
        </Button>
        <Button
          disabled={Text.length === 0}
          className="mx-1 my-1"
          variant="contained"
          color="success"
          onClick={handleExSpaceClick}
        >
          Remove Space
        </Button>

        <div className="container">
          <h1>Your text summery</h1>
          <p>
            {
              Text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            word and {Text.length} characters
          </p>
          <p>
            {0.008 *
              Text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            Minutes reads
          </p>
          <h3>Preview</h3>
          <p>{Text.length > 0 ? Text : "Nothing to preview !!"}</p>
        </div>
      </div>
    </>
  );
};

export default TextForm;
