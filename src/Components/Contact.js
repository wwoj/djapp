import React from "react";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-info-container">
        <div className="contact-info">
          <div>
            <h2>Contact</h2>
            <p>Rafal Kowalski</p>
            <p>Timber Tr, 1528</p>
            <p>Wheaton, Il 60189</p>

            <p>Tel: +48+534-073-727</p>
            <p>e-mail: wojcik.wojtek@yahoo.pl</p>
          </div>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="contact-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
          nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus
          pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla
          aliquet porttitor venenatis.{" "}
        </div>
        <div className="form-data-name-mail">
          <div className="contact-input">
            {/* <label>NAME</label> */}
            <input type="text" placeholder="NAME" />
          </div>
          <div className="contact-input">
            {/* <label>EMAIL</label> */}
            <input type="text" placeholder="E-MAIL" />
          </div>
        </div>
        <div>
          <textarea className="form-textarea" rows="8"></textarea>
        </div>
        <div className="form-submit">
          <button type="submit">Send message</button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
