import { Bars } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Bars
      height="80"
      width="80"
      color="#1f51dd"
      ariaLabel="bars-loading"
      wrapperStyle={{
        marginTop: '20px',
        marginBottom: '20px',
        justifyContent: 'center',
      }}
      visible={true}
    />
  );
};
