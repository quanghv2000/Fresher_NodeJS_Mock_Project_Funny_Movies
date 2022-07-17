import {
  Col,
  Row,
} from "antd";
import React from "react";
import "./styles.css";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

export const HomeContent = () => {
  const videos = [
    "b7DxNXHmxmY",
    "L0_hPoL0yM0",
    "sH_tyFTpvUI",
    "KePu2GTZlCE",
    "n5cNKv_xLqE",
    "121SP-v2mTo",
    "7gz-9C_BHdU",
    "D4mBl0n1DGY",
    "oQb6BvAJmQI",
    "1g52Rlj39OY",
    "ft-9CrKw258",
    "xwHC4cfn6UY",
  ];

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,
    },
  };

  return (
    <>
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
                    videoId={item}
                    opts={opts}
                    onReady={() => {
                      console.log("to");
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
    </>
  );
};
