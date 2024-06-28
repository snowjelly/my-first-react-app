import { Fragment } from "react";

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, i) => (
        <Fragment key={i}>
          <p>{line}</p>
          {i !== poem.length - 1 && poem.length !== 1 ? <hr /> : null}
        </Fragment>
      ))}
    </article>
  );
}
