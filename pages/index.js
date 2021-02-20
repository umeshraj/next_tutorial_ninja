import Head from "next/head";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nihil
        quasi illo earum magni nobis?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
        perferendis suscipit quasi reprehenderit nulla assumenda.
      </p>
      <Footer />
    </div>
  );
}
