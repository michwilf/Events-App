import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage("Please enter a valid email address!");
    }

    try {
      const response = await fetch(`/api/email-registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId: eventId }),
      });
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="event_single_page">
      {data.map((event) => {
        return (
          <div key={event.id}>
            <h1>{event.title}</h1>
            <Image
              src={event.image}
              width={1000}
              height={500}
              alt={event.title}
            />
            <p>{event.description}</p>
            <form onSubmit={handleSubmit} className="email_registration">
              <label>Get Registered for this event!</label>
              <input
                ref={inputEmail}
                type="email"
                id="email"
                placeholder="Add your email here!"
              />
              <button type="submit"> Submit </button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default SingleEvent;
