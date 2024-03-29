import { AppBar, Button, CardMedia, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function navigateToLoginPage() {
    navigate("/");
  }
  function navigateToProfilePage() {
    navigate("/profile");
  }
  function navigateToVotePage() {
    navigate("/vote");
  }
  function navigateToRankingPage() {
    navigate("/ranking");
  }
  function navigateToAdminPage() {
    navigate("/admin_userall");
  }
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            backgroundColor: "#FFA928",
            justifyContent: "end",
            height: 80,
          }}
        >
          <div style={{ flexGrow: 1, display: "flex", flexDirection: "row" }}>
            <Box
              //   marginTop={"50px"}
              sx={{
                width: 70,
                height: 70,
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
                    height: 58,
                    width: 70,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 0.8,
                  }}
                  image="src/img/image 3.jpg"
                />
              </div>
            </Box>
            <Typography
              gutterBottom
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                color: "black",
                ml: 2,
                fontFamily: "Mitr, sans-serif",
              }}
              variant="h4"
              marginTop={"15px"}
            >
              Face Cat
            </Typography>
          </div>
          <Button
            variant="contained"
            style={{ backgroundColor: "white" }}
            sx={{
              width: "8pc",
              color: "black",
              fontWeight: "Bold",
              borderRadius: 3,
              mr: 2,
              fontFamily: "Mitr, sans-serif",
            }}
            onClick={navigateToAdminPage}
          >
            สลับ
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "white" }}
            sx={{
              width: "8pc",
              color: "black",
              fontWeight: "Bold",
              borderRadius: 3,
              mr: 2,
              fontFamily: "Mitr, sans-serif",
            }}
            onClick={navigateToVotePage}
          >
            หน้าแรก
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "white" }}
            sx={{
              width: "8pc",
              color: "black",
              fontWeight: "Bold",
              borderRadius: 3,
              mr: 2,
              fontFamily: "Mitr, sans-serif",
            }}
            onClick={navigateToProfilePage}
          >
            ข้อมูลส่วนตัว
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "white" }}
            sx={{
              width: "8pc",
              color: "black",
              fontWeight: "Bold",
              borderRadius: 3,
              mr: 2,
              fontFamily: "Mitr, sans-serif",
            }}
            onClick={navigateToRankingPage}
          >
            จัดอันดับ
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "white" }}
            sx={{
              width: "8pc",
              color: "black",
              fontWeight: "Bold",
              borderRadius: 3,
              fontFamily: "Mitr, sans-serif",
            }}
            onClick={navigateToLoginPage}
          >
            ล็อกเอาท์
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
