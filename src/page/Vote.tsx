import { Container, Box } from "@mui/system";
import Header from "../component/Header";
import { CardMedia, Typography } from "@mui/material";
import "./Vote.css";

function VotePage() {
  return (
    <>
      <Header />
      <Container fixed >
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Typography
                gutterBottom
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                //   fontWeight: "bold",
                  color: "black",
                  ml: 2,
                  fontFamily: "Mitr, sans-serif",
                }}
                variant="h1"
              >
                คุณชอบอะไร?
              </Typography>
          <div
          style={{display: "flex",justifyContent: "space-between"}}
          >
          <Box
          sx={{
            width: 400,
            height: 500,
            borderRadius: 10,
            backgroundColor: "#FFA928",
            marginRight: 15,
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          >
            <CardMedia
                  sx={{
                    height: 300,
                    width: 300,
                    borderRadius: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  image="src/img/cat2.jpg"
                />
                <Typography
                gutterBottom
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  
                  color: "black",
                  // ml: 2,
                  fontFamily: "Mitr, sans-serif",
                }}
                variant="h2"
                marginTop={"15px"}
              >
                เมเปิ้ล
              </Typography>
          </Box>
          <div
          style={{display: "flex",
          justifyContent: "center",
          alignItems: "center"}}
          >
            {/* <h1 style={{fontSize: "98px"}}>หรือ</h1> */}
            <Typography
                gutterBottom
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  
                  color: "black",
                  ml: 2,
                  fontFamily: "Mitr, sans-serif",
                }}
                variant="h1"
              >
                หรือ
              </Typography>
          </div>
          
          <Box
          sx={{
            width: 400,
            height: 500,
            borderRadius: 10,
            backgroundColor: "#FFA927",
            marginLeft: 15,
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          >
            <CardMedia
                  sx={{
                    height: 300,
                    width: 300,
                    borderRadius: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  image="src/img/cat3.jpg"
                />
                <Typography
                gutterBottom
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  
                  color: "black",
                  // ml: 2,
                  fontFamily: "Mitr, sans-serif",
                }}
                variant="h2"
                marginTop={"15px"}
              >
                Mr.Fresh
              </Typography>
          </Box>
          </div>
        </Box>
      </Container>
      
    </>
  );
}

export default VotePage;
