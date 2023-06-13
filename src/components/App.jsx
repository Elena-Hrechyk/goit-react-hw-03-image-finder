import React, { Component } from 'react';
import { fetchImages } from 'services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export class App extends Component {
  abortCtrl;
  totalImages;

  state = {
    images: [],
    value: '',
    page: 1,
    error: null,
    loading: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.value !== this.state.value ||
      prevState.page !== this.state.page
    ) {
      this.getImages();
    }
  }

  getImages = async () => {
    const { value, page } = this.state;

    if (this.abortCtrl) {
      this.abortCtrl.abort();
    }

    try {
      this.abortCtrl = new AbortController();
      this.setState({ loading: true, error: null });
      const resps = await fetchImages(value, page, this.abortCtrl);
      this.totalImages = resps.total;
      if (resps.hits.length === 0) {
        this.setState({ error: 'Ooops! Try again!' });
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...resps.hits],
      }));
    } catch (error) {
      if (error.code !== 'ERR_CANCELED') {
        this.setState({ error: 'Ooops! Try again!' });
      }
    } finally {
      this.setState({ loading: false });
    }
  };

  componentWillUnmount() {
    this.abortCtrl.abort();
  }

  onSearch = value => {
    if (this.state.value === value) {
      return;
    }
    this.setState({
      value: value,
      page: 1,
      images: [],
    });
  };

  getCurrentPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    console.log(this.state);
    const { images, error, page, loading } = this.state;
    const quantityPages = Math.ceil(this.totalImages / 12);

    return (
      <>
        <Searchbar onSearch={this.onSearch} />
        {images && <ImageGallery images={images} />}
        {loading && <Loader />}
        {quantityPages > 1 && quantityPages !== page && !loading && (
          <Button onClick={this.getCurrentPage} />
        )}
        {error && (
          <h2
            
            style={{
              marginTop: 30,
              textAlign: 'center',
            }}
          >
            {error}
          </h2>
        )}
      </>
    );
  }
}
