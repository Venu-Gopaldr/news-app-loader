import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner5 from "./Spinner5";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  articles = [
    // {
    //   source: {
    //     id: null,
    //     name: "Storyboard18.com",
    //   },
    //   author: "Kashmeera Sambamurthy",
    //   title:
    //     "Microsoft-backed LinkedIn to introduce gaming on the platform - Storyboard18",
    //   description:
    //     "Microsoft-backed LinkedIn to introduce gaming on the platform",
    //   url: "https://www.storyboard18.com/gaming-news/microsoft-backed-linkedin-to-introduce-gaming-on-the-platform-26619.htm",
    //   urlToImage:
    //     "https://images.storyboard18.com/storyboard18/2024/02/Untitled-design-2024-02-02T162235.220-768x432.jpg",
    //   publishedAt: "2024-03-18T03:46:20Z",
    //   content:
    //     "The Microsoft-backed social media platform, LinkedIn, has plans to venture into gaming, according to a TechCrunch report. LinkedIn is a professional networking site with over one billion users. The r… [+1422 chars]",
    // },
    // {
    //   source: {
    //     id: null,
    //     name: "Livemint",
    //   },
    //   author: "Livemint",
    //   title:
    //     "Garena Free Fire Max redeem code for March 18, 2024: Win free rewards - Mint",
    //   description:
    //     "Garena Free Fire Max, a revamped version of the banned game Garena Free Fire, offers immersive graphics and intense gameplay. Daily redeem codes by 111 Dot Studios add to the excitement.",
    //   url: "https://www.livemint.com/technology/garena-free-fire-max-redeem-code-for-march-18-2024-win-free-diamonds-skins-weapons-an-more-11710729210903.html",
    //   urlToImage:
    //     "https://www.livemint.com/lm-img/img/2024/03/18/1600x900/4f51f049f2aae6726273d6469848d5be_1705800043531_1710731845653.jpg",
    //   publishedAt: "2024-03-18T03:25:20Z",
    //   content:
    //     "Garena Free Fire Max is a modified version of Garena Free Fire, a battle royale game banned by the Indian government in 2022. Since its release in India, Free Fire Max has made a name for itself thro… [+6052 chars]",
    // },
    // {
    //   source: {
    //     id: "google-news",
    //     name: "Google News",
    //   },
    //   author: null,
    //   title:
    //     "On Shubman Gill Replacing Hardik Pandya As Gujarat Titans Captain, Coach Gary Kirsten's Honest Take - NDTV Sports",
    //   description:
    //     "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
    //   url: "https://news.google.com/rss/articles/CBMiigFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9pcGwtMjAyNC9vbi1zaHVibWFuLWdpbGwtcmVwbGFjaW5nLWhhcmRpay1wYW5keWEtYXMtZ3VqYXJhdC10aXRhbnMtY2FwdGFpbi1jb2FjaC1nYXJ5LWtpcnN0ZW5zLWhvbmVzdC10YWtlLTUyNTU2NjfSAZABaHR0cHM6Ly9zcG9ydHMubmR0di5jb20vaXBsLTIwMjQvb24tc2h1Ym1hbi1naWxsLXJlcGxhY2luZy1oYXJkaWstcGFuZHlhLWFzLWd1amFyYXQtdGl0YW5zLWNhcHRhaW4tY29hY2gtZ2FyeS1raXJzdGVucy1ob25lc3QtdGFrZS01MjU1NjY3L2FtcC8x",
    //   urlToImage:
    //     "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
    //   publishedAt: "2024-03-18T03:10:08Z",
    //   content: null,
    // },
    // {
    //   source: {
    //     id: null,
    //     name: "Hindustan Times",
    //   },
    //   author: "ANI",
    //   title:
    //     "Gurdas Maan visits late Sidhu Moosewala's family after they welcome son: 'Parents have found solace in this child' - Hindustan Times",
    //   description:
    //     "Gurdas Maan congratulated the late Sidhu Moosewala's parents on the birth of a son. He called it “a significant day filled with joy”",
    //   url: "https://www.hindustantimes.com/entertainment/music/gurdas-maan-visits-late-sidhu-moosewalas-family-after-they-welcome-son-parents-have-found-solace-in-this-child-101710728805158.html",
    //   urlToImage:
    //     "https://www.hindustantimes.com/ht-img/img/2024/03/18/1600x900/Gurdas_Maan_Sidhu_Moosewala_1710730531341_1710730540141.jpg",
    //   publishedAt: "2024-03-18T02:58:10Z",
    //   content:
    //     "Punjabi singer Gurdas Maan recently visited the residence of the late Sidhu Moosewala to extend congratulations to his parents following the birth of a baby boy on Sunday, nearly two years after the … [+1591 chars]",
    // },
    // {
    //   source: {
    //     id: null,
    //     name: "NDTV News",
    //   },
    //   author: null,
    //   title:
    //     "Explained: Snake Venom Addiction And The Case Against YouTuber Elvish Yadav - NDTV",
    //   description:
    //     "Bigg Boss OTT winner Elvish Yadav was arrested in the snake venom-rave party case and remanded to 14-day judicial custody on Sunday.",
    //   url: "https://www.ndtv.com/india-news/explained-snake-venom-addiction-and-the-case-against-youtuber-elvish-yadav-5259675",
    //   urlToImage:
    //     "https://c.ndtvimg.com/2023-11/nrk03pl8_elvish-yadav_625x300_03_November_23.jpg?im=FeatureCrop,algorithm=dnn,width=650,height=400",
    //   publishedAt: "2024-03-18T02:58:09Z",
    //   content:
    //     "Snake venom case: Elvish Yadav is now in 14-day judicial custody. (File)\r\nBigg Boss OTT winner Elvish Yadav was arrested in the snake venom-rave party case and remanded to 14-day judicial custody on … [+2746 chars]",
    // },
    // {
    //   source: {
    //     id: "the-times-of-india",
    //     name: "The Times of India",
    //   },
    //   author: "Rajat Pandit",
    //   title:
    //     "Navy to bring 35 Somali pirates to India for prosecution - The Times of India",
    //   description:
    //     "India News: After successfully rescuing the hijacked merchant vessel Ruen and its 17-member crew, the Indian Navy is now bringing the 35 Somali pirates in its cus",
    //   url: "https://timesofindia.indiatimes.com/india/navy-to-bring-35-somali-pirates-to-india-for-prosecution/articleshow/108572733.cms",
    //   urlToImage:
    //     "https://static.toiimg.com/thumb/msid-108572832,width-1070,height-580,imgsize-914663,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    //   publishedAt: "2024-03-18T02:39:00Z",
    //   content:
    //     "The perfect one-week itinerary for Kerala, and the 7 places to cover",
    // },
    // {
    //   source: {
    //     id: null,
    //     name: "Business Standard",
    //   },
    //   author: "Harshita Singh",
    //   title:
    //     "Stocks to Watch: Adani Group, Torrent Power, HAL, Lupin, Railtel, KPI Green - Business Standard",
    //   description:
    //     "Stocks to watch on March 18, 2024: As per PTI, the Adani group will invest more than Rs 1.2 lakh crore in FY25 across its portfolio business with a special focus on green and renewable energy",
    //   url: "https://www.business-standard.com/markets/news/stocks-to-watch-adani-group-torrent-power-hindustan-aeronautics-lupin-124031800061_1.html",
    //   urlToImage:
    //     "https://bsmedia.business-standard.com/_media/bs/img/article/2023-04/10/full/1681113155-9159.jpg",
    //   publishedAt: "2024-03-18T02:25:30Z",
    //   content:
    //     "Adani Group: As per PTI, the group will invest more than Rs 1.2 lakh crore in FY25 across its portfolio business with a special focus on green and renewable energy.Separately, the US has widened its … [+173 chars]",
    // },
    // {
    //   source: {
    //     id: null,
    //     name: "Financial Express",
    //   },
    //   author: "The Financial Express",
    //   title:
    //     "Vivo T3 5G to launch in India on March 21 with this MediaTek processor: Full details - The Financial Express",
    //   description: null,
    //   url: "https://www.financialexpress.com/life/technology-vivo-t3-5g-to-launch-in-india-on-march-21-with-this-mediatek-processor-full-details-3428062/",
    //   urlToImage: null,
    //   publishedAt: "2024-03-18T02:25:21Z",
    //   content: null,
    // },
    // {
    //   source: {
    //     id: "google-news",
    //     name: "Google News",
    //   },
    //   author: null,
    //   title:
    //     "Watch: Virat Kohli Joins Smriti Mandhana And Co In Celebrations After WPL 2024 Victory - NDTV Sports",
    //   description:
    //     "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
    //   url: "https://news.google.com/rss/articles/CBMifmh0dHBzOi8vc3BvcnRzLm5kdHYuY29tL2lwbC0yMDI0L3ZpcmF0LWtvaGxpLWpvaW5zLXNtcml0aS1tYW5kaGFuYS1hbmQtY28taW4tY2VsZWJyYXRpb25zLWFmdGVyLXdwbC0yMDI0LXZpY3Rvcnktd2F0Y2gtNTI1ODA2MdIBhAFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9pcGwtMjAyNC92aXJhdC1rb2hsaS1qb2lucy1zbXJpdGktbWFuZGhhbmEtYW5kLWNvLWluLWNlbGVicmF0aW9ucy1hZnRlci13cGwtMjAyNC12aWN0b3J5LXdhdGNoLTUyNTgwNjEvYW1wLzE",
    //   urlToImage:
    //     "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
    //   publishedAt: "2024-03-18T02:18:47Z",
    //   content: null,
    // },
    // {
    //   source: {
    //     id: null,
    //     name: "Hindustan Times",
    //   },
    //   author: "Bloomberg",
    //   title:
    //     "North Korea fires ballistic missiles as top Biden official visits Seoul - Hindustan Times",
    //   description:
    //     "Several short-range ballistic missiles were fired from around 7:44 a.m. Monday from a province southeast of Pyongyang. | World News",
    //   url: "https://www.hindustantimes.com/world-news/north-korea-fires-ballistic-missiles-as-top-biden-official-visits-seoul-101710727439964.html",
    //   urlToImage:
    //     "https://www.hindustantimes.com/ht-img/img/2024/03/18/1600x900/pic_1710727706237_1710727722509.png",
    //   publishedAt: "2024-03-18T02:10:38Z",
    //   content:
    //     "North Korea fired multiple ballistic missiles in a defiant show of force that coincided with a visit to Seoul by US Secretary of State Antony Blinken for a Summit for Democracy.\r\nNorth Korea fired th… [+3539 chars]",
    // },
    // {
    //   source: {
    //     id: null,
    //     name: "Livemint",
    //   },
    //   author: "Ankit Gohel",
    //   title:
    //     "Nifty 50, Sensex today: What to expect from Indian stock market in trade on March 18 | Mint - Mint",
    //   description:
    //     "The trends on Gift Nifty also indicate a gap-down start for the Indian benchmark index. The Gift Nifty was trading around the 22,060 level, a discount of nearly 70 points from the Nifty futures’ previous close.",
    //   url: "https://www.livemint.com/market/stock-market-news/nifty-50-sensex-today-what-to-expect-from-indian-stock-market-in-trade-on-march-18-11710725855271.html",
    //   urlToImage:
    //     "https://www.livemint.com/lm-img/img/2024/03/18/1600x900/2-0-7_1710726138880_1710726139097.jpg",
    //   publishedAt: "2024-03-18T01:56:09Z",
    //   content:
    //     "The Indian stock market indices, Sensex and Nifty 50, are likely to open on a weak note Monday following mixed global market cues. The trends on Gift Nifty also indicate a gap-down start for the Indi… [+3731 chars]",
    // },
    // {
    //   source: {
    //     id: null,
    //     name: "Hindustan Times",
    //   },
    //   author: "HT News Desk",
    //   title:
    //     "Flipkart valuation declines over ₹41000 crore in two years: Major reasons why - Hindustan Times",
    //   description:
    //     "Flipkart's valuation declined to USD 35 billion as of January 31, 2024 from USD 40 billion in the financial year ended on January 31, 2022.",
    //   url: "https://www.hindustantimes.com/business/flipkart-valuation-declines-over-rs-41-000-crore-in-two-years-major-reasons-why-101710726440037.html",
    //   urlToImage:
    //     "https://www.hindustantimes.com/ht-img/img/2024/03/18/1600x900/FLIPKART-FUNDRAISE-WALMART-0_1708482279743_1710726624013.JPG",
    //   publishedAt: "2024-03-18T01:56:05Z",
    //   content:
    //     "Flipkart's valuation has declined by $5 billion or around 41,000 crore as of January 2024 compared to January 2022, as per equity transactions carried out by its US-based parent firm Walmart. The val… [+2135 chars]",
    // },
    // {
    //   source: {
    //     id: null,
    //     name: "Livemint",
    //   },
    //   author: "AP",
    //   title:
    //     "‘Alexei Navalny supported prisoner swap for…’, Putin's first comment on Kremlin critic's death | Mint - Mint",
    //   description:
    //     "Russian President Vladimir Putin expressed support for a prisoner exchange involving late opposition leader Alexei Navalny, denying any responsibility for Navalny's death and claiming he agreed to the exchange idea just days before Navalny's demise.",
    //   url: "https://www.livemint.com/news/world/alexei-navalny-supported-prisoner-swap-for-vladimir-putins-first-comment-on-kremlin-critics-death-11710725076693.html",
    //   urlToImage:
    //     "https://www.livemint.com/lm-img/img/2024/03/18/1600x900/RUSSIA-POLITICS-VOTE-PUTIN-24_1710725298534_1710725324107.jpg",
    //   publishedAt: "2024-03-18T01:34:40Z",
    //   content:
    //     "Russian President Vladimir Putin said early Monday that he supported an idea to release late opposition leader Alexei Navalny in a prisoner exchange just days before the man who was his biggest foe d… [+7797 chars]",
    // },
    // {
    //   source: {
    //     id: null,
    //     name: "NDTV News",
    //   },
    //   author: null,
    //   title:
    //     "In First Comment After Landslide Win, Putin Warns Of World War 3 - NDTV",
    //   description:
    //     "Russian President Vladimir Putin warned the West on Monday that a direct conflict between Russia and the U.S.-led NATO military alliance would mean the planet was one step away from World War Three but said hardly anyone wanted such a scenario.",
    //   url: "https://www.ndtv.com/world-news/will-be-one-step-away-from-world-war-3-vladimir-putin-on-russia-nato-conflict-5259358",
    //   urlToImage:
    //     "https://c.ndtvimg.com/2024-03/2fk0t8po_vladimir-putin_625x300_18_March_24.jpeg?ver-20240316.08",
    //   publishedAt: "2024-03-18T01:17:34Z",
    //   content:
    //     "Putin was speaking to reporters after winning the biggest ever landslide in post-Soviet Russian history\r\nMoscow: Russian President Vladimir Putin warned the West on Monday that a direct conflict betw… [+4130 chars]",
    // },
    // {
    //   source: {
    //     id: null,
    //     name: "Hindustan Times",
    //   },
    //   author: "HT News Desk",
    //   title:
    //     "Lok Sabha polls: PM Modi to campaign in Karnataka's Shivamogga today - Hindustan Times",
    //   description:
    //     "Ahead of the programme, BJP leaders said they expect around 2.5 lakh people to attend the PM's rally. | Latest News India",
    //   url: "https://www.hindustantimes.com/india-news/lok-sabha-polls-pm-modi-to-campaign-in-karnatakas-shivamogga-today-101710720624510.html",
    //   urlToImage:
    //     "https://www.hindustantimes.com/ht-img/img/2024/03/18/1600x900/Modi_roadshow_coimbatore_1710504882484_1710721110582.jpg",
    //   publishedAt: "2024-03-18T01:03:25Z",
    //   content:
    //     "Prime Minister Narendra Modi will address an election rally in Karnataka's Shivamogga on Monday, with this being his first rally in the southern state since the Election Commission of India (ECI), on… [+1934 chars]",
    // },
    // {
    //   source: {
    //     id: null,
    //     name: "Hindustan Times",
    //   },
    //   author: "HT News Desk",
    //   title:
    //     "Electoral bonds: Election commission releases data. Which party received how much? 10 points - Hindustan Times",
    //   description:
    //     "While the BJP received the maximum funds through electoral bonds at ₹6,986.5 crore, Future Gaming and Hotel Services donated ₹509 crore to the DMK.  | Latest News India",
    //   url: "https://www.hindustantimes.com/india-news/electoral-bonds-election-commissions-data-shows-which-party-received-how-much-10-points-101710721398573.html",
    //   urlToImage:
    //     "https://www.hindustantimes.com/ht-img/img/2024/03/18/1600x900/election_1710492327245_1710723067075.JPG",
    //   publishedAt: "2024-03-18T00:56:54Z",
    //   content:
    //     "The Election Commission of India on Sunday released data received from political parties on electoral bonds, which it had given to the Supreme Court in sealed covers, following a directive from the a… [+3225 chars]",
    // },
    // {
    //   source: {
    //     id: null,
    //     name: "Digital Trends",
    //   },
    //   author: "Trevor Mogg",
    //   title:
    //     "SpaceX shares awesome rocket imagery from Starship flight - Digital Trends",
    //   description:
    //     "SpaceX has shared some breathtaking imagery from the most recent Starship flight, including a close-up of the 120-meter-tall rocket leaving the launchpad.",
    //   url: "https://www.digitaltrends.com/space/spacex-shares-awesome-rocket-imagery-from-starship-flight/",
    //   urlToImage:
    //     "https://www.digitaltrends.com/wp-content/uploads/2024/03/starship-test.jpeg?resize=1200%2C630&p=1",
    //   publishedAt: "2024-03-18T00:55:30Z",
    //   content:
    //     "SpaceX’s third Starship test flight last Thursday was its best yet, far exceeding the first two missions, which took place last year and ended in huge fireballs just a few minutes in.\r\nThis time, the… [+2481 chars]",
    // },
    // {
    //   source: {
    //     id: "the-times-of-india",
    //     name: "The Times of India",
    //   },
    //   author: "ET HealthWorld",
    //   title:
    //     "Gut bacteria generate neurotransmitters that shape the neonatal immune system: Study - ETHealthWorld",
    //   description:
    //     "Weill Cornell Medicine researchers discovered that specific bacteria colonise the gut shortly after birth and produce the neurotransmitter serotonin, which educates gut immune cells. This helps to prevent allergic responses to both food and microbes during ea…",
    //   url: "https://health.economictimes.indiatimes.com/news/industry/gut-bacteria-generate-neurotransmitters-that-shape-the-neonatal-immune-system-study/108571789",
    //   urlToImage:
    //     "https://etimg.etb2bimg.com/thumb/msid-108571789,imgsize-8434,width-1200,height=765,overlay-ethealth/industry/gut-bacteria-generate-neurotransmitters-that-shape-the-neonatal-immune-system-study.jpg",
    //   publishedAt: "2024-03-18T00:27:21Z",
    //   content:
    //     "Gut bacteria generate neurotransmitters that shape the neonatal immune system: Study\r\nNew York , March 17 (ANI): Weill Cornell Medicine researchers discovered that specific bacteria colonise the gut … [+4397 chars]",
    // },
    // {
    //   source: {
    //     id: null,
    //     name: "YouTube",
    //   },
    //   author: null,
    //   title: "2024 Total solar eclipse quickly approaching - FOX 26 Houston",
    //   description:
    //     "FOX's Lauren Rangel has more on why the eclipse is such a big deal.Subscribe to FOX 26 Houston: https://www.youtube.com/myfoxhouston26?sub_confirmation=1Watc...",
    //   url: "https://www.youtube.com/watch?v=n2E4dfA452E",
    //   urlToImage: "https://i.ytimg.com/vi/n2E4dfA452E/hqdefault.jpg",
    //   publishedAt: "2024-03-17T23:55:16Z",
    //   content: null,
    // },
    // {
    //   source: {
    //     id: "the-times-of-india",
    //     name: "The Times of India",
    //   },
    //   author: "Samir Jain",
    //   title:
    //     "Horoscope Today, March 18, 2024: Read your daily astrological predictions - The Times of India",
    //   description:
    //     "Horoscope(Old) News: Horoscope Today: Read daily horoscope predictions for March 18, 2024. Know all about the astrological events and influences that will be affecting eac",
    //   url: "https://timesofindia.indiatimes.com/astrology/horoscope/horoscope-today-march-18-2024-read-your-daily-astrological-predictions/articleshow/108567345.cms",
    //   urlToImage:
    //     "https://static.toiimg.com/thumb/msid-108569237,width-1070,height-580,imgsize-81848,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    //   publishedAt: "2024-03-17T23:30:00Z",
    //   content: null,
    // },
  ];

  static defaultProps = {
    country: "in",
    pageSize: 6,
  };
  static propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
  };

  capitializeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  constructor(props) {
    // console.log("i'm a construct/or")
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults : 0, 
    };
    document.title = `Newzify - ${this.capitializeFirstLetter(this.props.category)}`
  }

  async UpdateNews() {
    let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    {
      this.setState({ loading: true });
    }
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults,
    });
  }

  fetchMoreData = async() =>{
    this.setState({page : this.state.page + 1});
    let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading : false,
    });
  }
  async componentDidMount() {
    this.UpdateNews();
  }



  // handleNxtClick = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.UpdateNews();
  // };

  // handlePrevClick = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.UpdateNews();
  // };

  render() {
    // console.log("Render");
    return (
      <>
          <h2 className="text-center" style={{marginTop:"60px",}}>Newzify - Top {this.capitializeFirstLetter(this.props.category)} Headlines</h2>
          {this.state.loading && <Spinner5 />}
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner5/>}
        >
        <div className="container my-3">
          <div className="row mb-3">
            {this.state.articles.map((element) => {
                // console.log(element)
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title.slice(0, 40) : " "}
                      description={
                        element.description ? element.description : " "
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://assets.teenvogue.com/photos/570c1b914005974b596c3d2f/16:9/w_1600,c_limit/emoji-tout.jpg"
                      }
                      author = {element.author?element.author : "Unknown"}
                      date = {element.publishedAt}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between my-3">
          <button
            className="btn btn-primary btn-lg"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            &#8592; Previous
          </button>
          <button
            className="btn btn-primary btn-lg"
            disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
            onClick={this.handleNxtClick}
          >
            Next &#8594;
          </button>
        </div> */}
      </>
    );
  }
}
