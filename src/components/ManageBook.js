import React from "react";
import { Labelled, Button } from "@wigxel/react-components";

const { Input } = Labelled;

function ManageBook(props) {
  return (
    <div>
      <section className="flex items-center justify-between">
        <section className="flex items-center py-5">
          {/** Iterate through the characters creating a button for each character */}
          {alphaRange("A", "Z")
            .split("")
            .map((char, idx) => {
              return (
                <a href="#" className="px-2" key={idx}>
                  {char}
                </a>
              );
            })}
        </section>
        <div>
          <Input type="text" placeholder="Book title" />
          <Button type="submit" primary className="ml-4">
            Search
          </Button>
        </div>
      </section>

      <h1 className="text-3xl">Books</h1>
      {/** Grid of Books here */}
    </div>
  );
}

export default ManageBook;

function alphaRange(start = "A", end = "Z") {
  const length = end.charCodeAt(0) - start.charCodeAt(0) + 1;
  const codes = Array(length)
    .fill(0)
    .map((_, idx) => idx + start.charCodeAt(0));

  return String.fromCharCode(...codes);
}

console.log("A - Z", alphaRange("A", "Z"));
console.log("X - Z", alphaRange("X", "Z"));
