// import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

const style = {
  CCardTitle: `ml-[0.8rem] text-white font-semibold text-3xl textAlign-centre`,
};

function Category() {
  return (
    <>
      <div
        className={style.CCardTitle}
        style={{ textAlign: "center", marginTop: "100px", fontFamily: "Bold" }}
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
            height: "320px",
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
              variant="h5"
              component="h2"
              style={{
                fontFamily: "SemiBold",
              }}
            >
              Web3
            </Typography>{" "}
            <Typography
              variant="h9"
              component="h2"
              style={{
                marginTop: 30,
                marginBottom: 30,
                color: "white",
                fontFamily: "Light",
              }}
              color="textSecondary"
            >
              Web3 is the future of the internet that leverages decentralized
              technologies to create more secure, private, and trustless
              interactions between users while empowering individuals and
              communities.
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
                fontFamily: "Light",
              }}
            >
              Let's Meet
            </Button>
          </CardActions>
        </Card>{" "}
        <Card
          style={{
            width: "340px",
            height: "320px",
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
              variant="h5"
              component="h2"
              style={{ fontFamily: "SemiBold" }}
            >
              Back-End Devs
            </Typography>{" "}
            <Typography
              variant="h9"
              component="h2"
              style={{
                marginTop: 30,
                marginBottom: 30,
                color: "white",
                fontFamily: "Light",
              }}
              color="textSecondary"
            >
              Back-end development refers to the implementation and management
              of server-side components of a website or application that handle
              data and business logic.
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
                fontFamily: "Light",
              }}
            >
              Let's Meet
            </Button>
          </CardActions>
        </Card>{" "}
        <Card
          style={{
            width: "340px",
            height: "320px",
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
              variant="h5"
              component="h2"
              style={{ fontFamily: "SemiBold" }}
            >
              Front-End Devs
            </Typography>{" "}
            <Typography
              variant="h9"
              component="h2"
              style={{
                marginTop: 30,
                marginBottom: 30,
                color: "white",
                fontFamily: "Light",
              }}
              color="textSecondary"
            >
              Front-end development is building the user interface of a website
              or application using HTML, CSS, and JavaScript. Frontend
              development is a crucial aspect of creating a successful web
              presence.
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
                fontFamily: "Light",
              }}
            >
              Let's Meet
            </Button>
          </CardActions>
        </Card>
      </div>
      <div
        style={{
          marginLeft: "20px",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "space-around",
          //   padding: "20px",
        }}
      >
        <Card
          style={{
            width: "340px",
            height: "320px",
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
              variant="h5"
              component="h2"
              style={{ fontFamily: "SemiBold" }}
            >
              UI/UX Design
            </Typography>{" "}
            <Typography
              variant="h9"
              component="h2"
              style={{
                marginTop: 30,
                marginBottom: 30,
                color: "white",
                fontFamily: "Light",
              }}
              color="textSecondary"
            >
              UI/UX is the design and development of the visual and interactive
              elements of a website or application, aimed at improving user
              satisfaction, usability, and accessibility.
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
                fontFamily: "Light",
              }}
            >
              Let's Meet
            </Button>
          </CardActions>
        </Card>
        <Card
          style={{
            width: "340px",
            height: "320px",
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
              variant="h5"
              component="h2"
              style={{ fontFamily: "SemiBold" }}
            >
              CyberSecurity
            </Typography>{" "}
            <Typography
              variant="h9"
              component="h2"
              style={{
                marginTop: 30,
                marginBottom: 30,
                color: "white",
                fontFamily: "Light",
              }}
              color="textSecondary"
            >
              Cybersecurity involves protecting digital systems, networks, and
              sensitive information from unauthorized access, theft, damage, or
              other malicious activities.
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
                fontFamily: "Light",
              }}
            >
              Let's Meet
            </Button>
          </CardActions>
        </Card>
        <Card
          style={{
            width: "340px",
            height: "320px",
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
              variant="h5"
              component="h2"
              style={{ fontFamily: "SemiBold" }}
            >
              Marketing
            </Typography>{" "}
            <Typography
              variant="h9"
              component="h2"
              style={{
                marginTop: 30,
                marginBottom: 30,
                color: "white",
                fontFamily: "Light",
              }}
            >
              Marketing identifies customer needs, delivers value, and maintains
              relationships using techniques like research, branding,
              advertising, and CRM.
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
                fontFamily: "Light",
              }}
            >
              Let's Meet
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

export default Category;
