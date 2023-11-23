import { component$ } from "@builder.io/qwik";
import { HuibleLogo } from "../icons/huible";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          <a href="/" title="HU·IBLE">
            <HuibleLogo height={50} width={143} />
          </a>
        </div>
        <ul>
          <li>
            <a
              href="/Features/"
              target="_blank"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="/Blog/"
              target="_blank"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/Pricing/"
              target="_blank"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="/contact/"
              target="_blank"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
