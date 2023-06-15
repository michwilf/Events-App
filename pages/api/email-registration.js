import path from "path";
import fs from "fs";

function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}

function extractData(filePath) {
  const joinData = fs.readFileSync(filePath);
  const data = JSON.parse(joinData);
  return data;
}

export default function handler(req, res) {
  const { method } = req;

  // Access our data
  // extract our data (All events)
  //Res 404 if no data
  // All events - loop through and find the event with the id
  // Add the email to the event
  //only if that email exists
  // check the format of the email

  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);

  if (!events_categories || !allEvents) {
    res.status(404).json({ message: "No data found!" });
    return;
  }

  if (method === "POST") {
    const { email, eventId } = req.body;

    if (!email || !email.includes("@")) {
      res.status(401).json({ message: "Invalid email!" });
    }

    const newAllEvents = allEvents.map((event) => {
      if (event.id === eventId) {
        if (event.emails_registered.includes(email)) {
          res.status(401).json({ message: "Email already registered!" });
          return event;
        }
        return {
          ...event,
          emails_registered: [...event.emails_registered, email],
        };
      }
      return event;
    });
    console.log(email);

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );

    console.log(email);
    res.status(200).json({ message: `Email registered! ${email} ${eventId}` });
  } else {
    res.status(200).json({ message: "Method not allowed!" });
  }
}
