import React, { useState, useEffect } from 'react';

function Crud() {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);
  const [employee, setEmployee] = useState({ id: null, name: '', position: '' });

  useEffect(() => {
    // You can initialize the employee data from an API or other data source here.
    // For simplicity, we'll start with an empty list of employees.
    setEmployees([]);
  }, []);

  const addEmployee = () => {
    if (!employee.name || !employee.position) return;
    setEmployees([...employees, { ...employee, id: Date.now() }]);
    setEmployee({ id: null, name: '', position: '' });
  };

  const updateEmployee = () => {
    if (!employee.name || !employee.position) return;
    const updatedEmployees = employees.map((emp) =>
      emp.id === employee.id ? { ...employee } : emp
    );
    setEmployees(updatedEmployees);
    setEditEmployee(null);
    setEmployee({ id: null, name: '', position: '' });
  };

  const deleteEmployee = (id) => {
    const filteredEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(filteredEmployees);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Employee CRUD</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Add/Edit Employee</h2>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Name"
            value={employee.name}
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
            className="border p-2 rounded w-1/2"
          />
          <input
            type="text"
            placeholder="Position"
            value={employee.position}
            onChange={(e) => setEmployee({ ...employee, position: e.target.value })}
            className="border p-2 rounded w-1/2"
          />
          {editEmployee ? (
            <button onClick={updateEmployee} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Update
            </button>
          ) : (
            <button onClick={addEmployee} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Add
            </button>
          )}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Employee List</h2>
        <ul>
          {employees.map((emp) => (
            <li key={emp.id} className="mb-2 p-2 border rounded">
              <div>
                <strong>{emp.name}</strong> - {emp.position}
              </div>
              <div>
                <button onClick={() => setEditEmployee(emp)} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded">
                  Edit
                </button>
                <button onClick={() => deleteEmployee(emp.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Crud;
