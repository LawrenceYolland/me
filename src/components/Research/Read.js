import React from "react";
// import "../../assets/images/hemocytes.gif"
const Read = () => {
  return (
    <article className="post">
      <h1>How do cells move?</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed
        sed risus pretium. Vivamus at augue eget arcu. Eget arcu dictum varius
        duis at consectetur. Nunc aliquet bibendum enim facilisis gravida neque
        convallis a cras. Rhoncus aenean vel elit scelerisque mauris
        pellentesque.
      </p>

      {/* <div className="tip tip-right">
        <p>
          some lorem ipsum from
          <a href="https://loremipsum.io/generator/"> LoremIpsum.io</a>
        </p>
      </div> */}

      <p>
        Commodo ullamcorper a lacus vestibulum sed arcu. Eu nisl nunc mi ipsum
        faucibus vitae aliquet nec ullamcorper. Fringilla phasellus faucibus
        scelerisque eleifend donec pretium vulputate sapien. Nec nam aliquam sem
        et tortor consequat id porta. Id diam vel quam elementum. Viverra
        maecenas accumsan lacus vel facilisis. Amet risus nullam eget felis eget
        nunc lobortis mattis aliquam.
      </p>

      <figure>
        <img
          src={require("../../assets/images/hemocytes.gif")}
          alt="cells migrating"
        />
        <figcaption>
          Hemocytes migrating <i>in vivo</i>
        </figcaption>
      </figure>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed
        sed risus pretium. Vivamus at augue eget arcu. Eget arcu dictum varius
        duis at consectetur. Nunc aliquet bibendum enim facilisis gravida neque
        convallis a cras. Rhoncus aenean vel elit scelerisque mauris
        pellentesque.
      </p>

      {/* <blockquote>
        <p>
          Vivamus at augue eget arcu. Eget arcu dictum varius duis at
          consectetur.
        </p>
      </blockquote> */}

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed
        sed risus pretium. Vivamus at augue eget arcu. Eget arcu dictum varius
        duis at consectetur. Nunc aliquet bibendum enim facilisis gravida neque
        convallis a cras. Rhoncus aenean vel elit scelerisque mauris
        pellentesque.
      </p>
      {/* <div className="tip tip-left">
        <p>
          some lorem ipsum from
          <a href="https://loremipsum.io/generator/"> LoremIpsum.io</a>
        </p>
      </div> */}
    </article>
  );
};

export default Read;
