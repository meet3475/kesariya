// import React from "react";
// import ReactPlayer from "react-player";
// import { Card, Container } from "react-bootstrap";

// export const OwnclothingvideoCard = ({ manufacturevideo }) => {
//   const hasVideo = manufacturevideo && manufacturevideo.length > 0;
//   const firstVideo = hasVideo ? manufacturevideo[0] : {};

//   return (
//     <Container className="owncloning-sec px-3">
//       <div className="row">
//         <div className="col-12 p-0 p-lg-2">
//           <div className="pb-5">
//             <Card
//               className="mt-5 pb-2 own-video-card"
//               style={{ cursor: "pointer", paddingTop:"1px"}}
//             >
//               {hasVideo ? (
//                 <ReactPlayer
//                   url={firstVideo.video_url}
//                   controls
//                   className="react-video-card"
//                   config={{
//                     youtube: {
//                       playerVars: { showinfo: 1 },
//                     },
//                   }}
//                 />
//               ) : (
//                 <p className="text-light text-center">No video available</p>
//               )}
//               <h3 className="text-light text-center d-flex justify-content-center align-items-center mt-3 px-5 own-text">
//                 {firstVideo.heading || "No heading available"}
//               </h3>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

import React from "react";
import ReactPlayer from "react-player";
import { Card, Container } from "react-bootstrap";

export const OwnclothingvideoCard = ({ manufacturevideo }) => {
  const hasVideo = manufacturevideo && manufacturevideo.length > 0;
  const firstVideo = hasVideo ? manufacturevideo[0] : {};

  return (
    <Container className="owncloning-sec px-3">
      <div className="row">
        <div className="col-12 p-0 p-lg-2">
          <div className="pb-5">
            <Card
              className="mt-5 pb-2 own-video-card"
              style={{ cursor: "pointer", paddingTop: "1px" }}
            >
              <div style={{ position: "relative", paddingTop: "56.25%" }} className="own_text">
                <ReactPlayer
                  url={hasVideo ? firstVideo.video_url : null}
                  controls
                  className="react-video-card"
                  width="100%"
                  height="100%"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1 },
                    },
                  }}
                />
                {!hasVideo && (
                  <p
                    className="text-light text-center"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "100%",
                    }}
                  >
                    No video available
                  </p>
                )}
              </div>
              <h3 className="text-light text-center d-flex justify-content-center align-items-center mt-3 px-5 own-text">
                {firstVideo.heading || "No heading available"}
              </h3>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
};

