import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1144176/pexels-photo-1144176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image from pexels"
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            optio ipsum fuga consequuntur consequatur aliquid, earum debitis
            fugiat nemo quas.
            <br />
            <br />
            Accusamus, praesentium temporibus, assumenda modi. Necessitatibus
            voluptatem quo aliquam. Itaque perferendis, perspiciatis incidunt
            quos exercitationem odit ipsum non fuga accusantium cumque dolores
            cum minus aperiam dignissimos necessitatibus et sint molestias.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            maiores soluta corporis mollitia saepe voluptas, ex ratione earum
            optio laboriosam!
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile App
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
