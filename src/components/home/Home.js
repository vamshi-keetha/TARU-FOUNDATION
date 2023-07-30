import react from 'react';
import { Link } from 'react-router-dom';
import Carouselcomponent from '../carouselComponent/CarouselComponent';
import BoxesCarousel from '../boxesCarousel/BoxesCarousel';
import ProductBoxes from '../productBoxes/ProductBoxes';
import { Carousel } from 'react-bootstrap';
import Slider from 'react-slick';
import MultipleItemSlider from '../multipleItemSlider/MultipleItemsSlider';
import './Home.css';
import Footer from '../footer/Footer.js'
import BackToTop from '../backToTop/BackToTop';

function Home() {

  let carouselList = [
    {
      carouselImage1: "https://i.imgur.com/d1UcFXJ.png",
      carouselImage2: "https://i.imgur.com/6rWj6XD.png",
      carouselImage3: "https://i.imgur.com/WRPiEvq.png",
      carouselImage4: "https://i.imgur.com/bYimHr5.png",
      carouselImage5: "https://i.imgur.com/bHRTXz3.png"
    },
    {
      carouselImage1: "https://m.media-amazon.com/images/I/71TXakC7KPL._SX3000_.jpg",
      carouselImage2: "https://m.media-amazon.com/images/I/71eBXpqwYXL._SX3000_.jpg",
      carouselImage3: "https://m.media-amazon.com/images/I/71TXakC7KPL._SX3000_.jpg"
    },
    {
      carouselImage1: "https://th.bing.com/th/id/R.6f6051f6d62b3c2b17ff23c31b18c02e?rik=Y1NKwlXo9wof0A&riu=http%3a%2f%2frechargetricks.in%2fwp-content%2fuploads%2f2017%2f09%2fflipkart-big-billion-day-sale.jpg&ehk=8TvsylLnyX6la85JlJuJQbx8SjP0LpH6Zy0lewuS%2bIw%3d&risl=&pid=ImgRaw&r=0",
      carouselImage2: "https://www.earticleblog.com/wp-content/uploads/2018/10/Flipkart-Big-Billion-Day-Mobile-Offers-min.png",
      carouselImage3: "https://th.bing.com/th/id/R.99b7e977ffb08c17c48d18953f54161f?rik=4tajeTIZ4V1zcw&riu=http%3a%2f%2fweteachtechs.com%2fwp-content%2fuploads%2f2019%2f05%2fhdfc.png&ehk=eIdu3mXPTc56KIPhVLjUHJmnrdszbAHwdFMUkVMMBZE%3d&risl=&pid=ImgRaw&r=0",
      carouselImage4: "https://www.eastcoastdaily.in/wp-content/uploads/2018/10/flipkart%E2%80%99s-%E2%80%98big-billion-days-2018%E2%80%99.jpg"
    },
    {
      carouselImage1: "https://assets.ajio.com/cms/AJIO/WEB/13052022-D-unisex-offers-5instantdiscodunt.jpg",
      carouselImage2: "https://assets.ajio.com/cms/AJIO/WEB/mmobikwik-1440x128.jpg",
      carouselImage3: "https://assets.ajio.com/cms/AJIO/WEB/Paytm-Set3-1440x128.png"
    }
  ]

  let BoxesCarouselList = [
    {
      Image1: "https://cdn.discordapp.com/attachments/989473099386847237/990294000793706516/hhl.png",
      Image2: "https://cdn.discordapp.com/attachments/989473099386847237/990295269763584020/ll.png",
      Image3: "https://cdn.discordapp.com/attachments/989473099386847237/990293662535647292/ddd.png",
      Image4: "https://cdn.discordapp.com/attachments/989473099386847237/990292868100935780/qq.png",
      Text1: "Limited Time Offer",
      Text2: "Top Rated Product",
      Text3: "Selling Hot Now",
      Text4: "Best Selling Product",
    },
    {
      Image1: "https://cdn.discordapp.com/attachments/989473099386847237/990327883539042345/unknown.png",
      Image2: "https://media.discordapp.net/attachments/989473099386847237/990290328932200468/unknown.png",
      Image3: "https://cdn.discordapp.com/attachments/989473099386847237/990327257786634290/unknown.png",
      Image4: "https://media.discordapp.net/attachments/989473099386847237/990291396604870676/hhh.png",
      Text1: "A wide collection of pottery",
      Text2: "Handcrafted for you",
      Text3: "Stylize your Surrounding",
      Text4: "Get a new look",
    }
  ]


  let productsList = [
    {
      productName: "Get freshly picked vegies",
      productImage1: "https://cdn.discordapp.com/attachments/989473099386847236/990350992455381072/Untitled_design_12.png",
      productImage2: "https://cdn.discordapp.com/attachments/989473099386847236/990351322987524136/Untitled_design_13.png",
      productImage3: "https://cdn.discordapp.com/attachments/989473099386847236/990350823638827048/unknown.png",
      productImage4: "https://cdn.discordapp.com/attachments/989473099386847236/990350658404253737/unknown.png",
      linkname: 'home'
    },
    {
      productName: "Made with love",
      productImage1: "https://cdn.discordapp.com/attachments/989473099386847238/990348235585491035/unknown.png",
      productImage2: "https://cdn.discordapp.com/attachments/989473099386847238/990331346717122591/unknown.png",
      productImage3: "https://cdn.discordapp.com/attachments/989473099386847238/990331401943539753/unknown.png",
      productImage4: "https://cdn.discordapp.com/attachments/989473099386847238/990332365463248966/unknown.png",
      linkname: 'technologies/html'
    },
    {
      productName: "Handcrafted pottery",
      productImage1: "https://media.discordapp.net/attachments/989473099386847237/990288850645549106/11.png",
      productImage2: "https://media.discordapp.net/attachments/989473099386847237/990327883539042345/unknown.png",
      productImage3: "https://media.discordapp.net/attachments/989473099386847237/990294000793706516/hhl.png",
      productImage4: "https://media.discordapp.net/attachments/989473099386847237/990293662535647292/ddd.png",
      linkname: 'contactus'
    },
    {
      productName: "Enhance your look",
      productImage1: "https://media.discordapp.net/attachments/989473099386847237/990294912366944256/ii.png",
      productImage2: "https://cdn.discordapp.com/attachments/989473099386847236/990350079363809290/Untitled_design_7.png",
      productImage3: "https://cdn.discordapp.com/attachments/989473099386847236/990350060690755584/Untitled_design_8.png",
      productImage4: "https://cdn.discordapp.com/attachments/989473099386847236/990350237409378334/unknown.png",
      linkname: 'technologies'
    },
  ]



  let MultiItemsList = [
    {
      Image: "https://media.discordapp.net/attachments/989473099386847237/990288850645549106/11.png",
      Text: "pottery",
    },
    {
      Image: "https://media.discordapp.net/attachments/989473099386847237/990288850645549106/11.png",
      Text: "pottery",
    },
    {
      Image: "https://media.discordapp.net/attachments/989473099386847237/990288850645549106/11.png",
      Text: "pottery",
    },
    {
      Image: "https://media.discordapp.net/attachments/989473099386847237/990288850645549106/11.png",
      Text: "pottery",
    },
    {
      Image: "https://media.discordapp.net/attachments/989473099386847237/990288850645549106/11.png",
      Text: "pottery",
    },
    {
      Image: "https://media.discordapp.net/attachments/989473099386847237/990288850645549106/11.png",
      Text: "pottery",
    },
  ]

  let MultiItemsList1 = [
    {
      Image: "https://cdn.discordapp.com/attachments/989473099386847237/990288113760874556/Untitled_design.png",
      Text: "Bags",
    },
    {
      Image: "https://media.discordapp.net/attachments/989473099386847237/990288850645549106/11.png",
      Text: "Pottery",
    },
    {
      Image: "https://cdn.discordapp.com/attachments/989473099386847238/990357504787611749/22.png",
      Text: "Clay pots",
    },
    {
      Image: "https://cdn.discordapp.com/attachments/989473099386847238/990359184946106488/Untitled_design_16.png",
      Text: "Apparel",
    },
    {
      Image: "https://cdn.discordapp.com/attachments/989473099386847236/990351135808323630/unknown.png",
      Text: "Vegies",
    },
    {
      Image: "https://cdn.discordapp.com/attachments/989473099386847238/990331401943539753/unknown.png",
      Text: "Bottles",
    },
    {
      Image: "https://cdn.discordapp.com/attachments/989473099386847237/990295409945641020/unknown.png",
      Text: "Necklaces",
    },
    {
      Image: "https://cdn.discordapp.com/attachments/989473099386847238/990362131692138556/Untitled_design_1.png",
      Text: "Dairy",
    },
  ]



  return (
    <div>
      <Carouselcomponent productObj={carouselList[0]}></Carouselcomponent>

      <MultipleItemSlider productObj={MultiItemsList1} />



      <BoxesCarousel productObj={BoxesCarouselList[1]}></BoxesCarousel>
      {/* <Carouselcomponent productObj={carouselList[1]}></Carouselcomponent> */}

      <img src="https://cdn.discordapp.com/attachments/989473099386847237/990220719474507887/akhil-pawar-XCd_6nOdzjo-unsplash.jpg" className="img-fluid mx-auto d-block w-75" style={{ "height": "550px" }} ></img>

      {/* <MultipleItemSlider productObj={MultiItemsList} /> */}

      <Carouselcomponent productObj={carouselList[3]} />

      <BoxesCarousel productObj={BoxesCarouselList[0]}></BoxesCarousel>

      <img src="https://cdn.discordapp.com/attachments/989473099386847237/990221977933455420/unknown.png" className="img-fluid mx-auto d-block w-100" style={{ "height": "550px" }}></img>

      <div className="row m-3 carouselboxes ">
        <div className="col-sm-12 col-md-6 col-xl-4 col-xxl-3 mx-auto">
          <ProductBoxes productObj={productsList[0]}></ProductBoxes>
        </div>


        <div className="col-sm-12 col-md-6 col-xl-4 col-xxl-3 mx-auto">
          <ProductBoxes productObj={productsList[1]}></ProductBoxes>
        </div>

        <div className="col-sm-12 col-md-6 col-xl-4 col-xxl-3 mx-auto">
          <ProductBoxes productObj={productsList[2]}></ProductBoxes>
        </div>

        <div className="col-sm-12 col-md-6 col-xl-4 col-xxl-3 mx-auto">
          <ProductBoxes productObj={productsList[3]}></ProductBoxes>
        </div>

      </div>

      <img src="https://assets.ajio.com/cms/AJIO/WEB/13052022-D-unisex-freedel-notiming.jpg" className="img-fluid mx-auto d-block p-3" ></img>


      <BackToTop />



      <Footer />












    </div>
  );
}

export default Home