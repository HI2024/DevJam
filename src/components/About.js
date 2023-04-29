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
        style={{ marginTop: "100px", marginBottom: "30px" }}
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

        <div className={style.Desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          ultrices rhoncus nunc, ac lobortis tellus cursus in. Nam ut diam
          fringilla, vulputate urna at, porta mauris. In hac habitasse platea
          dictumst. Nam facilisis luctus erat eget pharetra. Phasellus finibus
          mi sed enim semper, sed efficitur augue suscipit. Fusce aliquam
          efficitur mattis. Fusce viverra iaculis sem, ac condimentum turpis
          mattis ut. Nulla consectetur tempor odio, non viverra tortor porttitor
          vitae. Morbi metus magna, consectetur ut dapibus in, efficitur euismod
          ligula. Proin tempor, erat tristique gravida varius, eros sem gravida
          tortor, at tincidunt quam lacus quis urna. Phasellus tristique, urna
          sit amet.
        </div>
      </div>
    </div>
  );
}

export default About;
