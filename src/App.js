
import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import Travelers from './images/travelers.jpeg';
import HomeLand from './images/homeland.png';
import SeinFeld from './images/seinfeld.png';


function App(){
  return (
    <div>
    {/* header */}
       <section className='hero is-info'>
        <div className='hero-body'>
          <p className='title'> My Top Three Favorite Shows.</p>
        </div>
       </section>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-3'>
                      <ProfileCard 
                      title="Travelers" 
                      handle="@TRVLRSseries" 
                      image = {Travelers} 
                      description="
                      Hundreds of years from now, 
                      surviving humans discover 
                      how to send consciousness back 
                      through time, into people of the 
                      21st century, while attempting to 
                      change the path of humanity." />

            </div>
            <div className='column is-3'>
                    <ProfileCard 
                    title="HomeLand" 
                    handle="@SHO_Homeland" 
                    image ={HomeLand} 
                    description="
                    A CIA operative 
                    becomes convinced a prisoner
                     of war has been turned by 
                     a terror group and is planning to
                      carry out an attack
                       on American soil. The show showcased 
                       different topics around her life,  
                        from good and bad."
                    />
          </div>
          <div className='column is-3'>
                    <ProfileCard 
                    title="SeinFeld" 
                    handle="@SeinfeldTV" 
                    image={SeinFeld}
                    description="
                     Seinfeld as a stand-up 
                     comedian whose life in 
                     New York City is made even 
                     more chaotic by his quirky 
                     group of friends who join him 
                     in wrestling with life's most 
                     perplexing, yet often trivial questions.
                     such as Airplane Peanuts?"
                    />
          </div>
        </div>
        </section>
      </div>
    </div>
  );
}

export default App; 