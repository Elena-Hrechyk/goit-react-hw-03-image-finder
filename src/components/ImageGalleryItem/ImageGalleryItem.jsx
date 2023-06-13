import { Component } from 'react';
// import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import { ModalWin } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = { isModalOpen: false };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  render() {
    const { id, webformatURL, tags, largeImageURL } = this.props;
    const { isModalOpen } = this.state;

    return (
      <li className={css.card__item} key={id}>
        <img
          src={webformatURL}
          alt={tags}
          onClick={this.toggleModal}
          className={css.image}
          loading="lazy"
        />
        {isModalOpen && (
          <ModalWin
            largeImgURL={largeImageURL}
            tags={tags}
            isOpen={isModalOpen}
            onClose={this.toggleModal}
          />
        )}
      </li>
    );
  }
}

// ImageGalleryItem.proptype = {
//   id: PropTypes.number.isRequired,
//   webformatURL: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
// };
