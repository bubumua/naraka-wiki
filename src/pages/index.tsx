import type {CSSProperties, ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import heroVisual from '@site/static/img/naraka/screenshot-04.jpg';
import duelVisual from '@site/static/img/naraka/screenshot-02.jpg';
import moodVisual from '@site/static/img/naraka/wallpaper-full-02.jpg';
import spotlightVisual from '@site/static/img/naraka/wallpaper-full-04.jpg';

import styles from './index.module.css';

type NavCard = {
  title: string;
  to: string;
  eyebrow: string;
  description: string;
};

type ShowcaseCard = {
  title: string;
  detail: string;
  image: string;
};

type ImageOverlay = {
  darkStart: string;
  darkEnd: string;
  lightStart: string;
  lightEnd: string;
};

const navCards: NavCard[] = [
  {
    title: '武器总览',
    to: '/docs/weapons/overview-weapon',
    eyebrow: 'Weapons',
    description: '从近战、远程和同源技切入，先建立武器体系的全貌。',
  },
  {
    title: '英雄与技能',
    to: '/docs/heroes/宁红夜',
    eyebrow: 'Heroes',
    description: '围绕英雄定位、技能节奏和奥义思路整理人物入口。',
  },
  {
    title: '魂玉与构筑',
    to: '/docs/souljades/attribute',
    eyebrow: 'Souljades',
    description: '把属性、功能与招式改造拆开看，减少配装理解成本。',
  },
  {
    title: '战斗机制',
    to: '/docs/combat-mechanics/dominance',
    eyebrow: 'Combat',
    description: '聚焦霸体、减伤、博弈与反制，适合作为进阶查阅入口。',
  },
];

const recommendedReads: NavCard[] = [
  {
    title: '游戏介绍',
    to: '/docs/intro',
    eyebrow: 'Start Here',
    description: '先了解游戏模式、平台互通与站点内容边界。',
  },
  {
    title: '控制与键位',
    to: '/docs/control/',
    eyebrow: 'Control',
    description: '把操作层和机制层拆开整理，适合回查基础动作。',
  },
  {
    title: '消耗品',
    to: '/docs/consumables/normal',
    eyebrow: 'Consumables',
    description: '补给、战术道具和局内资源的定位放在同一条线里看。',
  },
];

const showcaseCards: ShowcaseCard[] = [
  {
    title: '战斗演出',
    detail: '首页主视觉来自官方媒体页，突出近身压迫感与技能爆发。',
    image: heroVisual,
  },
  {
    title: '角色氛围',
    detail: '以偏静态的官方壁纸平衡第一屏的攻击性，避免首页只有喊口号。',
    image: moodVisual,
  },
  {
    title: '武侠奇观',
    detail: '补一张偏亮的立绘型视觉，让页面层次从冷峻切到绚烂。',
    image: spotlightVisual,
  },
];

function buildImageStyle(image: string, overlay: ImageOverlay): CSSProperties {
  return {
    '--image-url': `url(${image})`,
    '--dark-overlay-start': overlay.darkStart,
    '--dark-overlay-end': overlay.darkEnd,
    '--light-overlay-start': overlay.lightStart,
    '--light-overlay-end': overlay.lightEnd,
  };
}

function NavGrid({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: NavCard[];
}): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionEyebrow}>Quick Access</p>
            <Heading as="h2" className={styles.sectionTitle}>
              {title}
            </Heading>
          </div>
          <p className={styles.sectionDescription}>{description}</p>
        </div>
        <div className={styles.cardGrid}>
          {items.map((item) => (
            <Link key={item.title} className={styles.navCard} to={item.to}>
              <span className={styles.cardEyebrow}>{item.eyebrow}</span>
              <Heading as="h3" className={styles.cardTitle}>
                {item.title}
              </Heading>
              <p className={styles.cardDescription}>{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="永劫无间 Wiki"
      description="围绕武器、英雄、魂玉、控制和战斗机制整理的永劫无间知识索引。">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div
            className={styles.heroBackdrop}
            style={buildImageStyle(heroVisual, {
              darkStart: 'rgba(8, 11, 18, 0.84)',
              darkEnd: 'rgba(8, 11, 18, 0.55)',
              lightStart: 'rgba(248, 241, 230, 0.18)',
              lightEnd: 'rgba(248, 241, 230, 0.52)',
            })}
          />
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.heroCopy}>
                <p className={styles.heroEyebrow}>NARAKA KNOWLEDGE INDEX</p>
                <Heading as="h1" className={styles.heroTitle}>
                  永劫无间 Wiki
                </Heading>
                <p className={styles.heroLead}>
                  用更像资料库而不是宣传页的方式，整理英雄、武器、魂玉、控制和战斗机制。
                  首页先给你方向，再把你送到真正有用的文档里。
                </p>
                <div className={styles.actions}>
                  <Link className={styles.primaryAction} to="/docs/intro">
                    从游戏介绍开始
                  </Link>
                  <Link className={styles.secondaryAction} to="/docs/weapons/overview-weapon">
                    进入武器总览
                  </Link>
                </div>
                <div className={styles.statGrid}>
                  <div className={styles.statCard}>
                    <span className={styles.statValue}>6</span>
                    <span className={styles.statLabel}>当前主分类</span>
                  </div>
                  <div className={styles.statCard}>
                    <span className={styles.statValue}>4</span>
                    <span className={styles.statLabel}>首页已接入官方素材</span>
                  </div>
                  <div className={styles.statCard}>
                    <span className={styles.statValue}>zh-Hans / en</span>
                    <span className={styles.statLabel}>站点语言配置</span>
                  </div>
                </div>
              </div>

              <aside className={styles.heroPanel}>
                <p className={styles.panelEyebrow}>Homepage Direction</p>
                <Heading as="h2" className={styles.panelTitle}>
                  先用官方视觉建立气氛，再把知识入口压到第一屏以内。
                </Heading>
                <p className={styles.panelDescription}>
                  视觉层负责告诉访问者这是一个有明确主题的 Naraka 站点，信息层负责让人三秒内知道该点哪里。
                </p>
                <div
                  className={styles.panelVisual}
                  style={buildImageStyle(duelVisual, {
                    darkStart: 'rgba(8, 11, 18, 0.2)',
                    darkEnd: 'rgba(8, 11, 18, 0.38)',
                    lightStart: 'rgba(248, 241, 230, 0.06)',
                    lightEnd: 'rgba(248, 241, 230, 0.2)',
                  })}
                />
                <ul className={styles.panelList}>
                  <li>优先入口放在武器、英雄、魂玉、战斗机制四条主线上。</li>
                  <li>配图全部来自官方媒体页，避免首页视觉来源混乱。</li>
                  <li>保留 Docusaurus 的导航能力，但不再保留默认模板文案。</li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <NavGrid
          title="从四条主线进入站点"
          description="如果你是第一次进站，直接从这四个入口切入最省时间。页面命名和目录结构已经按主题拆好。"
          items={navCards}
        />

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.sectionEyebrow}>Visual Layer</p>
                <Heading as="h2" className={styles.sectionTitle}>
                  首页视觉编排
                </Heading>
              </div>
              <p className={styles.sectionDescription}>
                素材下载到了 <code>static/img/naraka/</code>，现在首页已经围绕这些资源建立了主视觉、辅助视觉和内容分区。
              </p>
            </div>
            <div className={styles.showcaseGrid}>
              {showcaseCards.map((card) => (
                <article
                  key={card.title}
                  className={styles.showcaseCard}
                  style={buildImageStyle(card.image, {
                    darkStart: 'rgba(8, 11, 18, 0.14)',
                    darkEnd: 'rgba(8, 11, 18, 0.4)',
                    lightStart: 'rgba(248, 241, 230, 0.04)',
                    lightEnd: 'rgba(248, 241, 230, 0.22)',
                  })}>
                  <div className={styles.showcaseScrim} />
                  <div className={styles.showcaseCopy}>
                    <p className={styles.cardEyebrow}>Official Media</p>
                    <Heading as="h3" className={styles.cardTitle}>
                      {card.title}
                    </Heading>
                    <p className={styles.cardDescription}>{card.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <NavGrid
          title="推荐继续阅读"
          description="第二层入口更偏查阅型，适合已经知道自己要补哪一块知识的玩家。"
          items={recommendedReads}
        />
      </main>
    </Layout>
  );
}
