import ModalButton from '../../components/Modal/ModalButton';
import Modal from '../../components/Modal/Modal';
import { useState, useEffect } from 'react';
let productModal = null;

/**
 * Bootstrap's Modal component implementation example
 * @returns {JSX.Element}
 * @constructor
 */
export default function ProductsPage() {
  // default values
  const computersInit = [{ os: 'Windows', ram: '12GB', diskStorage: '200GB' }];
  const headerRows = [];
  const headers = ['OS', 'RAM', 'Disk Storage'];
  headers.forEach((header, index) => {
    headerRows.push(<th key={index}>{header}</th>);
  });
  // states
  const [osState, setOsState] = useState('');
  const [ramState, setRamState] = useState('');
  const [diskStorageState, setDiskStorageState] = useState('');
  const [computersState, setComputersState] = useState(computersInit);
  // effects
  useEffect(() => {
    if (!productModal) {
      productModal = new window.bootstrap.Modal('#productModal');
    }
    return () => {
      productModal = null;
    };
  }, []);
  // handlers
  const handleChangeOS = (e) => {
    setOsState(e.target.value);
  };
  const handleChangeRAM = (e) => {
    setRamState(e.target.value);
  };
  const handleChangeDiskStorage = (e) => {
    setDiskStorageState(e.target.value);
  };
  //functions
  const addComputer = () => {
    // add computer to state
    let updatedComputer = {
      os: osState,
      ram: ramState,
      diskStorage: diskStorageState,
    };
    let computersStateToUpdate = [...computersState];
    computersStateToUpdate.push(updatedComputer);
    setComputersState(() => computersStateToUpdate);
    // setComputersState((prev) => [...prev, ...[updatedComputer]]);
    setOsState('');
    setRamState('');
    setDiskStorageState('');
    productModal.hide();
  };
  // modal footer
  const modalFooter = (
    <>
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
        Cerrar
      </button>
      <button type="button" className="btn btn-primary" onClick={addComputer}>
        Guardar
      </button>
    </>
  );
  //render
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>{headerRows}</tr>
            </thead>
            <tbody>
              {computersState.map((computer, index) => {
                return (
                  <tr key={index}>
                    <td>{computer.os}</td>
                    <td>{computer.ram}</td>
                    <td>{computer.diskStorage}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <ModalButton targetId="productModal">Add product</ModalButton>
          <Modal targetId="productModal" modalFooter={modalFooter}>
            <form>
              <div className="mb-3">
                <label className="form-label">OS</label>
                <input
                  type="text"
                  className="form-control"
                  value={osState}
                  onChange={handleChangeOS}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">RAM</label>
                <input
                  type="text"
                  className="form-control"
                  value={ramState}
                  onChange={handleChangeRAM}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Disk Storage</label>
                <input
                  type="text"
                  className="form-control"
                  value={diskStorageState}
                  onChange={handleChangeDiskStorage}
                />
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
}
