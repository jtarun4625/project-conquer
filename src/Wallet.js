import React from "react";


function Wallet() {

 
  return (
    <>
    <section class="page-title">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3 class="heading">Wallet</h3>
          </div>
          <div class="col-md-6">
            <ul class="breadcrumb">
              <li><a href="index-2.html">Home</a></li>
              <li><p class="fs-18">/</p></li>
              <li><p class="fs-18">Wallet</p></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
      

    <section class="wallet buy-crypto flat-tabs">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-md-12">
            <ul class="menu-tab">
              <li class="active"><h6 class="fs-16">Overview</h6></li>
              <li><h6 class="fs-16 Buy Crypto">Buy Crypto</h6></li>
              <li><h6 class="fs-16">Sell Crypto</h6></li>
            </ul>
          </div>
          <div class="col-xl-9 col-md-12">
            <div class="content-tab">
             
            
              <div class="content-inner ">
                <div class="wallet-main">
                  <h4 class="heading">Overview</h4>

                  <div class="wallet-body">
                    <div class="left">
                      <p>Total Balance</p>

                      <div class="price">
                        <h6>0.79253864</h6>
                        <div class="sale success">BTC</div>
                      </div>
                      <p>$12,068.83</p>
                    </div>
                    <div class="right">
                      <form action="https://surielementor.com/rockiehtml/wallet-assets.html">
                        <div class="form-group">
                          <input type="text" placeholder="Search" />
                          <select class="" aria-label="USD">
                            <option selected>USD</option>
                            <option value="1">VND</option>
                            <option value="2">USDT</option>
                            <option value="3">USDC</option>
                          </select>
                        </div>
                        <button type="submit" class="btn-action">
                          Show balance
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <div class="coin-list-wallet">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th class="center" scope="col">Asset</th>
                        <th scope="col">Earn</th>
                        <th scope="col">On Orders</th>
                        <th scope="col">Available balance</th>
                        <th scope="col">Total balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="number">
                          <span>1</span>
                        </td>
                        <td class="asset">
                          <span class="icon-btc"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                          </span>
                          <p>
                            <span class="boild">USDT</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>2</span>
                        </td>
                        <td class="asset">
                          <span class="icon-eth"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                            <span class="path4"></span>
                          </span>
                          <p>
                            <span class="boild">Ethereum</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>3</span>
                        </td>
                        <td class="asset">
                          <span class="icon-bnb"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                            <span class="path4"></span>
                            <span class="path5"></span>
                            <span class="path6"></span>
                          </span>
                          <p>
                            <span class="boild">Binance</span>
                            <span class="unit">BNB</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>4</span>
                        </td>
                        <td class="asset">
                          <span class="icon-sol"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                            <span class="path4"></span>
                            <span class="path5"></span>
                         </span>
                          <p>
                            <span class="boild">Solana</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>5</span>
                        </td>
                        <td class="asset">
                          <span class="icon-btc"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                          </span>
                          <p>
                            <span class="boild">Solana</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>6</span>
                        </td>
                        <td class="asset">
                          <span class="icon-btc"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                          </span>
                          <p>
                            <span class="boild">XRP</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>7</span>
                        </td>
                        <td class="asset">
                          <span class="icon-ada"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                            <span class="path4"></span>
                            <span class="path5"></span>
                            <span class="path6"></span>
                            <span class="path7"></span>
                            <span class="path8"></span>
                            <span class="path9"></span>
                          </span>
                          <p>
                            <span class="boild">Cardano</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                      
                      <tr>
                        <td class="number">
                          <span>9</span>
                        </td>
                        <td class="asset">
                          <span class="icon-tether"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                          </span>
                          <p>
                            <span class="boild">Tether</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                     
                     
                      <tr>
                        <td class="number">
                          <span>13</span>
                        </td>
                        <td class="asset">
                          <span class="icon-bnb"
                            ><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></span>
                          <p>
                            <span class="boild">Binance</span>
                            <span class="unit">BNB</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>14</span>
                        </td>
                        <td class="asset">
                          <span class="icon-sol"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                            <span class="path4"></span>
                            <span class="path5"></span>
                          </span>
                          <p>
                            <span class="boild">Solana</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>15</span>
                        </td>
                        <td class="asset">
                          <span class="icon-btc"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                          </span>
                          <p>
                            <span class="boild">Solana</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>16</span>
                        </td>
                        <td class="asset">
                          <span class="icon-btc"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                          </span>
                          <p>
                            <span class="boild">XRP</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="content-inner Buy Crypto">
                <div class="wallet-main">
                  <h4 class="heading">kjkk</h4>

                  <div class="wallet-body">
                    <div class="left">
                      <p>Total Balance</p>

                      <div class="price">
                        <h6>0.79253864</h6>
                        <div class="sale success">BTC</div>
                      </div>
                      <p>$12,068.83</p>
                    </div>
                    <div class="right">
                      <form action="https://surielementor.com/rockiehtml/wallet-assets.html">
                        {/* <div class="form-group">
                          <input type="text" placeholder="Search" />
                          <select class="" aria-label="USD">
                            <option selected>USD</option>
                            <option value="1">VND</option>
                            <option value="2">USDT</option>
                            <option value="3">USDC</option>
                          </select>
                        </div> */}
                        <button type="submit" class="btn-action">
                          Show balance
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <div class="coin-list-wallet">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th class="center" scope="col">Asset</th>
                        <th scope="col">Earn</th>
                        <th scope="col">On Orders</th>
                        <th scope="col">Available balance</th>
                        <th scope="col">Total balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="number">
                          <span>1</span>
                        </td>
                        <td class="asset">
                          <span class="icon-btc"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                          </span>
                          <p>
                            <span class="boild">USDT</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>2</span>
                        </td>
                        <td class="asset">
                          <span class="icon-eth"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                            <span class="path4"></span>
                          </span>
                          <p>
                            <span class="boild">Ethereum</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>3</span>
                        </td>
                        <td class="asset">
                          <span class="icon-bnb"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                            <span class="path4"></span>
                            <span class="path5"></span>
                            <span class="path6"></span>
                          </span>
                          <p>
                            <span class="boild">Binance</span>
                            <span class="unit">BNB</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>4</span>
                        </td>
                        <td class="asset">
                          <span class="icon-sol"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                            <span class="path4"></span>
                            <span class="path5"></span>
                         </span>
                          <p>
                            <span class="boild">Solana</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>5</span>
                        </td>
                        <td class="asset">
                          <span class="icon-btc"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                          </span>
                          <p>
                            <span class="boild">Solana</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>6</span>
                        </td>
                        <td class="asset">
                          <span class="icon-btc"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                          </span>
                          <p>
                            <span class="boild">XRP</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>7</span>
                        </td>
                        <td class="asset">
                          <span class="icon-ada"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                            <span class="path4"></span>
                            <span class="path5"></span>
                            <span class="path6"></span>
                            <span class="path7"></span>
                            <span class="path8"></span>
                            <span class="path9"></span>
                          </span>
                          <p>
                            <span class="boild">Cardano</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                      
                      <tr>
                        <td class="number">
                          <span>9</span>
                        </td>
                        <td class="asset">
                          <span class="icon-tether"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                          </span>
                          <p>
                            <span class="boild">Tether</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                     
                     
                      <tr>
                        <td class="number">
                          <span>13</span>
                        </td>
                        <td class="asset">
                          <span class="icon-bnb"
                            ><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></span>
                          <p>
                            <span class="boild">Binance</span>
                            <span class="unit">BNB</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>14</span>
                        </td>
                        <td class="asset">
                          <span class="icon-sol"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                            <span class="path4"></span>
                            <span class="path5"></span>
                          </span>
                          <p>
                            <span class="boild">Solana</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>15</span>
                        </td>
                        <td class="asset">
                          <span class="icon-btc"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                          </span>
                          <p>
                            <span class="boild">Solana</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="number">
                          <span>16</span>
                        </td>
                        <td class="asset">
                          <span class="icon-btc"
                            ><span class="path1"></span>
                            <span class="path2"></span>
                          </span>
                          <p>
                            <span class="boild">XRP</span>
                            <span class="unit">Tether USD</span>
                          </p>
                        </td>
                        <td class="color-success">
                          <span class="boild">7.46% APR</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                        <td>
                          <span class="boild">0.2785689852 BTC</span>
                          <span class="unit">$10,098.36</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


 
    <section class="section-sale">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="block-text">
              <h4 class="heading">Earn up to $25 worth of crypto</h4>
              <p class="desc">
                Discover how specific cryptocurrencies work — and get a bit of
                each crypto to try out for yourself.
              </p>
            </div>
          </div>
          <div class="col-md-5">
            <div class="button">
              <a href="#">Create Account</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Wallet;
