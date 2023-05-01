import About_img from "./about-img.svg";

const style = {
  headerItems: ` flex items-center justify-end`,
  logoContainer: `flex items-center cursor-pointer`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  Text: ` ml-[0.8rem] text-white font-semibold text-3xl text-center`,
  Desc: ` ml-[2rem] mt-[2rem] text-white font-regular text-xl textAlign-left w-[600px]`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
};

function About() {
  return (
    <div>
      <div
        className={style.Text}
        style={{ marginTop: "100px", marginBottom: "30px", fontFamily: "Bold" }}
      >
        ABOUT
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginLeft: "60px",
          marginRight: "50px",
        }}
      >
        <img src={About_img} alt="about img" />

        <div className={style.Desc} style={{ fontFamily: "Light" }}>
          Devjam is a Web3 video chat platform that connects users with
          niche-based interests using blockchain technology, providing a secure
          and private space to discover and share passions, and build meaningful
          connections. <br /> {""}
          <br />
          With Devjam, users canr join category-based meets to connect with
          others who share the same passions. Whether you're a developer looking
          to connect with fellow coders or a designer seeking like-minded
          creatives, Devjam provides a unique and engaging platform to spark
          meaningful conversations and build long-lasting connections.
        </div>
      </div>
    </div>
  );
}

export default About;
