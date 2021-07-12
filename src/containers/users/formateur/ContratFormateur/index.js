import React from 'react';

import FormateurHeader from '../../../../components/Headers/FormateurHeader/index';
import FormateurSidebar from '../../../../components/Sidebar/FormateurSidebar/index';

function ContratFormation() {
  return (
    <div class="page-wrapper">
       <FormateurHeader />
        <FormateurSidebar />
      <div class="content container-fluid">
       
        {/* Page Header */}
        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="page-title">Contract Page</h3>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div classname="row">
          <div classname="col-sm-12">
            {/* Page Content */}
            <div class="content">
              <div class="container-fluid">
                <div class="row">
                  <div class="card card-table">
                    <div class="card-body">
                      {/* Invoice Table */}
                      <div class="table-responsive">
                        <table class="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Center Name</th>
                              <th>Date</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <a href="invoice-view.html">#INV-0010</a>
                              </td>
                              <td>
                                <h2 class="table-avatar">
                                  <a
                                    href="profile-mentee.html"
                                    class="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      class="avatar-img rounded-circle"
                                      src="assets/img/user/user2.jpg"
                                      alt="..."
                                    />
                                  </a>
                                  <a href="profile-mentee.html">
                                    Tyrone Roberts 
                                  </a>
                                </h2>
                              </td>
                              <td>14 Nov 2019</td>
                              <td class="text-right">
                                <div class="actions">
                                  <a
                                    data-toggle="modal"
                                    href="#edit_invoice_report"
                                    class="btn btn-sm bg-success-light mr-2"
                                  >
                                    <i class="fas fa-eye"></i> View
                                  </a>
                                  <a
                                    class="btn btn-sm bg-primary-light"
                                    data-toggle="modal"
                                    href="#delete_modal"
                                  >
                                    <i class="fas fa-print" />  Print
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* /Invoice Table */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Page Content */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContratFormation;
