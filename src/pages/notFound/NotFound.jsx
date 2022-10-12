import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  return (
    <>
      <div>{location.pathname} | 404 | Not Found</div>
    </>
  );
};

export default NotFound;
