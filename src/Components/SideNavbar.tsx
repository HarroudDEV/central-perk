import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <div
      className="dashboard-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: "1rem",
        gap: "5rem",
        maxHeight: "30rem",
      }}
    >
      <div
        className="profile"
        style={{
          display: "flex",
          gap: "0.5rem",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="profile-image">
          <img
            src=""
            alt=""
            sizes=""
            style={{
              width: "100%",
              height: "100%",
              clipPath: "circle()",
            }}
            srcSet="data:image/jpeg;base64,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"
          />
        </div>
        <div className="profile-name" style={{ color: "#91ED91" }}>
          Gunther
        </div>
        <div className="profile-role">Owner</div>
      </div>
      <div className="nav-container">
        <div
          className="nav-Links"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
            // alignItems: "center",
          }}
        >
          <div className="link">
            <Link to={"/Dashboard"} style={{ textDecoration: "none" }}>
              <HomeIcon
                sx={{
                  color: "#434D55",
                  fontSize: "1.3rem",
                  verticalAlign: "bottom",
                }}
              />
              <span style={{ color: "#434D55" }}>Dashboard</span>
            </Link>
          </div>
          <div className="link">
            <Link to={"/Rewards"} style={{ textDecoration: "none" }}>
              <AppsIcon
                sx={{
                  color: "#434D55",
                  fontSize: "1.3rem",
                  verticalAlign: "bottom",
                }}
              />
              <span style={{ color: "#434D55" }}>Rewards</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
