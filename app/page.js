import Link from "next/link";
import classes from "./page.module.css"
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    // <main>
    //   <h1 style={{ color: 'white', textAlign: 'center' }}>
    //     Time to get started!
    //   </h1>
    //   <p><Link href="/meals">Meals</Link></p>
    //   <p><Link href="/meals/share">Share Meal</Link></p>
    //   <p><Link href="/community">Community</Link></p>
    // </main>
    <>
    <header className={classes.header}>
      <div className={classes.slideshow}>
     <ImageSlideshow/>
      </div>
      <div>
        <div className={classes.hero}>
          <h1>NextLevel Food for NextLevel Foodies</h1>
          <p>Taste and share food from all over he world.</p>
        </div>
        <div className={classes.cta}>
          <Link href="/community">Join the Community</Link>
          <Link href="/meals">Explore Meals</Link>
        </div>
      </div>
    </header>
    <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
