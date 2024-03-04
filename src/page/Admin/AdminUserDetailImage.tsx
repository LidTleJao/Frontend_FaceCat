import { Box } from "@mui/system";
import "./AdminUserDetailImage.css"
import { Button, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { LineChart } from "@mui/x-charts/LineChart";
import Header_Admin from "../../component/Header_Admin";

function AdminUserDetailImagePage() {
  const navigate = useNavigate();

  function navigateToUserProfilePage() {
    navigate("/userprofile");
  }
  return (
    <>
      <Header_Admin />
      <Box
        sx={{
          width: 1000,
          height: 550,
          borderRadius: 10,
          backgroundColor: "#FFA928",
          display: "flex",
        }}
      >
        <div
          style={{
            justifyContent: "start",
            flexDirection: "row",
            display: "flex",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              // marginLeft: "50px",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                display: "flex",
                marginLeft: "50px",
              }}
            >
              <Button
                variant="contained"
                style={{ backgroundColor: "white" }}
                sx={{
                  height: "63px",
                  width: "50px",
                  color: "black",
                  borderRadius: 20,
                  fontFamily: "Mitr, sans-serif",
                }}
                onClick={navigateToUserProfilePage}
              >
                <KeyboardArrowLeftIcon sx={{ width: "50px", height: "50px" }} />
              </Button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "60px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <CardMedia
                sx={{
                  height: 180,
                  width: 180,
                  borderRadius: 40,
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                image="src/img/profile.jpg"
              />
              <div style={{ marginTop: "20px" }}>
                <Typography
                  gutterBottom
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "black",
                    fontFamily: "Mitr, sans-serif",
                  }}
                  variant="h3"
                >
                  เมเปิ้ล
                </Typography>
              </div>
            </div>
          </div>
          <div style={{display:"flex",justifyContent:"center",marginLeft: "50px",marginTop:"20px"}}>
            <Box
              sx={{
                width: 600,
                height: 450,
                borderRadius: 10,
                backgroundColor: "white",
                display: "flex",
              }}
            >
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                  },
                ]}
                width={650}
                height={470}
              />
            </Box>
          </div>
        </div>
      </Box>
    </>
  );
}

export default AdminUserDetailImagePage;
