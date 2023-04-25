import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDesignation, getPermission, editPermission } from './action';

import io from 'socket.io-client';

function Permission() {
  const dispatch = useDispatch();

  const [role, setRole] = useState('');
  const [choice, setChoice] = useState([]);
  const [newPermission, setNewPermission] = useState([]);

  useEffect(() => {
    dispatch(getDesignation());
    dispatch(getPermission());
  }, []);

  const { designation, permission } = useSelector((e) => e.permissionReducer);

  const socket = io.connect('http://localhost:5000');

  // console.log('designation', designation);
  // console.log('permission', permission);

  const filteredPermission = permission?.filter(
    (item, index, self) =>
      index === permission?.findIndex((p) => p.menu === item.menu)
  );

  const handleCheckboxChange = (e, permi) => {
    const { value, checked } = e.target;
    if (checked) {
      setChoice([...choice, value]);
      // eslint-disable-next-line array-callback-return
      permission.filter((item) => {
        if (item.id === value) {
          setNewPermission((prevState) => [
            ...prevState,
            { designationId: role, permissionId: item.id },
          ]);
        }
      });
    } else {
      setChoice(choice?.filter((item) => item !== value));
      // eslint-disable-next-line array-callback-return
      permission.filter((item) => {
        if (item.id === value) {
          setNewPermission((prevState) =>
            prevState.filter((id) => id.permissionId !== item.id)
          );
        }
      });
    }
  };

  const handleUserCheckbox = (e) => {
    // designations?.Designation.map((item, index) => setChoice(item.permissions));
    // setNewPermission(...newPermission, { role: e, choice: choice });
    setRole(e);

    // dispatch(getUserPermission(e));
  };

  console.log('choice', choice);
  console.log('newPermission', newPermission);
  return (
    <div className="container">
      <div className="m-5">
        <label htmlFor="designation">Select Designation:</label>
        <select
          class="btn btn-secondary"
          type="button"
          id="dropdownMenuButton"
          aria-expanded="false"
          value={role}
          onChange={(e) => handleUserCheckbox(e.target.value)}
        >
          <option aria-labelledby="dropdownMenuButton" value="">
            Choose designation
          </option>
          {designation?.map((item, index) => (
            <option key={index} value={item.id}>
              {item.designation}
            </option>
          ))}
        </select>
        <button
          className="btn btn-primary"
          style={{ float: 'right' }}
          // onClick={() => dispatch(updatePermission(role, choice))}
          onClick={() => dispatch(editPermission(newPermission))}
        >
          Update
        </button>
      </div>
      <div className="accordion">
        {role
          ? filteredPermission?.map((item, index) => (
              <div className="accordion" id="accordionExample" key={index}>
                <div className="accordion-item">
                  <h2 className="accordion-header" id={`heading${item.id}`}>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${item.id}`}
                      aria-expanded="true"
                      aria-controls={item.id}
                      // onClick={() => handleItemClick(index)}
                    >
                      {item.menu}
                    </button>
                  </h2>
                  <div
                    id={item.id}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading${item.id}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body m-3">
                      <div class="custom-control custom-switch mt-1 mb-1 d-flex">
                        {/* <label class="switch">
                          <input
                            type="checkbox"
                            id="toggleCompany"
                            // onChange={(e) => e.target.value}
                          />
                          <span class="slider round"></span>
                        </label>
                        <label htmlFor="toggleCompany" className="ml-2">
                          All permissions
                        </label> */}
                         {/* const selectBtn = (data) => {
    let subMenuId = permissions?.map((item) => item.permission_id);
    return subMenuId.includes(data.id) ? true : false;
  }; */}
                        

                        {permission.map((data_1, index) =>
                          data_1.menu === item.menu ? (
                            <div
                              key={index}
                              className="custom-control custom-switch mt-1 mb-1"
                            >
                              <label class="switch">
                                <input
                                  type="checkbox"
                                  checked={choice?.includes(data_1.id)}
                                  id="toggleCompany"
                                  onChange={(e) => handleCheckboxChange(e)}
                                  value={data_1.id}
                                />
                                <span class="slider round"></span>
                              </label>
                              <label htmlFor="toggleCompany" className="ml-2">
                                {data_1.subMenu}
                              </label>
                            </div>
                          ) : null
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Permission;
