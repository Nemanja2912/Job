import React from "react";

const header = {
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "max-content 1fr",
  gridColumnGap: 75,
  gridRowGap: 15,
  marginBottom: 75,
  marginTop: 75,
};

const historySearch = {
  display: "flex",
  alignItems: "center",
};

const inputBox = {
  position: "relative",
  display: "flex",
  alignItems: "center",
};

const input = {
  borderRadius: "0 20px 20px 0",
  border: "none",
  padding: "10px 20px",
  width: "100%",
  backgroundColor: "#fff",
  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
  height: 40,
  fontSize: 16,
};

const location = {
  color: "#6e34fb",
  fontWeight: "bold",
  display: "flex",
  marginRight: 5,
  backgroundColor: "#fff",
  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
  height: 40,
  alignItems: "center",
  padding: "7px 15px",
  cursor: "pointer",
  borderRadius: "10px 0 0 10px",
};

const icon = {
  position: "absolute",
  right: 0,
  top: -10,
  color: "#FFF",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f99560",
  cursor: "pointer",
  padding: 10,
  borderRadius: "50%",
  width: 60,
  height: 60,
  justifyContent: "center",
};

const tag = {
  color: "#f99560",
  marginLeft: 15,
  cursor: "pointer",
  backgroundColor: "#fff",
  padding: "5px 15px",
  borderRadius: 5,
  boxShadow:
    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
};

const activeTag = {
  color: "#fff",
  backgroundColor: "#f99560",
  padding: "5px 15px",
  borderRadius: 5,
  cursor: "pointer",
  boxShadow:
    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
};

const title = {
  fontSize: 35,
  marginBottom: 0,
  lineHeight: 0,
};

const number = {
  color: "#6e34fb",
  fontSize: 25,
};

const JobHeader = () => {
  return (
    <div style={header}>
      <h2 style={title}>Search Jobs</h2>
      <div style={inputBox}>
        <p style={location}>
          <i style={{ marginRight: 15 }} className="fas fa-map-marker-alt"></i>{" "}
          Anywhere
        </p>
        <input
          placeholder="Search by Title, Company or Keywords..."
          type="text"
          style={input}
        />
        <i style={icon} className="fas fa-search"></i>
      </div>
      <p>
        <span style={number}>144 result</span>{" "}
        <span style={{ opacity: "0.5" }}>of your preferences</span>
      </p>
      <div style={historySearch}>
        <p style={activeTag}>Apple</p>
        <p style={tag}>Google</p>
        <p style={tag}>Facebook</p>
        <p style={tag}>Mango</p>
      </div>
    </div>
  );
};

export default JobHeader;
