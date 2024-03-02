import { Box } from "@mui/system";
import Header from "../component/Header";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { Button, CardMedia, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();

    function navigateToProfileEditPage() {
        navigate("/ProfileEdit");
    }
  return (
    <>
      <Header />
      <Box
        sx={{
          width: 1700,
          height: 700,
          borderRadius: 10,
          marginTop: 10,
          backgroundColor: "#FFA928",
          display: "flex",
        }}
      >
        <div
          style={{
            justifyContent: "start",
            flexDirection: "column",
            display: "flex",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              justifyContent: "start",
              display: "flex",
              marginLeft: "50px",
            }}
          >
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
              variant="h3"
            >
              ข้อมูลส่วนตัว
            </Typography>
          </div>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "100px",
            }}
          >
            <div
              content="Data Profile"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ flexGrow: 1, display: "flex" }}>
                <CardMedia
                  sx={{
                    height: 140,
                    width: 140,
                    borderRadius: 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  image="src/img/profile.jpg"
                />
              </div>
              <div
                style={{
                  marginBottom: "20px",
                  marginLeft: "50px",
                }}
              >
                <div>
                  <Typography
                    gutterBottom
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                      ml: 2,
                      fontFamily: "Mitr, sans-serif",
                    }}
                    variant="h5"
                  >
                    ชื่อผู้ใช้
                  </Typography>
                </div>
                <div>
                  <TextField
                    // placeholder="NameUser"
                    sx={{ m: 1, width: "50ch" }}
                    InputProps={{
                      sx: { borderRadius: "50px", bgcolor: "white" },
                      startAdornment: (
                        <>
                          <h3>Prapanpong</h3>
                        </>
                      ),
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  marginBottom: "20px",
                  marginLeft: "50px",
                }}
              >
                <div>
                  <Typography
                    gutterBottom
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                      ml: 2,
                      fontFamily: "Mitr, sans-serif",
                    }}
                    variant="h5"
                  >
                    อีเมล
                  </Typography>
                </div>
                <div>
                  <TextField
                    // placeholder="Gmail"
                    sx={{ m: 1, width: "50ch" }}
                    InputProps={{
                      sx: { borderRadius: "50px", bgcolor: "white" },
                      startAdornment: (
                        <>
                          <h3>Prapanpong@gmail.com</h3>
                        </>
                      ),
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  marginBottom: "20px",
                  marginLeft: "50px",
                }}
              >
                <div>
                  <Typography
                    gutterBottom
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                      ml: 2,
                      fontFamily: "Mitr, sans-serif",
                    }}
                    variant="h5"
                  >
                    รหัสผ่าน
                  </Typography>
                </div>
                <div>
                  <TextField
                    // placeholder="Password"
                    sx={{ m: 1, width: "50ch" }}
                    InputProps={{
                      sx: { borderRadius: "50px", bgcolor: "white" },
                      startAdornment: (
                        <>
                          <h3>1234</h3>
                        </>
                      ),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            content="Image"
            style={{
              flexDirection: "row",
              display: "flex",
              // justifyContent: "space-between",
              marginLeft: "100px",
              marginTop: "100px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={2.3}>
                <CardMedia
                  sx={{
                    height: 260,
                    width: 260,
                    borderRadius: 5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={navigateToProfileEditPage}
                  image="src/img/cat2.jpg"
                />
              </Grid>

              <Grid item xs={2.3}>
                <CardMedia
                  sx={{
                    height: 260,
                    width: 260,
                    borderRadius: 5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  image="src/img/cat3.jpg"
                />
              </Grid>
              <Grid item xs={2.3}>
                <CardMedia
                  sx={{
                    height: 260,
                    width: 260,
                    borderRadius: 5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  image="src/img/R.jpg"
                />
              </Grid>
              <Grid item xs={2.3}>
                <CardMedia
                  sx={{
                    height: 260,
                    width: 260,
                    borderRadius: 5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  image="src/img/fox2.png"
                />
              </Grid>
              <Grid item xs={2.3}>
                <div style={{ backgroundColor: "white", borderRadius: 15 }}>
                  <Box
                    sx={{
                      height: 260,
                      width: 260,
                      borderRadius: 5,
                      borderColor: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AddPhotoAlternateOutlinedIcon
                      sx={{
                        height: 160,
                        width: 160,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: "30px",
                      }}
                    />
                  </Box>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Box>
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "end",
          flexDirection: "row",
          marginTop:"30px"
        }}
      >
        <Button
          variant="contained"
          style={{ backgroundColor: "#FFA928" }}
          sx={{
            width: "8pc",
            color: "white",
            borderRadius: 3,
            mr: 2,
            fontFamily: "Mitr, sans-serif",
          }}
          onClick={navigateToProfileEditPage}
        >
          แก้ไขข้อมูล
        </Button>
      </div>
    </>
  );
}

export default ProfilePage;
