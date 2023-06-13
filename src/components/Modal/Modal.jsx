import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
    TransitionEvent: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalWin = ({ largeImgURL, tags, isOpen, onClose }) => {
  return (
    <>
      <div>
        <Modal
          isOpen={isOpen}
          onAfterOpen={() => disableBodyScroll(document)}
          onAfterClose={() => enableBodyScroll(document)}
          onRequestClose={onClose}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img src={largeImgURL} alt={tags} />
        </Modal>
      </div>
    </>
  );
};

ModalWin.prototype = {
  largeImgURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};
