import React from "react";
import css from "../styles/Menu.module.css";
import Image from "next/image";
import { UrlFor } from "../lib/client";
import Link from "next/link";

export default function Menu({ pizzas }) {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Menu That Always</span>
        <span>Make you Fall in Love</span>
      </div>

      {/* pizzas */}

      <div className={css.menu}>
        {pizzas.map((pizza, id) => {
          const src = UrlFor(pizza.image).url();
          return (
            <div className={css.pizza} key={id}>
              <Link href={`./pizza/${pizza.slug.current}`}>
                <div className={css.ImageWrapper}>
                  <Image
                    loader={() => src}
                    src={src}
                    alt=""
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </Link>
              <span>{pizza.name}</span>
              <span>
                <span style={{ color: "var(--themeRed)" }}>$</span>{" "}
                {pizza.price[1]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
