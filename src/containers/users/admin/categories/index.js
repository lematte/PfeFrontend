import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import AdminHeader from "../../../../components/Headers/AdminHeader/index";
import AdminSidebar from "../../../../components/Sidebar/AdminSidebar";
import { useSelector, useDispatch } from "react-redux";
import {
  getCategoriesByLibelle,
  getCategories,
  ADDCategorie,
  updatecategorie,
  DeleteCategorie,
} from "../../../../actions/index";

/*const currencies = [
  {
    value: "libre",
    label: "libre",
  },
  {
    value: "occupee",
    label: "occupée",
  },
];*/

function Categories() {
  const [libelle, setLibelle] = useState("");
  const [type, setType] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const categories = useSelector((state) => state.categories.categories);
  console.log("categories" + categories);

  var idC;
  const IdCategorie = (id) => {
    idC = id;
    console.log(idC);
  };
  const Delete = () => {
    console.log(idC);
    dispatch(DeleteCategorie(idC));
    dispatch(getCategories());
  };

  var id;
  /*const ID = (Id) => {
    id = Id;
    console.log(id);
  };*/
  const Update = () => {
    console.log(idC);
    console.log(libelle, type);
    const updates = {
      libelle,
      type,
    };
    dispatch(updatecategorie(idC, updates));
    dispatch(getCategories());
  };

  const ADD = (e) => {
    const categorie = {
      libelle,
      type,
    };
    dispatch(ADDCategorie(categorie));
    dispatch(getCategories());
  };

  return (
    <div class="main-wrapper">
      <AdminHeader />
      <AdminSidebar />
      <div class="page-wrapper">
        <div class="content container-fluid">
          {/* Page Header */}
          <div class="row">
            <div class="col-sm-9 col-sm-12">
              <h3 class="page-title">Courses </h3>
              <a
                class="btn btn-sm  btn-outline-info "
                data-toggle="modal"
                href="#add"
              >
                <FaIcons.FaPlus /> add
              </a>
              <br />
              <br />
            </div>
          </div>
          {/* /Page Header */}
          <div classname="row">
            <div classname="col-sm-12">
              <div class="card">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class=" table table-hover  ">
                      <thead>
                        <tr>
                          <th>Nombre</th>
                          <th>Libelle</th>
                          <th>Type </th>
                          <th class="text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories && categories.length > 0
                          ? categories.map((categorie, index) => (
                              <tr>
                                <td>{index + 1}</td>
                                <td>
                                  <h2 class="table-avatar">
                                    <a href="invoice.html">
                                      {categorie.libelle}
                                    </a>
                                  </h2>
                                </td>
                                <td>{categorie.type}</td>
                                <td class="text-center">
                                  <div class="actions">
                                    <a
                                      class="btn btn-sm bg-success-light mr-2"
                                      data-toggle="modal"
                                      href="#editCategorie"
                                      onClick={() => IdCategorie(categorie._id)}
                                    >
                                      <i class="fas fa-pencil-alt" /> Edit
                                    </a>
                                    <a
                                      class="btn btn-sm bg-danger-light"
                                      data-toggle="modal"
                                      href="#delete_modal"
                                      onClick={() => IdCategorie(categorie._id)}
                                    >
                                      <i class="far fa-trash-alt" /> Delete
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            ))
                          : "Aucun categories dans la base de donnes"}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="add" aria-hidden="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">ADD</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="row form-row">
                  <div class="col-12">
                    <div class="form-group">
                      <label>Libelle</label>
                      <input
                        type="text"
                        class="form-control"
                        defaultValue=""
                        value={libelle}
                        onChange={(e) => {
                          setLibelle(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label>type</label>
                      <input
                        type="text"
                        class="form-control"
                        value={type}
                        onChange={(e) => {
                          setType(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <br />
                <button
                  type="submit"
                  class="btn btn-primary btn-block"
                  onClick={ADD}
                  data-dismiss="modal"
                >
                  ADD
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /ADD Modal */}

      {/* Edit Details Modal */}
      <div class="modal fade" id="editCategorie" aria-hidden="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="row form-row">
                  <div class="col-12">
                    <div class="form-group">
                      <label>Libelle</label>
                      <input
                        type="text"
                        class="form-control"
                        value={libelle}
                        onChange={(e) => {
                          setLibelle(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label>Etat</label>
                      <input
                        type="text"
                        class="form-control"
                        value={type}
                        onChange={(e) => {
                          setType(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary btn-block"
                  onClick={Update}
                  data-dismiss="modal"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Details Modal */}
      {/* Delete Modal */}

      <div
        class="modal fade"
        id="delete_modal"
        aria-hidden="true"
        role="dialog"
        // onSubmit={Delete}
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div class="form-content p-2">
                <h4 class="modal-title">Delete</h4>
                <p class="mb-4">Are you sure want to delete?</p>
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={Delete}
                  data-dismiss="modal"
                >
                  Delete{" "}
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Categories;
