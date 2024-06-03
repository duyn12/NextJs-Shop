/* eslint-disable @next/next/no-img-element */
"use client";

import Image from 'next/image';
import styles from './page.module.scss'; // Combining styles import here
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Button } from '../ui/button';

// Define types for the Card component props
interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  progress: any; // Adjust this type based on the actual type of progress
  range: number[];
  targetScale: number;
}

// Card Component
const CardProps: React.FC<CardProps> = ({ i, title, description, src, url, progress, range, targetScale }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div 
        style={{ backgroundColor: scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className={styles.card}
      >
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
          <div className={styles.imageContainer}>
            <motion.div
              className={styles.inner}
              // style={{ scale: imageScale }}
            >
              <Image
                fill
                className="gallery-pic"
                src={`/images/${src}`}
                alt="image" 
              />
              {/* <Image
                fill
                src={`/images/${src}`}
                alt="image" 
              /> */}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Define types for the project data
interface Project {
  title: string;
  description: string;
  src: string;
  url: string;
}

// Home Page Component
const Card: React.FC = () => {
  const container = useRef<HTMLMapElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const projects: Project[] = [
    {
      title: "CLUTCH GM31 LIGHTWEIGHT",
      description: "Được nghiên cứu chế tạo để giảm thiểu ma sát với lót chuột và mặt bàn, mẫu cáp FriXionFree của MSI cải thiện trải nghiệm chơi game của bạn với sự trơn tru và linh hoạt.",
      src: "MSIC.png",
      url: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/"
    },
    {
      title: "IMMERSE GH61",
      description: "Tái tạo mọi âm thanh trong game với độ phân giải cao và màng loa 40mm được ONKYO tinh chỉnh và thiết kế.",
      src: "MSIT.png",
      url: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/"
    },
    {
      title: "Zissou",
      description: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
      src: "MSITD.png",
      url: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/"
    },
    {
      title: "GeForce GTX 1080 GAMING X 8G",
      description: "Công nghệ quạt MSI TORX 2.0 độc quyền sử dụng sức mạnh kết hợp để cho phép Tản Nhiệt TWIN FROZR VI đạt được hiệu năng tản nhiệt cao nhất.",
      src: "MSIC1.png",
      url: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/"
    },
  ];

  return (
    <div className='flex'>
    <div className={styles.titleContainer}>
      <h1 className='uppercase'>/Sản phẩm nổi bật</h1>
      <p>Sức mạnh và độ chính xác đến từ Máy tính xách tay MSI Studio. Nhiều máy tính xách tay MSI Studio khác nhau mang đến trải nghiệm người dùng chất lượng cao trên các ứng dụng sáng tạo, tăng tốc tối ưu cho các trò chơi đa tác vụ và đòi hỏi hiệu năng. Tận hưởng một studio sẵn sàng hoạt động tất cả trong một máy tính xách tay.</p>
      <Button className='filling-cta my-10'>Tất cả sản phẩm</Button>
    </div>
    <main ref={container} className={styles.main}>
     
      {
        projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return (
            <CardProps
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })
      }
    </main>
    </div>
  );
}

export default Card;
