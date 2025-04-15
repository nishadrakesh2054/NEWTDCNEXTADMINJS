import React from "react";
import { useTranslation } from "adminjs";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material"; // Material UI components for styling
import { green, blue, orange } from "@mui/material/colors"; // Color palette for enhanced design

const DashboardUI = () => {
  const { translate } = useTranslation();

  // Sample data for sports dashboard
  const stats = {
    teams: 15,
    matches: 35,
    players: 200,
    upcomingMatches: 5,
    completedMatches: 30,
  };

  return (
    <Box sx={{ padding: 3 }}>
      {/* Dashboard Title */}
      <Typography variant="h4" gutterBottom align="center">
        {translate("dashboard.title", "Sports Dashboard")}
      </Typography>

      {/* Grid Layout for Cards */}
      <Grid container spacing={3}>
        {/* Card for Teams */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: blue[500],
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {translate("dashboard.teams", "Teams")}
              </Typography>
              <Typography variant="h4">{stats.teams}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card for Matches */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: green[500],
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {translate("dashboard.matches", "Matches")}
              </Typography>
              <Typography variant="h4">{stats.matches}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card for Players */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: orange[500],
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {translate("dashboard.players", "Players")}
              </Typography>
              <Typography variant="h4">{stats.players}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Matches Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#ffb74d",
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {translate("dashboard.upcomingMatches", "Upcoming Matches")}
              </Typography>
              <Typography variant="h4">{stats.upcomingMatches}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Completed Matches Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#4caf50",
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {translate("dashboard.completedMatches", "Completed Matches")}
              </Typography>
              <Typography variant="h4">{stats.completedMatches}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardUI;
