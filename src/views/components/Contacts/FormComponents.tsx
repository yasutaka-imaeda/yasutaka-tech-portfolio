import React, { useState } from "react";
import styles from "./FormComponents.module.scss";
import { init, sendForm, send } from "emailjs-com";
import { TextField } from "@mui/material";

const FormComponents: React.FC = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    const userID = process.env.REACT_APP_USER_ID;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    if (
      userID !== undefined &&
      serviceID !== undefined &&
      templateID !== undefined
    ) {
      init(userID);
      const template_param = {
        to_name: name,
        email: mail,
        message: message,
      };

      send(serviceID, templateID, template_param).then(() => {
        console.log("success to send email");
      });
    }
  };
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };
  const onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameValue: any = document.getElementById("name");
    nameValue.value = "";
    const mailValue: any = document.getElementById("email");
    mailValue.value = "";
    const textValue: any = document.getElementById("text");
    textValue.value = "";
    console.log("push submit");
    sendEmail();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.root}>
        <div className={styles.inputname}>
          <p>お名前</p>
          <TextField
            id="name"
            className="contact-name"
            type="text"
            required
            label="氏名(必須)"
            fullWidth
            margin="normal"
            onChange={onChangeName}
            value={name}
            InputProps={{ disableUnderline: true }}
          />
        </div>
        <div className={styles.inputemail}>
          <p>メールアドレス</p>
          <TextField
            id="email"
            className="contact-mail"
            type="text"
            required
            label="メールアドレス(必須)"
            fullWidth
            margin="normal"
            onChange={onChangeMail}
            value={mail}
            InputProps={{ disableUnderline: true }}
          />
        </div>
        <div className={styles.inputtext}>
          <p>お問い合わせ内容</p>
          <TextField
            id="text"
            className="contact-message"
            type="text"
            required
            label="お問い合わせ内容(必須)"
            fullWidth
            margin="normal"
            onChange={onChangeMessage}
            value={message}
            InputProps={{ disableUnderline: true }}
          />
        </div>
        {/* <input className="contact-submit" type="submit" /> */}
        <input className={styles.btn} type="submit" />
      </div>
    </form>
  );
};

export default FormComponents;
