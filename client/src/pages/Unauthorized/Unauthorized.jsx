import React from "react";
import { Button, Typography, Layout } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

function Unauthorized() {
  return (
    <Layout
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Content style={{ textAlign: "center", padding: "20px" }}>
        <Title level={1} style={{ fontSize: "36px" }}>
          Access Denied
        </Title>{" "}
        <Paragraph style={{ fontSize: "20px", marginBottom: "20px" }}>
          You do not have permission to view this page.
        </Paragraph>{" "}
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button type="primary" size="large">
            Return to Home Page
          </Button>{" "}
        </Link>
      </Content>
    </Layout>
  );
}

export default Unauthorized;
