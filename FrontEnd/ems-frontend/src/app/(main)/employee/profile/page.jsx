"use client";

import React, { useState, useEffect, Suspense, useContext } from "react";
import { useRouter } from "next/navigation";

import FolderIcon from "@mui/icons-material/Folder";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import EditIcon from "@mui/icons-material/Edit";

import { useTheme } from "@mui/material/styles";

import TabBar from "./_components/TabBar";
import { UserContext } from "../../../context/UserContext";

import axiosInstance from "../../../_utils/axiosInstance";
import { API_PATHS } from "../../../_utils/apiPaths";
import { getProfilePicture } from "../../../_utils/profilePictureUtils";

const Employee = () => {
  const theme = useTheme();
  const router = useRouter();
  const { user } = useContext(UserContext);
  const [employeeData, setEmployeeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get user's profile picture from localStorage
  const userProfilePicture = getProfilePicture(user?.id || user?.username);

  useEffect(() => {
    checkEmployeeProfile();
  }, []);

  const checkEmployeeProfile = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(API_PATHS.EMPLOYEE.GET_PROFILE);

      if (response.data) {
        setEmployeeData(response.data);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // If no employee profile found, redirect to update page
        router.push("/employee/update");
        return;
      } else {
        // Log only unexpected errors
        setError("Error loading employee profile. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = () => {
    // Navigate to the employee update form
    router.push("/employee/update");
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2, md: 3 },
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      {/* Header Section with Avatar and Basic Info */}
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: { xs: "center", sm: "center" },
          p: { xs: 2, sm: 2, md: 3 },
          borderRadius: { xs: 2, sm: 3 },
          backgroundColor: theme.palette.background,
          gap: { xs: 2, sm: 0 },
          textAlign: { xs: "center", sm: "left" },
          mb: { xs: 2, sm: 3 },
        }}
      >
        {/* Left Section - Avatar and Name */}
        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
          gap={{ xs: 1, sm: 2 }}
          sx={{ position: "relative" }}
        >
          <Box sx={{ position: "relative" }}>
            <Avatar
              src={userProfilePicture || "/profilePic.jpg"}
              alt="Employee Profile Picture"
              sx={{
                width: { xs: 80, sm: 93, md: 100 },
                height: { xs: 80, sm: 93, md: 100 },
                boxShadow: 2,
              }}
            />
            <IconButton
              onClick={handleUpdateProfile}
              sx={{
                position: "absolute",
                bottom: -5,
                right: -5,
                backgroundColor: theme.palette.primary,
                color: theme.palette.text,
                width: { xs: 28, sm: 32 },
                height: { xs: 28, sm: 32 },
                "&:hover": {
                  backgroundColor: theme.palette.primary,
                },
                boxShadow: 2,
              }}
              size="small"
            >
              <EditIcon sx={{ fontSize: { xs: 14, sm: 16 } }} />
            </IconButton>
          </Box>

          <Typography
            variant="h5"
            sx={{
              color: theme.palette.text,
              fontFamily: "var(--font-poppins)",
              fontWeight: { xs: 600, sm: 500 },
              fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
              textAlign: { xs: "center", sm: "left" },
              mt: { xs: 1, sm: 0 },
            }}
          >
            {employeeData?.firstName && employeeData?.lastName
              ? `${employeeData.firstName} ${employeeData.lastName}`
              : employeeData?.username || "Employee Name"}
          </Typography>
        </Box>

        {/* Right Section - Job Info */}
        <Box
          sx={{
            color: theme.palette.text,
            fontFamily: "var(--font-lexend)",
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1, sm: 1.5 },
            alignItems: { xs: "center", sm: "flex-start" },
            minWidth: { xs: "100%", sm: "auto" },
          }}
        >
          {/* Job Title/Designation */}
          {(user?.designation || employeeData?.designation) && (
            <Box
              display="flex"
              alignItems="center"
              sx={{
                color: theme.palette.primary,
                gap: 1,
                flexWrap: "wrap",
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <EmailIcon
                sx={{
                  width: { xs: 20, sm: 24 },
                  height: { xs: 20, sm: 24 },
                  color: theme.palette.primary,
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  color: theme.palette.text,
                }}
              >
                {user?.email || employeeData?.email}
              </Typography>
            </Box>
          )}

          {/* Department (Read-only) */}
          {(user?.department || employeeData?.department) && (
            <Box
              display="flex"
              alignItems="center"
              sx={{
                color: theme.palette.text,
                gap: 1,
                flexWrap: "wrap",
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <FolderIcon
                sx={{
                  width: { xs: 20, sm: 24 },
                  height: { xs: 20, sm: 24 },
                  color: theme.palette.text,
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  color: theme.palette.text,
                  wordBreak: "break-word",
                }}
              >
                {user?.department || employeeData?.department?.name || "Department"}
              </Typography>
            </Box>
          )}

          {/* Location */}
          {employeeData?.location && (
            <Box
              display="flex"
              alignItems="center"
              sx={{
                
                color: theme.palette.text,
                gap: 1,
                flexWrap: "wrap",
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  color: theme.palette.text,
                  wordBreak: "break-word",
                }}
              >
                <LocationOnIcon/> {employeeData.location}
              </Typography>
            </Box>
          )}
        </Box>
      </Paper>

      {/* Tabs Container */}
      <Box
        sx={{
          borderRadius: { xs: 2, sm: 3 },
          overflow: "hidden",
          boxShadow: 2,
        }}
      >
        <Suspense fallback={<CircularProgress />}>
          <TabBar theme={theme} employeeData={employeeData} />
        </Suspense>
      </Box>
    </Box>
  );
};

const EmployeePage = () => {
  const router = useRouter();
  const { user } = useContext(UserContext);
  // If user context is missing, or user is authenticated but has no employee profile, redirect
  useEffect(() => {
    if (!user) {
      router.replace("/employee/update");
    }
  }, [user, router]);
  return (
    <Suspense fallback={<CircularProgress />}>
      <Employee />
    </Suspense>
  );
};

export default EmployeePage;
