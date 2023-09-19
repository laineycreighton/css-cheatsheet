//----- IMPORTS -----//
import '../assets/css/Home.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Colors from '../components/Colors';
import Fonts from '../components/Fonts';
import Flexbox from '../components/Flexbox';
import Grid from '../components/Grid';

//----- EXPORTS -----//
export default function Dev() {
    return (
        <div className='app-body'>
            <Header />
            <div className='cheatsheet-body'>
                <div className='css-container'>
                    <div className='colors'>
                        <Colors />
                    </div>
                    <div className='fonts'>
                        <Fonts />
                    </div>
                    <div className='flexbox'>
                        <Flexbox />
                    </div>
                    <div className='grid'>
                        <Grid />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}