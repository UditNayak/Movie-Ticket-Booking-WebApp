import React, { useEffect } from "react";
import { GetCurrentUser } from "../calls/users";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/loaderSlice";
import { setUser } from "../redux/userSlice";
import { Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import {
  HomeOutlined,
  LogoutOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getValidUser();
    } else {
      navigate("/login");
    }
  }, []);

  const getValidUser = async () => {
    try {
      dispatch(showLoading());
      const response = await GetCurrentUser();
      dispatch(setUser(response.data));
      dispatch(hideLoading());
      if (!allowedRoles.includes(response.data.role)) {
        navigate("/unauthorized");
      }
    } catch (error) {
      dispatch(setUser(null));
      navigate("/login");
    }
  };

  const navigateToProfile = () => {
    switch (user.role) {
      case "admin":
        navigate("/admin");
        break;
      case "partner":
        navigate("/partner");
        break;
      case "user":
        navigate("/profile");
        break;
      default:
        navigate("/");
    }
  };

  return user ? (
    <Layout>
      <Header
        className="d-flex justify-content-between"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <h3 className="demo-logo text-white m-0">Book My Show</h3>
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          items={[
            { label: <Link to="/">Home</Link>, icon: <HomeOutlined /> },
            {
              label: `${user ? user.name : ""}`,
              icon: <UserOutlined />,
              children: [
                {
                  label: (
                    <span onClick={navigateToProfile}>
                      My Profile
                    </span>
                  ),
                  icon: <ProfileOutlined />,
                },
                {
                  label: (
                    <Link
                      to="/login"
                      onClick={() => {
                        localStorage.removeItem("token");
                        dispatch(setUser(null));
                        navigate("/login");
                      }}
                    >
                      Log Out
                    </Link>
                  ),
                  icon: <LogoutOutlined />,
                },
              ],
            },
          ]}
        />
      </Header>
      <div style={{ padding: 24, minHeight: 380, background: "#fff" }}>
        {children}
      </div>
    </Layout>
  ) : null;
}

export default ProtectedRoute;
