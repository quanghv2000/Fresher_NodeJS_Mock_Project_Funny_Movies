import {
  ClockCircleOutlined,
  HistoryOutlined,
  HomeOutlined,
  LikeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Col, Layout, Menu, Row } from "antd";
import React, { useState } from "react";
import youtobe_logo from "../../../assets/images/youtobe_logo.png";
import logo from "../../../assets/images/logo.png";
import "./styles.css";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;

export const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const videos = [1, 2, 3, 4, 5];
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,
    },
  };
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="bg-white"
      >
        {collapsed ? (
          <img src={logo} alt="Logo" className="logo" />
        ) : (
          <img src={youtobe_logo} alt="Logo" className="youtobe_logo" />
        )}
        <Menu
          className="menu-sider"
          theme="light"
          mode="inline"
          defaultSelectedKeys={["home"]}
          items={[
            {
              key: "home",
              icon: <HomeOutlined />,
              label: "Trang chủ",
            },
            {
              key: "history",
              icon: <HistoryOutlined />,
              label: "Video đã xem",
            },
            {
              key: "your_video",
              icon: <YoutubeOutlined />,
              label: "Video của bạn",
            },
            {
              key: "watch_later",
              icon: <ClockCircleOutlined />,
              label: "Xem sau",
            },
            {
              key: "liked_video",
              icon: <LikeOutlined />,
              label: "Video đã thích",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background bg-white p-0">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background bg-white"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <div>
            <Row>
              {videos.map((item, index) => {
                return (
                  <Col
                    xs={24}
                    sm={24}
                    md={12}
                    xl={6}
                    key={index}
                    style={{ padding: "10px 10px 20px" }}
                  >
                    <Link to="/video/1">
                      <YouTube
                        videoId="6CdzVGkrL5g"
                        opts={opts}
                        onReady={() => {
                          console.log("to")
                        }}
                      />
                      <div
                        style={{
                          marginTop: 8,
                          display: "flex",
                        }}
                      >
                        <div>
                          {" "}
                          <img
                            src="https://picsum.photos/36/36"
                            alt="avatar"
                            style={{
                              width: 36,
                              height: 36,
                              borderRadius: "50%",
                              marginRight: 12,
                            }}
                          />
                        </div>
                        <div>
                          <p
                            style={{
                              margin: 0,
                              color: "#030303",
                              fontWeight: 500,
                              fontSize: 14,
                            }}
                          >
                            A Barcelona 2008-09 Tiki-Taka Masterclass
                          </p>
                          <div style={{ fontSize: 12, color: "#606060" }}>
                            <p style={{ margin: 0 }}>Barca Studio</p>
                            <p style={{ margin: 0 }}>
                              4,6 Tr lượt xem • 1 năm trước
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
