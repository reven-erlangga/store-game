import Navbar from "@/../components/organisms/Navbar";
import TopUpItem from "@/../components/organisms/TopUpItem";
import React from "react";

export default function Detail() {
  const dataItem = {
    _id: "string",
    status: "string",
    name: "string",
    thumbnail: "string",
    category: {
      _id: "string",
      name: "string",
      __v: 1,
    },
  };

  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem data={dataItem} type="mobile" />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem data={dataItem} type="desktop" />
              <hr />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
