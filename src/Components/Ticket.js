import React from "react";
import Card from "react-bootstrap/Card";

const Ticket = () => {
  const TicketId = 123456;

  const myImage =
    "https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=612x612&w=0&k=20&c=p_BQCJWRQQtZYnQlOtZMzTjeB_csic8OofTCAKLwT0M= ";

  const cardContainerStyle = {
    width: "100%",
    maxWidth: "400px",
    height: "110vh", // Height of the card
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // Space between content
    margin: "0 auto", // Center horizontally
    padding: "20px", // Unified padding
    borderRadius: "10px", // Rounded corners for the card
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const cardImageStyle = {
    height: "50%",
    objectFit: "cover",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    marginBottom: "10px",
  };

  const cardBodyStyle = {
    padding: "0",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  };

  const cardTitleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "5px",
  };

  const cardTextStyle = {
    textAlign: "center",
    fontSize: "1.2rem",
    margin: "5px 0",
  };

  return (
    <Card style={cardContainerStyle}>
      <Card.Img variant="top" src={myImage} style={cardImageStyle} />
      <Card.Body style={cardBodyStyle}>
        <Card.Title style={cardTitleStyle}>{TicketId}</Card.Title>
        <Card.Text style={cardTextStyle}>
          Your ticket was{" "}
          <span style={{ color: "blue" }}>booked successfully</span>.
          Congratulations and welcome to the{" "}
          <span style={{ color: "blue" }}>event</span>!
          <br /> We're excited to have you with us. Your seat has been reserved,
          and we can't wait to see you there!
          <br /> For any questions or assistance, feel free to reach out to our
          support team.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Ticket;
