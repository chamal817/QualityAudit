"use client"
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


export default function ModalComponent() {
    const [showModal, setShowModal] = useState(false);
    const initialFormData = {
      item: '',
      owner: '',
      status: '',
      comment: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    
    const handleInputChange = (e : any) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e : any) => {
      e.preventDefault();
      const newData = { ...formData, id: 0 };
      console.log(newData);
      setFormData(initialFormData);
      handleClose();
    };
  
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true)

return(
<div>
<div className="text-end mb-3">
        <Button variant="primary" onClick={handleShow}>
          Add Item
        </Button>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="item" className="form-label">Item</label>
              <input type="text" className="form-control" id="item" name="item" value={formData.owner} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="owner" className="form-label">Owner</label>
              <input type="text" className="form-control" id="owner" name="owner" value={formData.owner} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="form-label">Status</label>
              <input type="text" className="form-control" id="status" name="status" value={formData.status} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">Comments</label>
              <input type="text" className="form-control" id="comment" name="comment" value={formData.comment} onChange={handleInputChange} required />
            </div>
            <button type="submit" className="btn btn-primary">Add Item</button>
          </form>
        </Modal.Body>
      </Modal>
</div>
)
}