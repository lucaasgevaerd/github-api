import Navbar from 'components/Navbar';
import ResultProfile from 'components/ResultProfile';
import Loader from 'components/Loader';
import { useState } from 'react';
import './style.css';

const FindProfile = () => {
  type User = {
    avatar_url: string;
    url: string;
    followers: string;
    location: string | null;
    name: string | null;
    login: string;
  };

  const [user, setUser] = useState<User>();
  const [userName, setUserName] = useState('');
  const [requiredField, setRequiredField] = useState(false);
  const [userFound, setUserFound] = useState(false);
  const [emptyField, setEmptyField] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: any) => {
    setUserName(event.target.value);
    if (event.target.value === '') {
      setRequiredField(true);
    } else if (event.target.value !== '') {
      setRequiredField(false);
    }
  };

  const url = `https://api.github.com/users/${userName}`;

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setUser({
      avatar_url: '',
      url: '',
      followers: '',
      location: '',
      name: '',
      login: ''
    });
    setEmptyField(false);
    setUserFound(false);
    setIsLoading(true);

    await fetch(url)
      .then((resolve) => {
        if (resolve.ok) {
          setUserFound(false);
          setEmptyField(false);
          return resolve.json();
        } else {
          if (userName.length > 0) {
            setUserFound(true);
            setEmptyField(false);
          } else {
            setEmptyField(true);
            setUserFound(false);
            setRequiredField(true);
          }
        }
      })
      .then((data) => {
        setUser({
          avatar_url: data.avatar_url,
          url: data.url,
          followers: data.followers,
          location: data.location,
          name: data.name,
          login: data.login
        });
      })
      .catch((e) => {
        setUser({
          avatar_url: '',
          url: '',
          followers: '',
          location: '',
          name: '',
          login: ''
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
    };
    
    (user?.name === null) && setUser({ ...user, name: "Sem dados"});
    (user?.location === null) && setUser({ ...user, location: "Sem dados"});
    
  return (
    <>
      <Navbar />
      <main className="main-container">
        <section className="section-find-profile-container">
          <form action="" className="form-container" onSubmit={handleSubmit}>
            <h2>Encontre um perfil Github</h2>
            <input
              type="text"
              placeholder="Usuário Github"
              onChange={handleChange}
              name="field"
              defaultValue=""
            />
            {requiredField && (
              <div className="empty-field">Campo requerido</div>
            )}
            <button type="submit" className="btn btn-primary shadow-none">
              Encontrar
            </button>
          </form>
        </section>
        {isLoading && <Loader />}
        {user?.login && (
          <section>
            <ResultProfile
              avatar_url={user?.avatar_url}
              url={user?.url}
              followers={user?.followers}
              location={user?.location}
              name={user?.name}
              login={user?.login}
            />
          </section>
        )}
        {userFound && (
          <div className="result-error">
            <h4>Usuário não encontrado. &#128532;</h4>
          </div>
        )}
        {emptyField && (
          <div className="result-error">
            <h4>Campo requerido. &#128577;</h4>
          </div>
        )}
      </main>
    </>
  );
};

export default FindProfile;