import { useEffect, useState } from 'react';
import { addToFavorites, delOneFromFavorites } from '../../actions/favoriteActions';
import { helpHttp } from '../../api/helpHttp';
import { favoritesState } from '../../reducers/favoriteReducer';
import ButtonFilter from '../ButtonFilter/ButtonFilter';
import { BtnFavAdd } from '../ButtonsFavoritesAdd/BtnFavAdd';
import CharacterCard from '../CharacterCard/CharacterCard';
import Favorites from '../Favorites/Favorites';
import { useSelector, useDispatch } from 'react-redux';
import './MainView.scss';
import RegisterForm from '../RegisterForm/RegisterForm';

export default function MainView() {
  //variable para guardar la  data obtenida de la API
  const [data, setData] = useState(null);

  //variable para crear los botones de filtro
  const filterType = ['Estudiante', 'Staff'];

  //Variable para elevar estado del botón a la vista principal
  const [type, setType] = useState('');

  //variable para elevar estado y abrir la lista de favoritos
  const [open, setOpen] = useState(false);

  const [register, setRegister] = useState(false);

  //Variable para elevar estado y regresar el id del personaje
  const [name, setName] = useState({});


  //Variables para hacer el consumo de la API
  //API
  let api = helpHttp();
  //URL
  let url = 'https://harry-potter-aem.herokuapp.com/characters';

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { characters, favorites } = state.favorites;

  //UseEffect para hacer el get de la API
  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err && type === '') {
          setData(res);
          favoritesState(res);
        } else if (!res.err && type === 'Estudiante') {
          setData(res.filter((character) => character.hogwartsStudent === true));
        } else if (!res.err && type === 'Staff') {
          setData(res.filter((character) => character.hogwartsStaff === true));
        } else {
          setData(null);
        }
      });
  }, [url, type]);

  const createData = (db) => {
    let options = { body: db, headers: { 'content-type': 'application/json' } };
    // console.log(db);
    api.post(url, options).then((res) => {
      // console.log(res);
      if (!res.err) {
        setData([...data, res]);
      } else {
        setError(res);
      }
    });
    setRegister(false);
  };

  function typeToFilter(type) {
    setType(type);
  }

  function isOpen() {
    //setOpen(newState);
    setOpen(!open);
  }

  function isRegister() {
    setRegister(!register);
  }

  function characterName(name) {
    setName(name);
  }

  // console.log(characterArray);

  return (
    <main className='main-view'>
      <section className='main-view__popups'>
        <BtnFavAdd isOpen={isOpen} isRegister={isRegister} />
        {register === true ? (
          <RegisterForm createData={createData} isOpen={isRegister}></RegisterForm>
        ) : (
          ''
        )}
        {open === true ? (
          <Favorites
            data={data}
            name={name}
            delOneFromFavorites={() => dispatch(delOneFromFavorites(name, true))}
          ></Favorites>
        ) : (
          ''
        )}
      </section>
      <div className='main-view__hero'></div>
      <h1 className='main-view__title'>
        <img src={require('../../assets/harry-potter-title.png')} alt='Harry Potter' />
      </h1>
      <h4 className='main-view__subtitle'>Selecciona tu filtro</h4>
      <section className='main-view__buttons'>
        {filterType
          ? filterType.map((type) => (
              <ButtonFilter
                key={Math.random().toString(36).slice(2)}
                type={type}
                typeToFilter={typeToFilter}
              />
            ))
          : ''}
      </section>
      <section className='characters container'>
        {data
          ? data.map((characterInfo) => (
              <CharacterCard
                key={Math.random().toString(36).slice(2)}
                data={characterInfo}
                isName={characterName}
                addToFavorites={() => dispatch(addToFavorites(characterInfo.name))}
              ></CharacterCard>
            ))
          : ''}
      </section>
    </main>
  );
}