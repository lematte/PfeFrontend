import React from 'react';

import AdminHeader from '../../../../components/Headers/AdminHeader/index';
import SidebarAdmin from '../../../../components/Sidebar/AdminSidebar';

function Setting() {
  return (
    <div>
      <AdminHeader />
      <SidebarAdmin />
      <div class="page-wrapper">
        <div class="content container-fluid">
            {/* General */}
            <div
              role="tabpanel"
              id="generalsettings"
              class="tab-pane fade show active"
            >
              {/* Page Header */}
              <div class="page-header">
                <div class="row">
                  <div class="col-sm-12">
                    <h3 class="page-title">General Settings</h3>{' '}
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-header">
                      <h4 class="card-title">General</h4>
                    </div>
                    <div class="card-body">
                      <form action="#">
                        <div class="form-group">
                          <label>Website Name</label>
                          <input type="text" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label>Website Logo</label>
                          <input type="file" class="form-control" />
                          <small class="text-secondary">
                            Recommended image size is <b>150px x 150px</b>
                          </small>
                        </div>
                        <div class="form-group mb-0">
                          <label>Favicon</label>
                          <input type="file" class="form-control" />
                          <small class="text-secondary">
                            Recommended image size is <b>16px x 16px</b> or{' '}
                            <b>32px x 32px</b>
                          </small>
                          <br />
                          <small class="text-secondary">
                            Accepted formats : only png and ico
                          </small>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /General */}
          </div>
      </div>
      {/* /Page Wrapper */}
    </div>
  );
}
export default Setting;
