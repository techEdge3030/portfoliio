'use client';

import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import styles from './BoldTitle.module.scss';
import Container from "@/components/UI/Layout/Layout";
import TextReveal from "@/components/UI/Elements/TextReveal/TextReveal";
import Blobs from "@/components/UI/Elements/Blobs/Blobs";

export default function BoldTitle() {
    const boldTitle = useRef();
    const boldTitleLeft = useRef();
    const boldTitleRight = useRef();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        const splitTextLeft = new SplitText(boldTitleLeft.current, {
            type: 'chars',
        });
        const splitTextRight = new SplitText(boldTitleRight.current, {
            type: 'chars',
        });


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: boldTitle.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });

        // BoldText
        tl.fromTo(boldTitleLeft.current, {
            xPercent: -50,
        }, {
            xPercent: -10,
        }, 0);
        tl.fromTo(boldTitleRight.current, {
            xPercent: 50,
        }, {
            xPercent: 10,
        }, 0);

    });

    return (

        <section className={styles.section}>
            <Container className={styles.grid}>
                <TextReveal className={styles.paragraph}>
                    With experience in both front-end and back-end development, I have a solid understanding of projects and help facilitate effective communication across the team.
                </TextReveal>
                <h2 className={styles.boldTitle} ref={boldTitle}>
                    <span className={styles.boldTitleLeft} ref={boldTitleLeft}>Creative</span>
                    <span>FullStack</span>
                    <span className={styles.boldTitleRight} ref={boldTitleRight}>Developer</span>
                </h2>
                <TextReveal className={`${styles.paragraph} ${styles.paragraphAlt}`}>
                    Currently, I live in Hanoi, Vietnam.
                </TextReveal>

                <Blobs type={'v3'} classVariable={styles.blob} />
            </Container>
        </section>

    );
}