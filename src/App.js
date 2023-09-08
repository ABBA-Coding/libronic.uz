import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import axios from 'axios';
import CEO from './components/CEO/CEO';
import Modal from './components/Modal/Modal';
import About from './components/About/About';
import { useTranslation } from 'react-i18next';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import OneBlog from './components/Blogs/OneBlog';
import IndividCeo from './components/CEO/IndividCeo';
import HomeBlogs from './components/Blogs/HomeBlogs';
import HomeAbout from './components/About/HomeAbout';
import Products from './components/Products/Products';
import Location from './components/Location/Location';
import NotFound from './components/NotFound/NotFound';
import Contacts from './components/Contacts/Contacts';
import Comments from './components/Comments/Comments';
import Calculator from './components/Calculator/Calculator';
import HomeProducts from './components/Products/HomeProducts';
import HomeServices from './components/Services/HomeServices';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SingleProduct from './components/Products/SingleProduct';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactModal from './components/ContactModal/ContactModal';
import ScrollPercent from './components/ScrollPercent/ScrollPercent';

const App = () => {

  // API

  const baseUrl = `https://libronic.abba.uz`;
  const urlCategories = `${baseUrl}/categories/`;
  const urlProducts = `${baseUrl}/products/`;
  const urlServices = `${baseUrl}/services/`;
  const urlComments = `${baseUrl}/rates/`;
  const urlStory = `${baseUrl}/stories/`;
  const urlNews = `${baseUrl}/blogs/`;

  // Categories API

  const [dataCategories, setDataCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlCategories);
      setDataCategories(request.data);
      return request;
    };
    fetchData()
  }, [urlCategories]);

  // Products API

  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlProducts);
      setDataProducts(request.data);
      return request;
    };
    fetchData()
  }, [urlProducts]);

  // News API

  const [dataNews, setDataNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlNews);
      setDataNews(request.data);
      return request;
    };
    fetchData()
  }, [urlNews]);

  // Services API

  const [dataServices, setDataServices] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlServices);
      setDataServices(request.data);
      return request;
    };
    fetchData()
  }, [urlServices]);

  // Comments API

  const [dataComments, setDataComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlComments);
      setDataComments(request.data);
      return request;
    };
    fetchData()
  }, [urlComments]);

  // Story API

  const [dataStory, setDataStory] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlStory);
      setDataStory(request.data);
      return request;
    };
    fetchData()
  }, [urlStory]);

  // languages

  const { i18n } = useTranslation()

  const [english, setEnglish] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') == "en" ? true : false : false);
  const [russian, setRussian] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') == "ru" ? true : false : false);
  const [uzbek, setUzbek] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') == "uz" ? true : false : false);
  const [langTitle, setLangTitle] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng').toUpperCase() : "")

  function changeUzbek(item) {
    setUzbek(item)
    setEnglish(!item)
    setRussian(!item)
    i18n.changeLanguage("uz")
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
  }

  function changeRussian(item) {
    setUzbek(!item)
    setRussian(item)
    setEnglish(!item)
    i18n.changeLanguage("ru")
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
  }

  function changeEnglish(item) {
    setUzbek(!item)
    setEnglish(item)
    setRussian(!item)
    i18n.changeLanguage("en")
    setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
  }

  // search filter

  const [inputValue, setInputValue] = useState("")

  function filterData(e) {
    setInputValue(e.target.value)
  }

  function selectData(item) {
    setInputValue(item)
  }

  const search = (data) => {
    if (english) {
      return data?.filter(post => post?.name_en?.toLowerCase().includes(inputValue.toLowerCase()))
    } else if (russian) {
      return data?.filter(post => post?.name_ru?.toLowerCase().includes(inputValue.toLowerCase()))
    } else if (uzbek) {
      return data?.filter(post => post?.name_uz?.toLowerCase().includes(inputValue.toLowerCase()))
    }
  }

  // modal

  const [showModal, setShowModal] = useState(false)

  function changeModal() {
    setShowModal(!showModal)
  }

  // contact modal

  const [showContactModal, setShowContactModal] = useState(false)

  function changeContactModal() {
    setShowContactModal(!showContactModal)
  }

  // scrolls

  const abt = useRef();
  const ceo = useRef();
  const loc = useRef();
  const calc = useRef();
  const serv = useRef();
  const comm = useRef();
  const blogs = useRef();
  const prods = useRef();

  function changeScrollBlog() {
    setTimeout(() => {
      window.scrollTo(0, blogs.current.offsetTop)
    }, 100);
  }

  function changeScrollAbt() {
    setTimeout(() => {
      window.scrollTo(0, abt.current.offsetTop)
    }, 100);
  }

  function changeScrollCalc() {
    setTimeout(() => {
      window.scrollTo(0, calc.current.offsetTop)
    }, 100);
  }

  function changeScrollProds() {
    setTimeout(() => {
      window.scrollTo(0, prods.current.offsetTop)
    }, 100);
  }

  function changeScrollServ() {
    setTimeout(() => {
      window.scrollTo(0, serv.current.offsetTop)
    }, 100);
  }

  function changeScrollCeo() {
    setTimeout(() => {
      window.scrollTo(0, ceo.current.offsetTop)
    }, 100);
  }

  function changeScrollComm() {
    setTimeout(() => {
      window.scrollTo(0, comm.current.offsetTop)
    }, 100);
  }

  function changeScrollLoc() {
    setTimeout(() => {
      window.scrollTo(0, loc.current.offsetTop)
    }, 100);
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar russian={russian} changeScrollBlog={changeScrollBlog} changeScrollAbt={changeScrollAbt} changeScrollCalc={changeScrollCalc} changeScrollProds={changeScrollProds} changeUzbek={changeUzbek} changeEnglish={changeEnglish} changeRussian={changeRussian} langTitle={langTitle} />
      <ScrollPercent />
      <Switch>
        <Route exact path="/">
          <Header english={english} uzbek={uzbek} russian={russian} dataProducts={dataProducts} dataStory={dataStory} />
          <div ref={prods}>
            <HomeProducts english={english} uzbek={uzbek} russian={russian} dataCategories={dataCategories} />
          </div>
          <div ref={calc}>
            <Calculator english={english} uzbek={uzbek} russian={russian} changeModal={changeModal} dataCategories={search(dataCategories)} filterData={filterData} inputValue={inputValue} selectData={selectData} />
          </div>
          <div ref={abt}>
            <HomeAbout russian={russian} />
          </div>
          <div ref={ceo}>
            <CEO russian={russian} />
          </div>
          <div ref={serv}>
            <HomeServices english={english} uzbek={uzbek} russian={russian} dataServices={dataServices} changeContactModal={changeContactModal} />
          </div>
          <div ref={blogs}>
            <HomeBlogs english={english} uzbek={uzbek} russian={russian} dataNews={dataNews} id={null} other={false} />
          </div>
          <div ref={comm}>
            <Comments english={english} uzbek={uzbek} russian={russian} dataComments={dataComments} />
          </div>
          <Contacts russian={russian} changeModal={changeModal} />
          <div ref={loc}>
            <Location russian={russian} />
          </div>
          <Footer russian={russian} changeScrollCeo={changeScrollCeo} changeScrollComm={changeScrollComm} changeScrollLoc={changeScrollLoc} changeScrollServ={changeScrollServ} changeScrollBlog={changeScrollBlog} changeScrollAbt={changeScrollAbt} changeScrollCalc={changeScrollCalc} changeScrollProds={changeScrollProds} />
        </Route>
        <Route path="/about">
          <About russian={russian} />
          <Contacts russian={russian} changeModal={changeModal} />
          <Footer russian={russian} changeScrollCeo={changeScrollCeo} changeScrollComm={changeScrollComm} changeScrollLoc={changeScrollLoc} changeScrollServ={changeScrollServ} changeScrollBlog={changeScrollBlog} changeScrollAbt={changeScrollAbt} changeScrollCalc={changeScrollCalc} changeScrollProds={changeScrollProds} />
        </Route>
        <Route path="/ceo">
          <IndividCeo russian={russian} />
          <Contacts russian={russian} changeModal={changeModal} />
          <Footer russian={russian} changeScrollCeo={changeScrollCeo} changeScrollComm={changeScrollComm} changeScrollLoc={changeScrollLoc} changeScrollServ={changeScrollServ} changeScrollBlog={changeScrollBlog} changeScrollAbt={changeScrollAbt} changeScrollCalc={changeScrollCalc} changeScrollProds={changeScrollProds} />
        </Route>
        <Route path="/products/:id">
          <Products english={english} uzbek={uzbek} russian={russian} dataProducts={dataProducts} dataCategories={dataCategories} />
          <Contacts russian={russian} changeModal={changeModal} />
          <Footer russian={russian} changeScrollCeo={changeScrollCeo} changeScrollComm={changeScrollComm} changeScrollLoc={changeScrollLoc} changeScrollServ={changeScrollServ} changeScrollBlog={changeScrollBlog} changeScrollAbt={changeScrollAbt} changeScrollCalc={changeScrollCalc} changeScrollProds={changeScrollProds} />
        </Route>
        <Route path="/product/:id">
          <SingleProduct english={english} uzbek={uzbek} russian={russian} dataProducts={dataProducts} changeContactModal={changeContactModal} />
          <Footer russian={russian} changeScrollCeo={changeScrollCeo} changeScrollComm={changeScrollComm} changeScrollLoc={changeScrollLoc} changeScrollServ={changeScrollServ} changeScrollBlog={changeScrollBlog} changeScrollAbt={changeScrollAbt} changeScrollCalc={changeScrollCalc} changeScrollProds={changeScrollProds} />
        </Route>
        <Route path="/blog/:id">
          <OneBlog english={english} uzbek={uzbek} russian={russian} dataNews={dataNews} />
          <Contacts russian={russian} changeModal={changeModal} />
          <Footer russian={russian} changeScrollCeo={changeScrollCeo} changeScrollComm={changeScrollComm} changeScrollLoc={changeScrollLoc} changeScrollServ={changeScrollServ} changeScrollBlog={changeScrollBlog} changeScrollAbt={changeScrollAbt} changeScrollCalc={changeScrollCalc} changeScrollProds={changeScrollProds} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      {showModal &&
        <Modal uzbek={uzbek} russian={russian} english={english} changeModal={changeModal} />
      }
      {showContactModal &&
        <ContactModal changeContactModal={changeContactModal} changeModal={changeModal} />
      }
    </BrowserRouter>
  );
};

export default App;