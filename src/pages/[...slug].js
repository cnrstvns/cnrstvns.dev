import React from "react";

export default function NotFound() {
  return "";
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}
