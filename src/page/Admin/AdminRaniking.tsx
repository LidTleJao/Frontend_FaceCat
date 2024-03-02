import { Typography, TableContainer, Table, TableBody, TableRow, TableCell, CardMedia } from "@mui/material";
import { Container, Box } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Header_Admin from "../../component/Header_Admin";
import "./AdminRanking.css";

function AdminRankingPage() {
  const RankingData = [
    { image: "src/img/profile.jpg", nameimage: "Mr.Fresh", linkimg: "1K" },
    { image: "src/img/cat2.jpg", nameimage: "เมเปิ้ล", linkimg: "360" },
    { image: "src/img/cat3.jpg", nameimage: "TJ", linkimg: "12" },
    { image: "src/img/cat3.jpg", nameimage: "TJ", linkimg: "12" },
    { image: "src/img/cat3.jpg", nameimage: "TJ", linkimg: "12" },
  ];
  return (
    <>
      <Header_Admin />
      <Container fixed>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"start"}
          alignItems={"center"}
          sx={{
            width: 680,
            height: 630,
            borderRadius: 15,
            marginTop: "70px",
            backgroundColor: "#FFA928",
          }}
        >
          <div
            style={{
              justifyContent: "start",
              display: "flex",
              margin: "30px",
            }}
          >
            <Typography
              gutterBottom
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
                fontFamily: "Mitr, sans-serif",
              }}
              variant="h2"
            >
              จัดอันดับ
            </Typography>
          </div>
          <div >
            <TableContainer
              style={{
                maxHeight: 450,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Table
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <TableBody >
                  {RankingData.map((data, index) => (
                    
                    <TableRow key={index} >
                      <TableCell>
                        <Box
                          display={"flex"}
                          flexDirection={"row"}
                          // justifyContent={"center"}
                          alignItems={"center"}
                          sx={{
                            width: 600,
                            height: 130,
                            borderRadius: 10,
                            //   marginTop: "50px",
                            backgroundColor: "white",
                          }}
                        >
                          <div style={{ display: "flex" }}>
                            <Typography
                              gutterBottom
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "#FFA928",
                                fontFamily: "Mitr, sans-serif",
                                ml: 5,
                              }}
                              variant="h3"
                            >
                              {index + 1}
                            </Typography>
                          </div>
                          <div style={{ display: "flex" }}>
                            <CardMedia
                              sx={{
                                height: 100,
                                width: 100,
                                borderRadius: 20,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                ml: 3,
                              }}
                              image={data.image}
                            />
                          </div>
                          <div style={{ flexGrow: 1, display: "flex" }}>
                            <Typography
                              gutterBottom
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "black",
                                fontFamily: "Mitr, sans-serif",
                                ml: 2,
                              }}
                              variant="h4"
                            >
                              {data.nameimage}
                            </Typography>
                          </div>
                          <div style={{ display: "flex" }}>
                            <Typography
                              gutterBottom
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "black",
                                fontFamily: "Mitr, sans-serif",
                                mr: 2,
                              }}
                              variant="h3"
                            >
                              <FavoriteIcon color="error" fontSize="inherit" />
                            </Typography>
                          </div>
                          <div style={{ display: "flex" }}>
                            <Typography
                              gutterBottom
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "black",
                                fontFamily: "Mitr, sans-serif",
                                mr: 3,
                              }}
                              variant="h3"
                            >
                              {data.linkimg}
                            </Typography>
                          </div>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Box>
      </Container>
    </>
  );
}
export default AdminRankingPage;
