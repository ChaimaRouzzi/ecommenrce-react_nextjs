import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";
function Home() {
  return (
    <>
      <HeroBanner></HeroBanner>
      <div className="products-heading">
        <h2> Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["product1", "product2", "product3"].map((product) => product)}
      </div>
      <FooterBanner></FooterBanner>
    </>
  );
}
export const getServerSideProps = async () => {
  const query = "*[type=product]";
  const products = await client.fetch(query);
  const query2 = "*[type=banner]";
  const banners = await client.fetch(query);
  return {
    props: { products, banners },
  };
};
export default Home;
