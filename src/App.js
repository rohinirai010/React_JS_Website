import React from 'react';
import './App.css';
import Client from './Components/Client/Client';
import FaqSection from './Components/FaqSection/FaqSection';
import Footer from './Components/Footer/Footer';
import MiddleSection from './Components/MiddleSection/MiddleSection';
import Navbar from './Components/Navbar/Navbar';
import OurTeam from './Components/OurTeam/OurTeam';
import OurTeamMain from './Components/OurTeamMain/OurTeamMain';
import Rewards from './Components/RewardsSection/Rewards';
import SecuritySection from './Components/SecuritySection';
import Subscription from './Components/SubscriptionSection/Subscription';
import Title from './Components/title/Title';
import Title2 from './Components/Title2/Title2';

function App() {
    return ( <
        div className = "App" >
        <
        Navbar > < /Navbar> <
        Title > < /Title>  <
        Client > < /Client> <
        MiddleSection title1 = "There's something for everyone"
        title2 = "Rewards and incentives for every occasion" > < /MiddleSection> <
        Title2 head = "Everyone gets more done with Rewards"
        para = "Teams across departments use the power of rewards and incentives to delight people" > < /Title2> <
        Rewards > < /Rewards> <
        OurTeamMain > < /OurTeamMain> <
        SecuritySection > < /SecuritySection> <
        FaqSection > < /FaqSection> <
        Subscription > < /Subscription> <
        Footer > < /Footer> <
        /div>
    );
}

export default App;