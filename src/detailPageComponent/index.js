import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn
}
from 'mdb-react-ui-kit';

import "./index.css"

function DetailPageComponent() {

  

  return <section class="py-5">
  <div class="container">
    <div class="row gx-5">
      <aside class="col-lg-6">
        <div class="border rounded-4 mb-3 d-flex justify-content-center">
          <a data-fslightbox="mygalley" class="rounded-4" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp">
            <img style={{maxWidth: "100%", maxHeight: "100vh", margin: "auto"}} className="rounded-4 fit" src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" />
          </a>
        </div>
      </aside>
      <main class="col-lg-6">
        <div class="ps-lg-3">
          <h4 class="title text-dark">
            Quality Men's Hoodie for Winter, Men's Fashion <br />
            Casual Hoodie
          </h4>

          <div class="mb-3">
            <span class="h5">$75.00</span>
          </div>

          <p>
            Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
            men.
          </p>

          <div class="row">
            <dt class="col-3">Category:</dt>
            <dd class="col-9">Regular</dd>
          </div>
          <hr />
          <div class="row mb-4">
            <div class="col-md-4 col-6">
              <label class="mb-2">Size</label>
              <select class="form-select border border-secondary" style={{width: 35}}>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
            <div class="col-md-4 col-6 mb-3">
              <label class="mb-2 d-block">Quantity</label>
            </div>
          </div>
          <a href="#" class="btn btn-warning shadow-0"> Buy now </a>
        </div>
      </main>
    </div>
  </div>
</section>
}

export default DetailPageComponent;