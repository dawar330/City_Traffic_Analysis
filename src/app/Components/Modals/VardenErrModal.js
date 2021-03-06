import React from "react";
import {Modal , Button} from "react-bootstrap";


export function VardenErrModal (propss) {
    return(
<Modal show={propss.show} onHide={propss.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={propss.onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={propss.onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
}
export default VardenErrModal