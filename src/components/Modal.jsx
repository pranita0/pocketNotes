import  { useState } from 'react';
import './Modal.css'; // Assuming you have some CSS for styling

const CreateNotesGroup = ({ onClose, onCreate }) => {
  const [groupName, setGroupName] = useState('');
  const [color, setColor] = useState('');

  const handleCreate = () => {
    if (groupName && color) {
      onCreate({ groupName, color });
      onClose();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create New Notes Group</h2>
        <div className="form-group">
          <label>Group Name</label>
          <input
            type="text"
            placeholder="Enter your group name..."
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Choose Colour</label>
          <div className="color-options">
            {['#d59ded', '#8ed7db', '#f8ab99', '#68d0b4', '#4689e8', '#4673e8'].map((colorOption) => (
              <span
                key={colorOption}
                className={`color-circle ${color === colorOption ? 'selected' : ''}`}
                style={{ backgroundColor: colorOption }}
                onClick={() => setColor(colorOption)}
              />
            ))}
          </div>
        </div>
        <button onClick={handleCreate} disabled={!groupName || !color}>Create</button>
      </div>
    </div>
  );
};

export default CreateNotesGroup;
