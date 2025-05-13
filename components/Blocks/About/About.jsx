"use client";

import React from 'react';
import styles from './About.module.scss';
import Title from "@/components/UI/Elements/Title/Title";
import TextReveal from "@/components/UI/Elements/TextReveal/TextReveal";
import SeattleMap from "@/components/UI/Cards/SeattleMap/SeattleMap";
import Stats from "@/components/UI/Cards/Stats/Stats";
import ParallaxImage from "@/components/UI/ParallaxImage/ParallaxImage";

export default function About() {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>

                <header className={styles.header}>
                    <Title heading={'h3'} color="black"><span>I&apos;m a</span> <br/>
                        Passionate FullStack Developer
                    </Title>
                    <TextReveal className={styles.description}>
                        I would describe myself as a creative web developer with over 6 years of experience in development.
                    </TextReveal>
                </header>

                <ParallaxImage src={"/gallery/IMG-20190712-WA0010.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
                <ParallaxImage src={"/gallery/IMG_20210713_103018.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
                <ParallaxImage src={"/gallery/IMG_20200720_191527.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />

                <Stats className={styles.stats} />

            </div>

            <div className={styles.grid}>
                <header className={styles.header}>
                    <TextReveal className={styles.de7scription}>
                        I&apos;ve worked in UI design and fullstack development, so I can understand designs well and help the team communicate effectively.
                    </TextReveal>
                </header>
                <ParallaxImage src={"/gallery/IMG_20230325_154428.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
                <ParallaxImage src={"/gallery/G0062517.JPG"} alt={`An image`} width={800} height={1200} className={styles.figure} />
                <ParallaxImage src={"/gallery/IMG_20220129_133838.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
                <ParallaxImage src={"/gallery/IMG_20220821_193826.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
            </div>

            <div className={styles.grid}>
                <header className={styles.header}>
                    <TextReveal className={styles.description}>
                        I live in Hanoi, Vietnam. 
                    </TextReveal>
                </header>
                <ParallaxImage src={"/gallery/IMG_20231225_165326.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
                <SeattleMap className={styles.map} />
                <ParallaxImage src={"/gallery/IMG_20231210_140134.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
                <ParallaxImage src={"/gallery/IMG_20230420_161256.jpg"} alt={`An image`} width={800} height={1200} className={styles.figure} />
            </div>
        </section>
    );
}