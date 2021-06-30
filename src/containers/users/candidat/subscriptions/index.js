import React from 'react';
import CandidatSidebar from '../../../../components/Sidebar/CandidatSidebar/index';
import CandidatHeader from '../../../../components/Headers/CandidatHeader/index';

function Subscriptions() {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <CandidatHeader />
        <CandidatSidebar />
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Subscriptions Page</h3>
            </div>
          </div>
        </div>
        {/* /Page Header */}

        <div className="row">
          <div className="col-sm-12">Contents here   
          </div>
        </div>

      </div>
    </div>
  );
}
export default Subscriptions;
