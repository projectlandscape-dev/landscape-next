import React from "react";
import { Input, TextArea, Submit } from "./FormItems";


export default function FormFooter(props) {
  return (
    <div>
      <form
        name="footer"
        className="spacing"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="footer" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <div className="spacing-sm">
          <Input
            type="name"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="spacing-sm">
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="spacing-sm">
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="spacing-sm">
          <TextArea
            name="msg"
            id="msg"
            cols="30"
            rows="5"
            placeholder="What's your project?"
            required
          />
        </div>
        <Submit type="submit" id="submit" value="submit" />
      </form>
    </div>
  );
}
