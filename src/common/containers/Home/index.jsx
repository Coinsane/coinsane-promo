// @flow
import React from 'react';
import { Helmet } from 'react-helmet';
import { Image } from 'semantic-ui-react';

import Head from 'components/Head';
import Footer from 'components/Footer';
import Features from 'components/_organisms/Features';
import Team from 'components/_organisms/Team';
// import Press from 'components/_organisms/Press';
// import JoinAs from 'components/_organisms/JoinAs';
import DownloadSection from 'components/_organisms/DownloadSection';
import Section from 'components/_organisms/Section';
import RoadMap from 'components/_organisms/RoadMap';
import { StyledHome } from './style';

const Home = () => {
  const features = [
    {
      id: 1,
      title: 'Monitoring of crypto-portfolio',
      description: '',
      icons: [
        {
          id: 1,
          src: 'coins/btc.svg',
          top: '140px',
          left: '45px',
          rotate: '-45deg',
        },
        {
          id: 2,
          src: 'coins/eth.svg',
          top: '60px',
          right: '60px',
          rotate: '25deg',
        },
        {
          id: 3,
          src: 'chart-line.svg',
          top: '270px',
          right: '45px',
        },
      ],
    },
    {
      id: 2,
      title: 'Statistical data',
      description: '',
      front: true,
      icons: [
        {
          id: 1,
          src: 'chart-line-2.svg',
          top: '270px',
          left: '20px',
        },
        {
          id: 2,
          src: 'chart-pie.svg',
          top: '90px',
          right: '55px',
        },
      ],
    },
    {
      id: 3,
      title: 'Current market information',
      description: '',
      icons: [
        {
          id: 1,
          src: 'coins/neo.svg',
          top: '150px',
          left: '40px',
        },
        {
          id: 2,
          src: 'coins/xmr.svg',
          top: '300px',
          right: '45px',
        },
      ],
    },
    {
      id: 4,
      title: 'Сoins - statistics',
      description: '',
      icons: [
        {
          id: 1,
          src: 'chart-line-3.svg',
          top: '100px',
          left: '30px',
        },
        {
          id: 2,
          src: 'news.svg',
          top: '420px',
          right: '50px',
          rotate: '25deg',
        },
      ],
    },
    {
      id: 5,
      title: 'Сoins - transactions',
      description: '',
      icons: [
        {
          id: 1,
          src: 'calendar.svg',
          top: '130px',
          left: '45px',
          rotate: '25deg',
        },
        {
          id: 2,
          src: 'add.svg',
          top: '390px',
          right: '45px',
        },
        {
          id: 3,
          src: 'coins/xmr.svg',
          top: '160px',
          right: '45px',
        },
      ],
    },
    {
      id: 6,
      title: 'Settings',
      description: '',
      icons: [
        {
          id: 1,
          src: 'switch.svg',
          top: '150px',
          left: '35px',
        },
        {
          id: 2,
          src: 'usa.svg',
          top: '80px',
          right: '50px',
          rotate: '25deg',
        },
        {
          id: 3,
          src: 'twitter-2.svg',
          top: '390px',
          right: '45px',
        },
      ],
    },
    {
      id: 7,
      title: 'Create your account',
      description: '',
      icons: [
        {
          id: 1,
          src: 'shield.svg',
          top: '330px',
          left: '45px',
          rotate: '-25deg',
        },
        {
          id: 2,
          src: 'update.svg',
          top: '120px',
          right: '45px',
        },
      ],
    },
    {
      id: 8,
      title: 'Add new transactions',
      description: '',
      icons: [
        {
          id: 1,
          src: 'coins/eth.svg',
          top: '100px',
          left: '50px',
          rotate: '-25deg',
        },
        {
          id: 2,
          src: 'buy.svg',
          top: '310px',
          left: '30px',
        },
        {
          id: 3,
          src: 'usa.svg',
          top: '250px',
          right: '50px',
          rotate: '25deg',
        },
      ],
    },
  ];
  const members = [
    {
      id: 1,
      photo: require('static/images/description.svg'),
      name: 'Artem Kashin',
      description: 'CTO, Fullstack developer',
    },
    {
      id: 2,
      photo: require('static/images/description.svg'),
      name: 'Artem Kashin',
      description: 'CTO, Fullstack developer',
    },
    {
      id: 3,
      photo: require('static/images/description.svg'),
      name: 'Artem Kashin',
      description: 'CTO, Fullstack developer',
    },
  ];
  // const partners = [
  //   {
  //     id: 1,
  //     photo: require('static/images/description.svg'),
  //   },
  //   {
  //     id: 2,
  //     photo: require('static/images/description.svg'),
  //   },
  //   {
  //     id: 3,
  //     photo: require('static/images/description.svg'),
  //   },
  //   {
  //     id: 4,
  //     photo: require('static/images/description.svg'),
  //   },
  // ];
  // const articles = [
  //   {
  //     id: 1,
  //     photo: require('static/images/description.svg'),
  //     title: 'Tests Go First',
  //     description: 'Countrary to popular belief, Lorem Ipsum is not simply random text',
  //     name: 'Ben Doring',
  //     date: 'Oct 27 - 8 Minutes read',
  //   },
  //   {
  //     id: 2,
  //     photo: require('static/images/description.svg'),
  //     title: 'Tests Go First. Usability Testing in Design.',
  //     description: 'Countrary to popular belief, Lorem Ipsum is not simply random text',
  //     name: 'Ben Doring',
  //     date: 'Oct 27 - 8 Minutes read',
  //   },
  //   {
  //     id: 3,
  //     photo: require('static/images/description.svg'),
  //     title: 'Tests Go First. Usability Testing in Design.',
  //     description: 'Countrary to popular belief, Lorem Ipsum is not simply random text',
  //     name: 'Ben Doring',
  //     date: 'Oct 27 - 8 Minutes read',
  //   },
  // ];
  const quarter = [
    {
      id: 4,
      title: 'Planning',
      description: '- Structer\n- Design',
      titleMap: 'Q1.2018',
      statusMap: 'old_step',
    },
    {
      id: 1,
      title: 'App MVP',
      description: '- Portfolios manager\n- Charts\n- Add coins\n- Transactions\n- Market overview',
      titleMap: 'Q2.2018',
      statusMap: 'passed_step',
    },
    {
      id: 2,
      title: 'App Stable',
      description: '- Subscription model\n- Push events\n- User account\n- Portfolios from exchanges api\n- Wallets & transactions from blockchain',
      titleMap: 'Q3.2018',
      statusMap: 'current_step',
    },
    {
      id: 3,
      title: 'Crowdsale, PromoCons',
      description: '- Stores list\n- Admin panel\n- CSN token model\n- Airdrop\n- Acquire partners',
      titleMap: 'Q4.2018',
      statusMap: 'next_step',
    },
  ];

  return (
    <StyledHome>
      <Helmet>
        <title>Coinsane</title>
        <meta name="description" content="Crypto accounting platform" />
      </Helmet>
      <Head />

      <Section
        id="description"
        title="Description"
      >
        <div className="flex">
          <div className="flex-item-3">
            <Image
              className="description-image"
              src={require('static/images/illustration.png')}
            />
          </div>
          <div className="flex-item-7">
            <p className="description-p">
              {'Our goal is to bring to a new level the simplicity and convenience of working with crypto assets. Based on the Coinsane platform, we are developing a universal service for decentralized banking blockchain.'}
            </p>
            {/* <FormattedMessage className="description-p" id="Home.p2" /> */}
          </div>
        </div>
      </Section>

      <Section
        id="features"
        title="Features"
        background="radial-gradient(50% 96%, #F9F9FC 0%, #EFF1F6 96%)"
      >
        <Features
          list={features}
        />
      </Section>

      <Section
        id="roadmap"
        title="Roadmap"
        color="white"
        background="linear-gradient(-135deg, #322B48 0%, #1B152D 100%)"
      >
        <RoadMap quarter={quarter} />
      </Section>

      <Section
        id="team"
        title="Team"
        background="#fff"
      >
        <Team members={members} />
      </Section>

      {/* <Section
        id="partners"
        background="linear-gradient(-135deg, #322B48 0%, #1B152D 100%)"
      >
        <JoinAs partners={partners} />
      </Section> */}

      {/* <Section
        id="press"
        title="Press about us"
        background="radial-gradient(50% 96%, #F9F9FC 0%, #EFF1F6 96%)"
      >
        <Press articles={articles} />
      </Section> */}

      <DownloadSection
        background="linear-gradient(90deg, #9A84FF 3%, #575EF3 100%)"
        image={require('static/images/iphone-download.png')}
        imageSet={require('static/images/iphone-download@2x.png')}
        title="Download the App"
        description="Our app is available for ios and android download now and enjoy this app on your smartphone anytime"
      />

      <Footer />
    </StyledHome>
  );
};

export default Home;
