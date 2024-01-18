// // // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// // // using Twilio SendGrid's v3 Node.js Library
// // // https://github.com/sendgrid/sendgrid-nodejs

export default function handler(req, res) {
  const formData = require("form-data");
  const Mailgun = require("mailgun.js");
  require("dotenv").config();
  const mailgun = new Mailgun(formData);
  if (req.method === "POST") {
    function checkBody(body, keys) {
      let isValid = true;

      for (const field of keys) {
        if (!body[field] || body[field] === "") {
          isValid = false;
        }
      }
      return isValid;
    }

    const { email, name, subject, message } = req.body;
    if (!checkBody(req.body, ["email", "name", "subject", "message"])) {
      res.json({ result: false, error: "Missing or empty fields !" });
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (
      !email.match(emailRegex) ||
      email.lenght === 0 ||
      subject.lenght === 0 ||
      name.lenght == 0 ||
      message.lenght === 0
    ) {
      return;
    }
    const mg = mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY,
    });
    mg.messages
      .create("sandboxe76aad02a1e04707acf75638d52ad6ac.mailgun.org", {
        from: `${name} <${email}>`,
        to: ["pedrofmf332@gmail.com"],
        subject: subject,
        text: message,
      })
      .then((msg) => {
        console.log(msg);
        res.status(200).json({ message: "Email sent." });
      }) // logs response data
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Something went wrong, try again." });
      }); // logs any error`;
  }

  // You can see a record of this email in your logs: https://app.mailgun.com/app/logs.
}
