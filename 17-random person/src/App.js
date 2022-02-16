import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedLabel, setSelectedLabel] = useState('name');
  const [selectedLabelVal, setSelectedLabelVal] = useState('Random User');
  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const {name, email, dob, location, phone, login, picture} = data.results[0];
    setUser({
      name: name.first + ' ' + name.last,
      email: email,
      age: dob.age,
      street: location.street.name,
      phone: phone,
      password: login.password,
      picture: picture.medium
    });
    setLoading(false);
    setSelectedLabelVal(user.name)
  }
  const handleButtonHover = (e) => {
    if(e.target.classList.contains('icon')){
      setSelectedLabel(e.target.dataset.label);
      setSelectedLabelVal(user[e.target.dataset.label]);
    }
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <main>
      <div className="block bcg-black"></div>
      <div className='block'>
        {loading ? <div className='container'>
          <img src={defaultImage} className='user-img' alt='user-img'></img>
          <p className='user-title'>
            My {selectedLabel} is
          </p>
          <p className='user-value'>{selectedLabelVal}</p>
          <div className='values-list'>
            <button className='icon'>
              <FaUser />
            </button>
            <button className='icon'>
              <FaEnvelopeOpen />
            </button>
            <button className='icon'>
              <FaCalendarTimes />
            </button>
            <button className='icon'>
              <FaMap />
            </button>
            <button className='icon'>
              <FaPhone />
            </button>
            <button className='icon'>
              <FaLock />
            </button>
          </div>
          <button className='btn' type='button'>loading...</button>
        </div> 
        :
        <div className='container'>
          <img src={user.picture} className='user-img' alt='user-img'></img>
          <p className='user-title'>
            My {selectedLabel} is  
          </p>
          <p className='user-value'>{selectedLabelVal}</p>
          <div className='values-list'>
            <button className='icon' data-label='name' onMouseOver={handleButtonHover}>
              <FaUser />
            </button>
            <button className='icon' data-label='email' onMouseOver={handleButtonHover}>
              <FaEnvelopeOpen />
            </button>
            <button className='icon' data-label='age' onMouseOver={handleButtonHover}>
              <FaCalendarTimes />
            </button>
            <button className='icon' data-label='street' onMouseOver={handleButtonHover}>
              <FaMap />
            </button>
            <button className='icon' data-label='phone' onMouseOver={handleButtonHover}>
              <FaPhone />
            </button>
            <button className='icon' data-label='password' onMouseOver={handleButtonHover}>
              <FaLock />
            </button>
          </div>
          <button className='btn' type='button' onClick={fetchData}>Random User</button>
        </div> 
        }
        
      </div>
    </main>
  );
}

export default App
