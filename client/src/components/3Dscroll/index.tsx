'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';

const data = [
    {
        title: "RTX1650",
        description: "Dòng GAMING phản ánh cả tinh thần game thủ và hiệu năng mạnh mẽ được chất chứa trong một card đồ họa với phong cách thiết kế bên ngoài nổi bật nhiều ánh sáng màu sắc giữa các đường và các cạnh.",
        speed: 0.5
    },
    {
        title: "Chip GeForce RTX 40",
        description: "Phần mềm MSI Center độc quyền của MSI giúp bạn khai thác tối đa các sản phẩm MSI của mình.",
        speed: 0.67
    },
    {
        title: "CHƠI GAME CÓ PHONG CÁCH",
        description: "Luôn mát mẻ và yên lặng. Thiết kế tản nhiệt TWIN FROZR 9 của MSI tăng cường khả năng tản nhiệt trên tất cả card đồ họa.",
        speed: 0.5
    }
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className={styles.rtxtitle}>
            <Titles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
    )
}