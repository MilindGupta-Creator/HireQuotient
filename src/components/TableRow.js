// TableRow.js
import React from "react";

const TableRow = ({
  user,
  selectedRows,
  handleCheckboxChange,
  handleEdit,
  handleDelete,
  editingUser, // Receive editingUser as a prop
  setEditingUser, // Receive setEditingUser as a prop
  handleSaveEdit,
}) => {
  return (
    <tr key={user.id}>
      <td>
        <input
          type="checkbox"
          checked={selectedRows.includes(user.id)}
          onChange={() => handleCheckboxChange(user.id)}
        />
      </td>
      <td>{user.id}</td>
      <td>
        {editingUser && editingUser.id === user.id ? (
          <input
            type="text"
            value={editingUser.name}
            onChange={(e) =>
              setEditingUser({ ...editingUser, name: e.target.value })
            }
          />
        ) : (
          user.name
        )}
      </td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        {editingUser && editingUser.id === user.id ? (
          <button className="save" onClick={handleSaveEdit}>
            Save
          </button>
        ) : (
          <>
            <button className="edit" style={{fontWeight:"500"}} onClick={() => handleEdit(user.id)}>
              Edit
            </button>
            <b>/</b>
            <button style={{width:"4rem",fontWeight:"500"}} className="delete" onClick={() => handleDelete(user.id)}>
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
