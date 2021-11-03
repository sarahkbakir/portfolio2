import TypeIt from "typeit-react";

export default function Typing() {
  return (
    <div className="App">
      <p>
      <TypeIt> {<br/>}
      Welcome to my portfolio.. {<br/>}
      I'm a front end developer, who Loves colors and {<br/>} learning new things everyday. {<br/>}
      you can switch to the<a href={`https://sarahbakir.vercel.app/`} passHref={true}>
        old version
      </a> of the portfolio.
      </TypeIt>
      </p>
    </div>
  );
};