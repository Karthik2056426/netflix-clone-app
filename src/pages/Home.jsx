import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";
function Home(){
    return(
        <div>
            <Main/>
            <Row rowID='1' title='Up coming' fetchURL={requests.requestUpcoming}/>
            <Row rowID='2' title='Top rated' fetchURL={requests.requestTopRated}/>
            <Row rowID='3' title='Popular' fetchURL={requests.requestPopular}/>
            <Row rowID='4' title='Trending' fetchURL={requests.requestTrending}/>
            <Row rowID='5' title='Action' fetchURL={requests.requestHorror}/>
        </div>
    )
}

export default Home;