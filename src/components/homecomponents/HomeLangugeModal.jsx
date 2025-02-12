import React, { useState } from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";

export const LanguageModal = ({ isOpen, onClose }) => {
  const languages = [
    "English",
    "Spanish",
    "Hindi",
    "Gujarati",
    "Marathi",
    "Bengali",
  ];
  const languageCodes = {
    English: "en",
    Spanish: "es",
    Hindi: "hi",
    Gujarati: "gu",
    Marathi: "mr",
    Bengali: "bn",
  };

  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (language) => {
    const languageCode = languageCodes[language];
    setSelectedLanguage(languageCode);
    googleTranslateElementInit(languageCode);
  };

  return (
    <Modal show={isOpen} onHide={onClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Select Language</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {languages.map((language) => (
            <ListGroup.Item
              key={language}
              active={selectedLanguage === languageCodes[language]}
              onClick={() => handleLanguageChange(language)}
              style={{ cursor: "pointer" }}
            >
              {language}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

function googleTranslateElementInit(languageCode) {
  new window.google.translate.TranslateElement(
    { pageLanguage: languageCode },
    "google_translate_element"
  );
}
