const style = {
  Body: ` flex items-center`,
  logoContainer: `flex items-center cursor-pointer`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  Text: ` ml-[0.9rem] text-white font-semibold text-3xl textAlign-centre`,
  space: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center`,
  wrapper: `bg-transparent w-screen px-[1.2rem] py-[0.8rem] flex before:blur`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
};

function Home() {
  return (
    <>
      <div
        style={{
          marginTop: "200px",
          alignItems: "center",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            maxWidth: "500px",
            textAlign: "left",
            fontSize: "90px",
            flexWrap: "wrap",
            fontFamily: "Light",
          }}
          className={style.Text}
        >
          Welcome to
          <br /> {""}
          <br />
          Devjam
        </div>
      </div>
      <div
        style={{
          marginTop: "70px",
          alignItems: "center",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            maxWidth: "500px",
            // textAlign: "left",
            fontSize: "18px",
            flexWrap: "wrap",
            color: "white",
            fontFamily: "Light",
          }}
        >
          "Find your tribe and spark meaningful connections - where niche meets
          happen, on DevJam."
        </div>
      </div>
    </>
  );
}

export default Home;
