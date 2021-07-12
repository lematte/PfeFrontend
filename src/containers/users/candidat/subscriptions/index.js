import React from 'react';
import CandidatSidebar from '../../../../components/Sidebar/CandidatSidebar/index';
import CandidatHeader from '../../../../components/Headers/CandidatHeader/index';

function Subscriptions() {
  return (
    <div class="page-wrapper">
      <div class="content container-fluid">
        <CandidatHeader />
        <CandidatSidebar />
        {/* Page Header */}
        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="page-title">Subscriptions Page</h3>
            </div>
          </div>
        </div>
        {/* /Page Header */}

        <div class="row">
          <div class="col-sm-12">Contents here   
          </div>
        </div>

      </div>
    </div>
  );
}
export default Subscriptions;
