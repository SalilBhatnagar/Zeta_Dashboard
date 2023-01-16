export default function DashBoard() {
    return <>

     <div className="div-dashbord">
     <div class="container">
        <div class="row">
            <div class="col-md-12">
              <h1 className="h1-dashHeading">
                 DashBoard
               </h1>
            </div>
        </div>
        </div>
     </div>
     <hr/>
     <div class="container">
    <div class="row">
    <div class="col-md-3">
      <div class="card-counter primary">
        <i class="fa fa-database"></i>
        <span class="count-numbers">12</span>
        <span class="count-name">Total Sale</span>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card-counter danger">
        <i class="fa fa-database"></i>
        <span class="count-numbers">599</span>
        <span class="count-name">Total Orders</span>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card-counter success">
        <i class="fa fa-database"></i>
        <span class="count-numbers">6875</span>
        <span class="count-name">This Month Stats</span>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card-counter info">
        <i class="fa fa-database"></i>
        <span class="count-numbers">35</span>
        <span class="count-name">Last Month Stats</span>
      </div>
    </div>
    
    <div class="col-md-3">
      <div class="card-counter info">
        <i class="fa fa-database"></i>
        <span class="count-numbers">6875</span>
        <span class="count-name">Total Customers</span>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card-counter success">
        <i class="fa fa-database"></i>
        <span class="count-numbers">6875</span>
        <span class="count-name">Engagement</span>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card-counter danger">
        <i class="fa fa-database"></i>
        <span class="count-numbers">6875</span>
        <span class="count-name">AOV</span>
      </div>    
    </div>

  </div>
</div>
<br/>

<div class="container">
        <div class="row">
            <div class="col-md-12">
                <div>
                 <spna>ORDER'S</spna>
                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Order ID (Customer ID)</th>
                        <th scope="col">Order Value</th>
                        <th scope="col">Date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">App Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
</div>
<br/>
<div class="container">
        <div class="row">
            <div class="col-md-12">
                <div>
                 <spna>Signup'S</spna>
                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Place</th>
                        <th scope="col">Pincode	</th>
                        <th scope="col">Credit</th>
                        <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
</div>

</>
}