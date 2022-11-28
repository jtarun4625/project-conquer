import React from "react";
import Table from "./Component/Table";
import LeftSideBar from "./Component/LeftSideBar";
import { useGlobalState } from "./state/index";
export default function Auction() {
  return (
    <>
      <section class="page-title">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h3 class="heading">Dashboard</h3>
            </div>
            <div class="col-md-6">
              <ul class="breadcrumb">
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>
                  <p class="fs-18">/</p>
                </li>
                <li>
                  <p class="fs-18">Dashboard</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="user-profile flat-tabs">
        <div class="container">
          <div class="row">
            <LeftSideBar />
            <div class="col-xl-9 col-md-12">
              <div class="content-tab">
                <div className="content-inner Onging Bid">
                  <Table
                    table_data={{
                      heading: "Auction Manage",
                      keys: [
                        "SNo.",
                        "Name",
                        "Start Date",
                        "End Date",
                        "CC",
                        "Starting Bid",
                        "Actions",
                      ],
                      data: [
                        {
                          name: "dgfdg",
                          start_day: "21-jan-2022",
                          end_day: "21-jan-2022",
                        },
                        {
                          name: "Megha",
                          start_day: "21-jan-2022",
                          end_day: "21-jan-2022",
                        },
                        {
                          name: "Subham",
                          start_day: "21-jan-2022",
                          end_day: "21-jan-2022",
                        },
                        {
                          name: "dgfdg",
                          start_day: "21-jan-2022",
                          end_day: "21-jan-2022",
                        },
                        {
                          name: "Megha",
                          start_day: "21-jan-2022",
                          end_day: "21-jan-2022",
                        },
                        {
                          name: "Subham",
                          start_day: "21-jan-2022",
                          end_day: "21-jan-2022",
                        },
                        {
                          name: "dgfdg",
                          start_day: "21-jan-2022",
                          end_day: "21-jan-2022",
                        },
                        {
                          name: "Megha",
                          start_day: "21-jan-2022",
                          end_day: "21-jan-2022",
                        },
                        {
                          name: "Subham",
                          start_day: "21-jan-2022",
                          end_day: "21-jan-2022",
                        },
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
