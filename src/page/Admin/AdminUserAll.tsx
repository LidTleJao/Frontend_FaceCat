// import { jsx } from "@emotion/react";
import { Grid, Paper } from "@mui/material";
import Header_Admin from "../../component/Header_Admin";

function AdminUserAllPage() {
  return (
    <>
      <Header_Admin />
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container display={"flex"} justifyContent="center" spacing={2}>
            {[0, 1, 2, 3].map((value) => (
              <Grid key={value} item>
                <Paper
                  sx={{
                    height: 250,
                    width: 200,
                    borderRadius: 10,
                    bgcolor: "#FFA928",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default AdminUserAllPage;
