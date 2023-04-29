import { Button } from "@material-ui/core";
import Vector from "./Metamask/Vector.svg";

function Contact() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div
        style={{
          height: "200px",
          width: "700px",
          background:
            "linear-gradient(rgba(252, 0, 71, 1)60%,rgba(144, 216, 254, 1)130%)",
          marginLeft: "20px",
          borderRadius: "14px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginLeft: "20px",
            marginTop: "60px",
            margin: "auto",
          }}
        >
          <div style={{ color: "white" }}>
            For Organizations that need more
            <div
              style={{ color: "white", fontWeight: "bold", fontSize: "30px" }}
            >
              Enterprise Solutions
            </div>
          </div>
          <Button
            style={{
              marginTop: "22px",
              height: "37px",
              width: "150px",
              backgroundColor: "#246BFD",
              color: "white",
              borderRadius: "13px",
              textAlign: "center",
            }}
          >
            Contact Us
            <img style={{ marginLeft: "10px" }} src={Vector} alt="vector_img" />
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Contact;
