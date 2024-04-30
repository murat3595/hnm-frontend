
import './App.css';
import MainPageComponent from './mainPageComponent'
import SearchResultsComponent from './searchResultsPageComponent'
import DetailPageComponent from './detailPageComponent'

import React, { useState } from 'react';


function App() {

  const [currentPage, setCurrentPage] = useState("detailPage"); //mainPage searchPage detailPage
  
  const [pageData, setPageData] = useState(undefined);

  window.currentPage = currentPage;
  window.setCurrentPage = setCurrentPage;
  window.pageData = pageData;
  window.setPageData = setPageData;

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark ">
          <div class="container-fluid">
              <a class="navbar-brand mx-auto" href="#">
                  <img src='hnmlogo.png' height={50}/>
              </a>
          </div>

      </nav>
      <div class="input-group rounded">
        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
      </div>

      {
        currentPage == "mainPage" ? <MainPageComponent></MainPageComponent>
        : currentPage == "searchPage" ? <SearchResultsComponent></SearchResultsComponent>
        : currentPage == "detailPage" ? <DetailPageComponent></DetailPageComponent>
        : null
      }

      <footer class=" text-center text-white fixed-bottom">
          <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
          </div>
      </footer>
    </>
  );
}

export default App;
