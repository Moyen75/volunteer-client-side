import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../hooks/useData';
import Programs from '../Programs/Programs';
import '../Header/Header.css'

const Home = () => {
    const programs = useData()
    console.log('this is programs', programs)
    return (
        <div className='home'>
            <div className='mb-5'>
                <h1>I grow by helping people in need.</h1>
                <input type="text" placeholder='search' id="" />
                <button>search</button>
            </div>
            <Row xs={1} sm={3} md={3} className='g-4 mx-3'>
                {
                    programs?.map(program => <Programs
                        key={program.id}
                        program={program}
                    >

                    </Programs>)
                }
            </Row>

        </div>
    );
};

export default Home;