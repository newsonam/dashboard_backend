// productschema of products
const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    end_year: {
        type: Number

    },
    intensity:
    {
        type: Number

    },
    sector:
    {
        type: String

    },
    topic:
    {
        type: String

    },

    start_year:
    {
        type: Number

    },

    country:
    {
        type: String

    },

    topic:
    {
        type: String

    },
    insight:
    {
        type: String

    },
    url:
    {
        type: String

    },
    region:
    {
        type: String

    },

    impact:
    {
        type: Number

    },
    added:
    {
        type: String

    },
    published:
    {
        type: String
    },
    country:
    {
        type: String

    },
    relevance:
    {
        type: Number

    },
    pestle:
    {
        type: String

    },
    source:
    {
        type: String

    },
    title:
    {
        type: String

    },
    likelihood:
    {
        type: Number

    },

    active: Boolean,

    date:
    {
        type: Date,
        default: Date.now

    }


});



const Data = new mongoose.model("DashboardData", dataSchema);


// insert records
const insertDocument = async () => {
    const result = await Data.insertMany([
        {
            "end_year": "",
            "intensity": 6,
            "sector": "Energy",
            "topic": "gas",
            "insight": "Annual Energy Outlook",
            "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
            "region": "Northern America",
            "start_year": "2014",
            "impact": "",
            "added": "January, 20 2017 03:51:25",
            "published": "January, 09 2017 00:00:00",
            "country": "United States of America",
            "relevance": 2,
            "pestle": "Industries",
            "source": "EIA",
            "title": "U.S. natural gas consumption is expected to increase during much of the projection period.",
            "likelihood": 3
        },
        {
            "end_year": "",
            "intensity": 6,
            "sector": "Energy",
            "topic": "oil",
            "insight": "Annual Energy Outlook",
            "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
            "region": "Northern America",
            "start_year": "2017",
            "impact": "",
            "added": "January, 20 2017 03:51:24",
            "published": "January, 09 2017 00:00:00",
            "country": "United States of America",
            "relevance": 2,
            "pestle": "Industries",
            "source": "EIA",
            "title": "Reference case U.S. crude oil production is projected to recover from recent declines.",
            "likelihood": 3
        },
        {
            "end_year": "",
            "intensity": 6,
            "sector": "Energy",
            "topic": "consumption",
            "insight": "Annual Energy Outlook",
            "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
            "region": "Northern America",
            "start_year": "2019",
            "impact": "",
            "added": "January, 20 2017 03:51:23",
            "published": "January, 09 2017 00:00:00",
            "country": "United States of America",
            "relevance": 2,
            "pestle": "Industries",
            "source": "EIA",
            "title": "U.S. petroleum consumption is projected to remain below the 2005 level.",
            "likelihood": 3
        },
        {
            "end_year": "",
            "intensity": 6,
            "sector": "Environment",
            "topic": "oil",
            "insight": "WRI Partnership Aims to Foster Supply Chain Transparency, Zero-Deforestation Strategies",
            "url": "http://www.sustainablebrands.com/news_and_views/supply_chain/sustainable_brands/wri_partnership_aims_foster_supply_chain_transparency",
            "region": "Central America",
            "start_year": "2017",
            "impact": "",
            "added": "January, 20 2017 03:26:40",
            "published": "January, 18 2017 00:00:00",
            "country": "Mexico",
            "relevance": 3,
            "pestle": "Environmental",
            "source": "sustainablebrands.com",
            "title": "Mars, Unilever, Cargill and Mondelēz are already using GFW Commodities to assess deforestation risks in their palm oil, soy and cocoa supply chains across a collective area of land the size of Mexico.",
            "likelihood": 2
        },
        {
            "end_year": "",
            "intensity": 6,
            "sector": "Environment",
            "topic": "market",
            "insight": "N-Hexane Market Hit at a CAGR of 5% by 2024 - PMR Report",
            "url": "http://www.sbwire.com/press-releases/n-hexane-market-hit-at-a-cagr-of-5-by-2024-pmr-report-761520.htm",
            "region": "World",
            "start_year": "2018",
            "impact": "",
            "added": "January, 19 2017 00:55:54",
            "published": "January, 18 2017 00:00:00",
            "country": "India",
            "relevance": 2,
            "pestle": "Economic",
            "source": "SBWire",
            "title": "Polymerization will remain top 3 end-users in global n-Hexane Market.",
            "likelihood": 3
        },
        {
            "end_year": "",
            "intensity": 6,
            "sector": "Energy",
            "topic": "oil",
            "insight": "N-Hexane Market Hit at a CAGR of 5% by 2024 - PMR Report",
            "url": "http://www.sbwire.com/press-releases/n-hexane-market-hit-at-a-cagr-of-5-by-2024-pmr-report-761520.htm",
            "region": "World",
            "start_year": "2019",
            "impact": "",
            "added": "January, 19 2017 00:55:52",
            "published": "January, 18 2017 00:00:00",
            "country": "India",
            "relevance": 2,
            "pestle": "Economic",
            "source": "SBWire",
            "title": "High demand for n-Hexane in oil extraction owing to its effectiveness and high yield is expected to propel the global n-Hexane Market.",
            "likelihood": 3
        },
        {
            "end_year": 2027,
            "intensity": 60,
            "sector": "Government",
            "topic": "market",
            "insight": "E-Boats, Anyone? Electric Boat Market To Reach $20 Billion By 2027, According To New Study",
            "url": "https://cleantechnica.com/2017/01/12/e-boats-anyone-electric-boat-market-reach-20b-2027-according-new-study/",
            "region": "World",
            "start_year": "2020",
            "impact": 3,
            "added": "January, 18 2017 02:23:13",
            "published": "January, 13 2017 00:00:00",
            "country": "UK",
            "relevance": 5,
            "pestle": "Political",
            "source": "CleanTechnica",
            "title": "The market for non-military electric watercraft and marine motors will balloon to over $20 billion worldwide by 2027.",
            "likelihood": 4
        },
        {
            "end_year": 2018,
            "intensity": 16,
            "sector": "Energy",
            "topic": "oil",
            "insight": "Oil prices will be much more volatile in 2017",
            "url": "http://www.news.tracanada.ca/2017/01/16/oil-prices-will-be-much-more-volatile-in-2017/",
            "region": "World",
            "start_year": 2017,
            "impact": "",
            "added": "January, 17 2017 04:19:59",
            "published": "January, 16 2017 00:00:00",
            "country": "UK",
            "relevance": 4,
            "pestle": "Economic",
            "source": "TRAC News",
            "title": "Global oil prices will witness much more volatility in 2017 even though markets may rebalance in the first half of the year if output cuts pledged by producers are implemented.",
            "likelihood": 4
        },
        {
            "end_year": 2018,
            "intensity": 16,
            "sector": "Environment",
            "topic": "gdp",
            "insight": "IMF affirms Nigeria's recovery from recession, with 0.8% growth forecast",
            "url": "http://www.vanguardngr.com/2017/01/imf-affirms-nigerias-recovery-recession-0-8-growth-forecast/",
            "region": "Western Africa",
            "start_year": 2017,
            "impact": "",
            "added": "January, 17 2017 03:25:45",
            "published": "January, 16 2017 00:00:00",
            "country": "Nigeria",
            "relevance": 4,
            "pestle": "Economic",
            "source": "Vanguard News",
            "title": "Nigeria Gross Domestic Product will grow by 0.8 percent in 2017 and 2.3 percent in 2018.",
            "likelihood": 4
        },
        {
            "end_year": "",
            "intensity": 6,
            "sector": "Aerospace & defence",
            "topic": "war",
            "insight": "Lebanon: No Land for Beginning Politicians",
            "url": "https://www.avimelamed.com/2017/01/07/lebanon-no-land-for-beginning-politicians/",
            "region": "Western Asia",
            "start_year": "2019",
            "impact": "",
            "added": "January, 17 2017 03:18:22",
            "published": "January, 07 2017 00:00:00",
            "country": "Lebanon",
            "relevance": 2,
            "pestle": "Political",
            "source": "Avi Melamed",
            "title": "A war in Lebanon will increase the already heavy economic burden Saudi Arabia is carrying.",
            "likelihood": 3
        },
        {
            "end_year": "",
            "intensity": 4,
            "sector": "Manufacturing",
            "topic": "production",
            "insight": "The Slow Road Back: Oil & Gas Industry Outlook for 2017",
            "url": "http://deloitte.wsj.com/riskandcompliance/2017/01/10/the-slow-road-back-oil-gas-industry-outlook-for-2017/",
            "region": "Northern America",
            "start_year": "2020",
            "impact": "",
            "added": "January, 17 2017 02:21:11",
            "published": "",
            "country": "United States of America",
            "relevance": 2,
            "pestle": "Industries",
            "source": "WSJ",
            "title": "U.S. production could begin to ramp back up following the rig count upturn.",
            "likelihood": 2
        },
        {
            "end_year": "",
            "intensity": 6,
            "sector": "Retail",
            "topic": "export",
            "insight": "The Slow Road Back: Oil & Gas Industry Outlook for 2017",
            "url": "http://deloitte.wsj.com/riskandcompliance/2017/01/10/the-slow-road-back-oil-gas-industry-outlook-for-2017/",
            "region": "Northern America",
            "start_year": "2015",
            "impact": "",
            "added": "January, 17 2017 02:21:10",
            "published": "",
            "country": "United States of America",
            "relevance": 2,
            "pestle": "Economic",
            "source": "WSJ",
            "title": "More U.S. LNG (liquified natural gas) export capacity is expected to hit the market.",
            "likelihood": 3
        },
        {
            "end_year": "",
            "intensity": 6,
            "sector": "Energy",
            "topic": "oil",
            "insight": "NM oil patch outlook",
            "url": "https://www.abqjournal.com/928238/nm-oil-patch-outlook.html",
            "region": "World",
            "start_year": 2017,
            "impact": "",
            "added": "January, 17 2017 01:51:12",
            "published": "January, 16 2017 00:00:00",
            "country": "Australia",
            "relevance": 3,
            "pestle": "Industries",
            "source": "Abq",
            "title": "2017 could be another record-breaking year in oil production.",
            "likelihood": 2
        },
        {
            "end_year": "",
            "intensity": 6,
            "sector": "Energy",
            "topic": "oil",
            "insight": "NM oil patch outlook",
            "url": "https://www.abqjournal.com/928238/nm-oil-patch-outlook.html",
            "region": "World",
            "start_year": "2016",
            "impact": "",
            "added": "January, 17 2017 01:51:10",
            "published": "January, 16 2017 00:00:00",
            "country": "Australia",
            "relevance": 3,
            "pestle": "Industries",
            "source": "Abq",
            "title": "Oil prices could climb above $60 quite rapidly.",
            "likelihood": 2
        },
        {
            "end_year": "",
            "intensity": 12,
            "sector": "Energy",
            "topic": "oil",
            "insight": "OPEC sees market stability in 2017, Venezuela aims for $70 price",
            "url": "http://www.reuters.com/article/us-venezuela-opec-idUSKBN1502JJ",
            "region": "Eastern Europe",
            "start_year": "2013",
            "impact": "",
            "added": "January, 17 2017 01:17:33",
            "published": "January, 17 2017 00:00:00",
            "country": "Russia",
            "relevance": 3,
            "pestle": "Industries",
            "source": "Reuters",
            "title": "OPEC, Russia and other non-members of the producer group will curtail oil output by nearly 1.8 million bpd.",
            "likelihood": 4
        },
        {
            "end_year": "",
            "intensity": 16,
            "sector": "Energy",
            "topic": "oil",
            "insight": "Cargill's quest for fish food grows, enriching canola in Montana and growing protein in tank",
            "url": "http://www.startribune.com/cargill-s-quest-for-fish-food-grows-enriching-canola-in-montana-and-growing-protein-in-tank/410681245/",
            "region": "World",
            "start_year": 2019,
            "impact": "",
            "added": "January, 17 2017 00:55:16",
            "published": "January, 14 2017 00:00:00",
            "country": "Russia",
            "relevance": 4,
            "pestle": "Economic",
            "source": "Star Tribune",
            "title": "Industry demand for fish oil will bypass the world's fish oil supply in 2019.",
            "likelihood": 4
        },
        {
            "end_year": 2025,
            "intensity": 9,
            "sector": "Energy",
            "topic": "battery",
            "insight": "How Electric Trucks Will Shape The Auto Transport Industry",
            "url": "http://evobsession.com/electric-trucks-will-shape-auto-transport-industry/",
            "region": "Eastern Europe",
            "start_year": "2021",
            "impact": "",
            "added": "January, 16 2017 05:54:47",
            "published": "January, 10 2017 00:00:00",
            "country": "Australia",
            "relevance": 3,
            "pestle": "Technological",
            "source": "EV Obsession",
            "title": "Experts predict the costs of replacing electric batteries will decrease by 2.5x by 2025.",
            "likelihood": 3
        },
        {
            "end_year": "",
            "intensity": 16,
            "sector": "Financial services",
            "topic": "",
            "insight": "Energy Roundup",
            "url": "http://newsletters.creamermedia.co.za/p/m/s/twitter/7XjRADu9PZG2CxYa/eFHTX9e0XGozciPE/",
            "region": "World",
            "start_year": 2017,
            "impact": "",
            "added": "January, 16 2017 03:42:24",
            "published": "",
            "country": "Russia",
            "relevance": 4,
            "pestle": "",
            "source": "creamermedia",
            "title": "The global investment cycle will show the first signs of growth in 2017, since 2014, as confidence the oil and gas sector will start to return, with exploration and production spend set to rise by 3% to $450-billion.",
            "likelihood": 4
        },
        {
            "end_year": "",
            "intensity": 4,
            "sector": "Aerospace & defence",
            "topic": "biofuel",
            "insight": "The Peak Oil President?",
            "url": "http://www.resilience.org/stories/2017-01-11/the-peak-oil-president/",
            "region": "World",
            "start_year": "2014",
            "impact": "",
            "added": "January, 16 2017 02:25:00",
            "published": "January, 11 2017 00:00:00",
            "country": "India",
            "relevance": 2,
            "pestle": "Political",
            "source": "Resilience",
            "title": "While in the past decade downturns in output from old oilfields were replaced with new production enabling steady overall conventional oil supplies, replacement of production is much more doubtful in the immediate years ahead.",
            "likelihood": 2
        }]);
}

//  insertDocument();



module.exports = Data;