import "./Home.css";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Home = ({ allDogs }) => {
  return (
    <>
      <header>
        {allDogs.length > 0 ? (
          <>
            <h2 className="home-title">Welcome to my pet shop</h2>
            <div className="home-img-wrap">
              <img
                src="https://res.cloudinary.com/daeg8bpax/image/upload/v1680622707/pngwing.com_i3a9db.png"
                alt=""
                className="home-img"
              />
            </div>
          </>
        ) : (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </header>
    </>
  );
};

export default Home;
