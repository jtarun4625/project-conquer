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
              <li class="active"><h6 class="fs-16">USD Doller</h6></li>
              <li><h6 class="fs-16 Buy Crypto">Carban Credit</h6></li>
     
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
                     
                        {/* <div class="form-group">
                          <input type="text" placeholder="Search" />
                          <select class="" aria-label="USD">
                            <option selected>USD</option>
                            <option value="1">VND</option>
                            <option value="2">USDT</option>
                            <option value="3">USDC</option>
                          </select>
                        </div> */}
                        <button type="submit" class="btn btn-primary text-white" data-toggle="modal" href='#susbc-form'>
                          Show balance
                        </button>
        
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
                     
                        {/* <div class="form-group">
                          <input type="text" placeholder="Search" />
                          <select class="" aria-label="USD">
                            <option selected>USD</option>
                            <option value="1">VND</option>
                            <option value="2">USDT</option>
                            <option value="3">USDC</option>
                          </select>
                        </div> */}
                        <button type="submit" class="btn btn-primary text-white" data-toggle="modal" href='#susbc-form1'>
                          Show balance
                        </button>
                
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





 

    {/* start model  */}
    <div class="modal fade" id="susbc-form">
			<div class="modal-dialog shadow-lg p-3 mb-5 bg-white rounded">
				<div class="modal-content sub-bg">
					<div class="modal-header subs-header">
						{/* <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> */}
					
					</div>
                <h6 className="text-center"> Add Auction Form</h6>
					<div class="modal-body">
						
					
						<div class="row">
							<div class="col-md-12">
								<form id="subs-form">
									<div class="form-group row">
										<div class="col-md-12 col-xs-12">
											<label for="firstName" class="label-custom">First Name </label>
											<input type="text" class="form-control input-custom" id="firstName" required/>
										</div>
										<div class="col-md-12 col-xs-12" >
											<label for="firstName" className="label-custom">Price </label>
											<input type="text" class="form-control input-custom" id="firstName"  required/>
										</div>
										<div class="col-md-12 col-xs-12">
											<label for="firstName" className="label-custom">Bid Price </label>
											<input type="text" class="form-control input-custom" id="firstName"  required/>
										</div>
									</div>
									<button type="submit" class="btn btn-primary text-white">Submit</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

  {/* end modal  */}



   
    
		
    {/*2 start model  */}
    <div class="modal fade" id="susbc-form1">
			<div class="modal-dialog shadow-lg p-3 mb-5 bg-white rounded">
				<div class="modal-content sub-bg">
					<div class="modal-header subs-header">
						{/* <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> */}
					
					</div>
                <h6 className="text-center"> Add Auction Form</h6>
					<div class="modal-body">
						
					
						<div class="row">
							<div class="col-md-12">
								<form id="subs-form">
									<div class="form-group row">
										<div class="col-md-12 col-xs-12">
											<label for="firstName" class="label-custom">First Name </label>
											<input type="text" class="form-control input-custom" id="firstName" required/>
										</div>
										<div class="col-md-12 col-xs-12" >
											<label for="firstName" className="label-custom">Price </label>
											<input type="text" class="form-control input-custom" id="firstName"  required/>
										</div>
										<div class="col-md-12 col-xs-12">
											<label for="firstName" className="label-custom">Bid Price </label>
											<input type="text" class="form-control input-custom" id="firstName"  required/>
										</div>
									</div>
									<button type="submit" class="btn btn-primary text-white">Submit</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

  {/*2 end modal  */}

    </>
  );
}

export default Wallet;
