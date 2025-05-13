'use client';

import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './Resume.module.scss';

import Image from "next/image";
import Container from "@/components/UI/Layout/Layout";
import FancyButton from "@/components/UI/Elements/Button/Button";
import commonConfig from "@/database/config/metadata.json";
import Link from "next/link";

export default function Resume() {
    const container = useRef();
    const cardGroup = useRef();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // CV Card
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardGroup.current,
                start: 'top 75%',
                end: 'top top',
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
        tl.to(`.${styles.cardV1}`, {
            rotate: '-6deg',
            scale: 1.05,
        }, 0);
        tl.to(`.${styles.cardV2}`, {
            rotate: '6deg',
            scale: 1.05,
            x: '5%'
        }, 0);

    }, { scope: container })


    return (
        <section className={styles.section} ref={container} id={'resume'}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.cardGroup} ref={cardGroup}>
                        <div className={`${styles.card} ${styles.cardV1}`}>
                            <div className={styles.cardInner}>
                                <div className={styles.cardTitle}>Do Quoc Dat</div>
                                <div className={styles.cardDesc}>Senior FullStack Developer</div>
                                <hr />
                                <p>
                                    I&apos;m Do Quoc Dat, a senior full-stack developer with over 6 years of professional experience. I specialize in building user-friendly websites using ReactJS and NextJS. I&apos;m detail-oriented, enjoy tackling technical challenges, and thrive in collaborative environments. I&apos;m always eager to learn new technologies and constantly push myself to grow as a developer.
                                </p>
                                <div>
                                    <Link href={`mailto:${commonConfig.personal.email}`} target={'_blank'}>
                                        {/* {commonConfig.personal.email} */}
                                    </Link>
                                    <span>{commonConfig.personal.city}, {commonConfig.personal.country}</span>
                                </div>
                                <hr />
                                <div className={styles.cardSectionTitle}>WORK EXPERIENCE</div>
                                <p>
                                    FullStack Developer | TPS Software <br />
                                    FullStack Developer | DFT JSC <br />
                                    UI & Frontend Developer | FPT Software <br />
                                </p>
                            </div>
                        </div>
                        <div className={`${styles.card} ${styles.cardV2}`}>
                            <div className={styles.cardInner}>
                                <Image src="/code-snippet.svg" alt="Code Snippet" width={330} height={480} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.cta}>
                        <FancyButton theme='button-1' target={'_blank'} link={commonConfig.personal.resumeURL}>View
                            Resume</FancyButton>
                    </div>
                </div>
            </Container>
        </section>
    )
}