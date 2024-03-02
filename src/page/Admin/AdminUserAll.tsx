// import { jsx } from "@emotion/react";
import { CardMedia, Grid, Paper, Typography } from "@mui/material";
import Header_Admin from "../../component/Header_Admin";
import { useNavigate } from "react-router-dom";

function AdminUserAllPage() {
  const navigate = useNavigate();

  function navigateToUserProfilePage() {
    navigate("/userprofile");
  }
  return (
    <>
      <Header_Admin />
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container display={"flex"} justifyContent="center" spacing={8}>
            {[0, 1, 2, 3].map((value) => (
              <Grid key={value} item>
                <Paper
                  onClick={navigateToUserProfilePage}
                  sx={{
                    height: 250,
                    width: 200,
                    borderRadius: 10,
                    bgcolor: "#FFA928",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <CardMedia
                      sx={{
                        height: 100,
                        width: 100,
                        borderRadius: 20,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "30px",
                      }}
                      image="src/img/profile.jpg"
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
                      }}
                      variant="h4"
                    >
                      LidTle
                    </Typography>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default AdminUserAllPage;
