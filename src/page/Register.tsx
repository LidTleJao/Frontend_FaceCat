import { CardMedia, Typography, TextField, Button } from "@mui/material";
import { Container, Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from "@mui/icons-material/Lock";
import "./Login.css";

function RegisterPage() {
  const navigate = useNavigate();

  function navigateToLoginPage() {
    navigate("/");
  }
  return (
    <>
      <Container fixed>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"start"}
          alignItems={"center"}
          sx={{
            width: 400,
            height: 650,
            borderRadius: 5,
            backgroundColor: "#FFA928",
          }}
        >
          <div>
            <Box
              marginTop={"50px"}
              sx={{
                width: 140,
                height: 140,
                borderRadius: 20,
                bgcolor: "white",
              }}
            >
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <CardMedia
                  sx={{
                    height: 120,
                    width: 120,
                    borderRadius: 20,
                    // display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 1.5,
                  }}
                  image="src/img/image 3.jpg"
                />
                
              </div>
            </Box>
            <div>
              <Typography
                gutterBottom
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Mitr, sans-serif",
                }}
                variant="h4"
                marginTop={"5px"}
              >
                Face Cat
              </Typography>
            </div>
          </div>
          <div>
            <Box display={"flex"} flexDirection={"column"} >
            <div style={{display:"flex",justifyContent:"center"}}>
                <TextField
                  // id="outlined-start-adornment"
                  placeholder="ชื่อผู้ใช้งาน"
                  sx={{ m: 1, width: "45ch" }}
                  InputProps={{
                    sx: { borderRadius: "50px", bgcolor: "white" },
                    startAdornment: (
                      <PersonIcon
                        fontSize="large"
                        sx={{ color: "black", marginRight: "20px" }}
                      />
                    ),
                  }}
                />
              </div>
              <div style={{display:"flex",justifyContent:"center"}}>
                <TextField
                  // id="outlined-start-adornment"
                  placeholder="อีเมล"
                  sx={{ m: 1, width: "45ch" }}
                  InputProps={{
                    sx: { borderRadius: "50px", bgcolor: "white" },
                    startAdornment: (
                      <EmailIcon
                        fontSize="large"
                        sx={{ color: "black", marginRight: "20px" }}
                      />
                    ),
                  }}
                />
              </div>
              <div style={{display:"flex",justifyContent:"center"}}>
                <TextField
                  placeholder="รหัสผ่าน"
                  sx={{ m: 1, width: "45ch" }}
                  type="password"
                  autoComplete="current-password"
                  InputProps={{
                    sx: { borderRadius: "50px", bgcolor: "white" },
                    startAdornment: (
                      <LockIcon
                        fontSize="large"
                        sx={{ color: "black", marginRight: "20px" }}
                      />
                    ),
                  }}
                />
              </div>
              <div style={{display:"flex",justifyContent:"center"}}>
                <TextField
                  placeholder="ยืนยันรหัสผ่าน"
                  sx={{ m: 1, width: "45ch" }}
                  type="password"
                  autoComplete="current-password"
                  InputProps={{
                    sx: { borderRadius: "50px", bgcolor: "white" },
                    startAdornment: (
                      <LockIcon
                        fontSize="large"
                        sx={{ color: "black", marginRight: "20px" }}
                      />
                    ),
                  }}
                />
              </div>
              <div>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "white" }}
                  sx={{
                    width: "8pc",
                    color: "black",
                    borderRadius: 50,
                    marginLeft: "120px",
                    marginTop: "10px",
                    fontFamily: "Mitr, sans-serif",
                  }}
                  onClick={navigateToLoginPage}
                >
                  สมัครสมาชิก
                </Button>
              </div>
              <div>
                <Typography
                  gutterBottom
                  sx={{
                    fontFamily: "Mitr, sans-serif",
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  variant="body2"
                >
                  หากมีสมาชิกแล้ว
                  <Link to={"/"} style={{ marginLeft: "10px", fontFamily: "Mitr, sans-serif"}}>
                    เข้าสู่ระบบ
                  </Link>
                </Typography>
              </div>
            </Box>
          </div>
        </Box>
      </Container>
    </>
  );
}
export default RegisterPage;
