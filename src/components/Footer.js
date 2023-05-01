import Line from "./Metamask/line.svg";

function Footer() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        fontFamily: "Bold",
        fontSize: "30px",
        color: "white",
        marginBottom: "20px",
      }}
    >
      <img src={Line} alt="line_img" />
      DEVJAM
    </div>
  );
}
export default Footer;
