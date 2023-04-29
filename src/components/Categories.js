import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Vector from "./Metamask/Vector.svg";

const style = {
  //     headerItems: ` flex items-center justify-end`,
  //     logoContainer: `flex items-center cursor-pointer`,
  //     searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  //     CCardBody: ` ml-[0.8rem] text-white font-semibold text-l textAlign-centre`,
  //     space: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center`,
  //     CCard:`w-[400px] ml-[2rem] `,
  CCardTitle: `ml-[0.8rem] text-white font-semibold text-3xl textAlign-centre`,
  //     CCardBtn:' ml-[0.8rem] w-[90px] h-[30px] textAlign-center',
};

function Category() {
  return (
    <>
      <div
        className={style.CCardTitle}
        style={{ textAlign: "center", marginTop: "100px" }}
      >
        CATEGORY
      </div>
      <div
        style={{
          marginLeft: "20px",
          marginBottom: "30px",
          marginTop: "100px",
          display: "flex",
          justifyContent: "space-around",
          //   padding: "20px",
        }}
      >
        <Card
          style={{
            width: "340px",
            height: "300px",
            background:
              "linear-gradient(rgba(0,0,0,0.5)60%, rgba(0,0,0,1)100%) ",
            border: "black 1px solid",
            borderRadius: "20px",
          }}
        >
          <CardContent
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              style={{
                fontWeight: "bold",
              }}
            >
              Web3
            </Typography>{" "}
            <Typography
              variant="h9"
              component="h2"
              style={{
                marginTop: 26,
                marginBottom: 30,
                color: "white",
              }}
              color="textSecondary"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              ultrices rhoncus nunc, ac lobortis tellus cursus in.
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: "space-around" }}>
            <Button
              style={{
                textAlign: "center",
                color: "white",
                width: "130px",
                height: "37px",
                borderRadius: "10px",
                border: "White 1px solid",
                cursor: "pointer",
              }}
            >
              Let's Meet
            </Button>
          </CardActions>
        </Card>{" "}
        <Card
          style={{
            width: "340px",
            height: "300px",
            background:
              "linear-gradient(rgba(0,0,0,0.5)60%, rgba(0,0,0,1)100%) ",
            border: "black 1px solid",
            borderRadius: "20px",
          }}
        >
          <CardContent
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              style={{ fontWeight: "bold" }}
            >
              DevOps
            </Typography>{" "}
            <Typography
              variant="h9"
              component="h2"
              style={{
                marginTop: 26,
                marginBottom: 30,
                color: "white",
              }}
              color="textSecondary"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              ultrices rhoncus nunc, ac lobortis tellus cursus in.
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: "space-around" }}>
            <Button
              style={{
                textAlign: "center",
                color: "white",
                width: "130px",
                height: "37px",
                borderRadius: "10px",
                border: "White 1px solid",
                cursor: "pointer",
              }}
            >
              Let's Meet
            </Button>
          </CardActions>
        </Card>{" "}
        <Card
          style={{
            width: "340px",
            height: "300px",
            background:
              "linear-gradient(rgba(0,0,0,0.5)60%, rgba(0,0,0,1)100%) ",
            border: "black 1px solid",
            borderRadius: "20px",
          }}
        >
          <CardContent
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              style={{ fontWeight: "bold" }}
            >
              Front-end Devs
            </Typography>{" "}
            <Typography
              variant="h9"
              component="h2"
              style={{
                marginTop: 26,
                marginBottom: 30,
                color: "white",
              }}
              color="textSecondary"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              ultrices rhoncus nunc, ac lobortis tellus cursus in.
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: "space-around" }}>
            <Button
              style={{
                textAlign: "center",
                color: "white",
                width: "130px",
                height: "37px",
                borderRadius: "10px",
                border: "White 1px solid",
                cursor: "pointer",
              }}
            >
              Let's Meet
            </Button>
          </CardActions>
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "40px",
          marginLeft: "20px",
        }}
      >
        <Button
          style={{
            marginTop: "40px",
            height: "37px",
            width: "200px",
            backgroundColor: "#246BFD",
            color: "white",
            borderRadius: "13px",
            textAlign: "center",
          }}
        >
          Checkout More{" "}
          <img style={{ marginLeft: "10px" }} src={Vector} alt="vector_img" />
        </Button>
      </div>
      {/* <div  style={{textAlign:"center"}} className={style.CCardBody}>CATEGORY</div>        
           <div className={style.CCard} style={{border:"blue 1px solid", borderRadius:"20px",background:"linear-gradient(rgba(0,0,0,0.5) , rgba(0,0,0,1))"}}>
            <div className={style.CCardTitle}>WeB3 Devs</div>
             <div className={style.CCardBody}>This is some text within a card body.</div>
                   <div className={style.CCardBtn} style={{backgroundColor:'blue', color:"white",borderRadius:"10px",textAlign:"center"}}>Let's Meet</div>
           </div>
         */}
    </>
  );
}

export default Category;
