import React, { useState } from 'react';
import {
  MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem 
}
from 'mdb-react-ui-kit';

import "./index.css"

function SearchResultsComponent() {

  const [orderBy, setOrderBy] = useState("First Least Pricey");
  const [itemSize, setItemSize] = useState("All");
  window.orderBy = orderBy;
  window.itemSize = itemSize; 

  return  <>
  <header>
  <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
    <div class="position-sticky">
      <div class="list-group list-group-flush mx-3 mt-4">
        <a href="#" class="list-group-item list-group-item-action py-2 ripple active">
          <span>Webiste traffic</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2 ripple active">
          <span>Webiste traffic</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2 ripple active">
          <span>Webiste traffic</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2 ripple active">
          <span>Webiste traffic</span>
        </a>
      </div>
    </div>
  </nav>

</header>

    <MDBDropdown>
      <MDBDropdownToggle tag='a' className='btn btn-primary'>
        {orderBy}
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link onClick={() => {setOrderBy("First Least Pricey")}}>First Least Pricey</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => {setOrderBy("First Most Pricey")}}>First Most Pricey</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>

    <MDBDropdown className='secondDropdown'>
      <MDBDropdownToggle tag='a' className='btn btn-primary'>
        {itemSize}
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link onClick={() => {setItemSize("All")}}>All</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => {setItemSize("XXS")}}>XXS</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => {setItemSize("XS")}}>XS</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => {setItemSize("S")}}>S</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => {setItemSize("M")}}>M</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => {setItemSize("L")}}>L</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => {setItemSize("XXL")}}>XXL</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => {setItemSize("XXXL")}}>XXXL</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => {setItemSize("XXXXL")}}>XXXXL</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  
  <section style={{backgroundColor: "white"}}>
  <div class="text-center container py-5">


    <div class="row">
      <div class="col-lg-3 col-md-12 mb-3">
        <div class="card">
          <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(23).webp"
              class="w-100" />
            <a href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span class="badge bg-success ms-2">Eco</span><span
                      class="badge bg-danger ms-2">-10%</span>
                  </h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
              </div>
            </a>
          </div>
          <div class="card-body">
            <a href="" class="text-reset">
              <h5 class="card-title mb-3">Product name</h5>
            </a>
            <a href="" class="text-reset">
              <p>Category</p>
            </a>
            <h6 class="mb-3">
              <s>$61.99</s><strong class="ms-2 text-danger">$50.99</strong>
            </h6>
          </div>
        </div>
      </div>

      

      <div class="col-lg-3 col-md-6 mb-3">
        <div class="card">
          <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(17).webp"
              class="w-100" />
            <a href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100"></div>
              </div>
              <div class="hover-overlay">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
              </div>
            </a>
          </div>
          <div class="card-body">
            <a href="" class="text-reset">
              <h5 class="card-title mb-3">Product name</h5>
            </a>
            <a href="" class="text-reset">
              <p>Category</p>
            </a>
            <h6 class="mb-3">$61.99</h6>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-3">
        <div class="card">
          <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp"
              class="w-100" />
            <a href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span class="badge bg-primary ms-2">New</span><span
                      class="badge bg-success ms-2">Eco</span><span class="badge bg-danger ms-2">-10%</span>
                  </h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
              </div>
            </a>
          </div>
          <div class="card-body">
            <a href="" class="text-reset">
              <h5 class="card-title mb-3">Product name</h5>
            </a>
            <a href="" class="text-reset">
              <p>Category</p>
            </a>
            <h6 class="mb-3">
              <s>$61.99</s><strong class="ms-2 text-danger">$50.99</strong>
            </h6>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-3">
        <div class="card">
          <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp"
              class="w-100" />
            <a href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span class="badge bg-primary ms-2">New</span><span
                      class="badge bg-success ms-2">Eco</span><span class="badge bg-danger ms-2">-10%</span>
                  </h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
              </div>
            </a>
          </div>
          <div class="card-body">
            <a href="" class="text-reset">
              <h5 class="card-title mb-3">Product name</h5>
            </a>
            <a href="" class="text-reset">
              <p>Category</p>
            </a>
            <h6 class="mb-3">
              <s>$61.99</s><strong class="ms-2 text-danger">$50.99</strong>
            </h6>
          </div>
        </div>
      </div>
    </div>

    
    <div class="row">
      <div class="col-lg-3 col-md-12 mb-3">
        <div class="card">
          <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(23).webp"
              class="w-100" />
            <a href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span class="badge bg-success ms-2">Eco</span><span
                      class="badge bg-danger ms-2">-10%</span>
                  </h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
              </div>
            </a>
          </div>
          <div class="card-body">
            <a href="" class="text-reset">
              <h5 class="card-title mb-3">Product name</h5>
            </a>
            <a href="" class="text-reset">
              <p>Category</p>
            </a>
            <h6 class="mb-3">
              <s>$61.99</s><strong class="ms-2 text-danger">$50.99</strong>
            </h6>
          </div>
        </div>
      </div>

      

      <div class="col-lg-3 col-md-6 mb-3">
        <div class="card">
          <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(17).webp"
              class="w-100" />
            <a href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100"></div>
              </div>
              <div class="hover-overlay">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
              </div>
            </a>
          </div>
          <div class="card-body">
            <a href="" class="text-reset">
              <h5 class="card-title mb-3">Product name</h5>
            </a>
            <a href="" class="text-reset">
              <p>Category</p>
            </a>
            <h6 class="mb-3">$61.99</h6>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-3">
        <div class="card">
          <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp"
              class="w-100" />
            <a href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span class="badge bg-primary ms-2">New</span><span
                      class="badge bg-success ms-2">Eco</span><span class="badge bg-danger ms-2">-10%</span>
                  </h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
              </div>
            </a>
          </div>
          <div class="card-body">
            <a href="" class="text-reset">
              <h5 class="card-title mb-3">Product name</h5>
            </a>
            <a href="" class="text-reset">
              <p>Category</p>
            </a>
            <h6 class="mb-3">
              <s>$61.99</s><strong class="ms-2 text-danger">$50.99</strong>
            </h6>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-3">
        <div class="card">
          <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp"
              class="w-100" />
            <a href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span class="badge bg-primary ms-2">New</span><span
                      class="badge bg-success ms-2">Eco</span><span class="badge bg-danger ms-2">-10%</span>
                  </h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
              </div>
            </a>
          </div>
          <div class="card-body">
            <a href="" class="text-reset">
              <h5 class="card-title mb-3">Product name</h5>
            </a>
            <a href="" class="text-reset">
              <p>Category</p>
            </a>
            <h6 class="mb-3">
              <s>$61.99</s><strong class="ms-2 text-danger">$50.99</strong>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
}

export default SearchResultsComponent;