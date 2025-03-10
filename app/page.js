'use client';

import Image from "next/image";
import { Layout, Typography, Space, theme } from 'antd';
import CardRandomizer from "./components/CardRandomizer";
import CountdownTimer from "./components/CountdownTimer";
import styles from "./page.module.css";

const { Header, Content, Footer } = Layout;
const { Title, Link } = Typography;

export default function Home() {
  const { token } = theme.useToken();

  return (
    <Layout className={styles.layout}>
      <Content className={styles.content}>
        {/* ใส่นาฬิกาจับเวลาก่อน CardRandomizer */}
      
        
        <div className={styles.cardRandomizerContainer}>
        <CountdownTimer />
          <CardRandomizer />
        </div>
      </Content>
    </Layout>
  );
}