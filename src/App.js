import React from 'react'
import './App.css';


import Card_friends from './components/Card_friends';
import Card_rickandmorty from './components/Card_rickandmorty';
import Card_moneyheist from './components/Card_moneyheist';
import Card_breakingbad from './components/Card_breakingbad';
import Card_peakyblinders from './components/Card_peakyblinders';
import Card_strangerthings from './components/Card_strangerthings';
import Card from './components/Card';
import Sdata from './components/Sdata';



function App() {
  return (
    <>

      <h1 className="heading">Top 15 Netflix Series</h1>


      <Card sname={Sdata[0].sname}
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        link={Sdata[0].link}
      />

      <Card sname={Sdata[1].sname}
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        link={Sdata[1].link}
      />
      <Card sname={Sdata[2].sname}
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        link={Sdata[2].link}
      />
      <Card sname={Sdata[3].sname}
        imgsrc={Sdata[3].imgsrc}
        title={Sdata[3].title}
        link={Sdata[3].link}
      />

      <Card sname={Sdata[4].sname}
        imgsrc={Sdata[4].imgsrc}
        title={Sdata[4].title}
        link={Sdata[4].link}
      />

      <Card sname={Sdata[5].sname}
        imgsrc={Sdata[5].imgsrc}
        title={Sdata[5].title}
        link={Sdata[5].link}
      />

      <Card sname={Sdata[6].sname}
        imgsrc={Sdata[6].imgsrc}
        title={Sdata[6].title}
        link={Sdata[6].link}
      />

      <Card sname={Sdata[7].sname}
        imgsrc={Sdata[7].imgsrc}
        title={Sdata[7].title}
        link={Sdata[7].link}
      />

      <Card sname={Sdata[8].sname}
        imgsrc={Sdata[8].imgsrc}
        title={Sdata[8].title}
        link={Sdata[8].link}
      />



      <Card_friends imgsrc="https://10play.com.au/ip/s3/2019/10/09/461d8f1ff04df1e3433870ab3f28052d-747265.jpg?image-profile=image_poster&io=portrait&dpr=2"
        title=" A Netflix Series"
        sname="Friends"
        link="https://www.netflix.com/in/title/70153404"
      />

      <Card_moneyheist imgsrc="https://wallpapercave.com/wp/wp9827094.jpeg"
        title=" A Netflix Original Series"
        sname="Money Heist"
        link="https://www.netflix.com/in/title/80192098"
      />

      <Card_breakingbad imgsrc="https://liztellsfrank.files.wordpress.com/2019/01/a4b9de044d3967643e70a87827523ef2-e1546408675916.jpg"
        title=" A Netflix Series"
        sname="Breaking Bad"
        link="https://www.netflix.com/in/title/70143836"
      />

      <Card_rickandmorty imgsrc="https://cdn.wallpapersafari.com/6/3/HGPRwg.jpg"
        title=" A Netflix Original Series"
        sname="Rick and Morty"
        link="https://www.netflix.com/in/title/80014749?ref=lbb"
      />

      <Card_strangerthings imgsrc="https://m.media-amazon.com/images/I/71p7aaM2llL._AC_SX425_.jpg"
        title=" A Netflix Original Series"
        sname="Stranger Things"
        link="https://www.netflix.com/in/title/80057281"

      />

      <Card_peakyblinders imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP6nGQQ6dm4SCBY9BwzZt_DAQmcPapALrUDAtUMR5hvffKD8yzRKif2CZf7PY5-DFRyqw&usqp=CAU"
        title=" A Netflix Original Series"
        sname="Peaky Blinders"
        link="https://www.netflix.com/in/title/80002479"
      />

    </>
  );
}

export default App;
