import SlantedDiv from './SlantedDiv';
import dashbordimg from '../../assets/dash.PNG';

const Imagesection = ({ theme}) => {
  return (
    <SlantedDiv theme={theme} className={`${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
        {/* <img 
            src="https://i.ibb.co/sdRcKzX1/c872f192-f36f-4038-98ac-13708e49957d.jpg"
            alt="Image preview"
            className=" rounded" 
          /> */}
        <img 
            src={dashbordimg}
            alt="Dashboard"
            className="rounded mx-auto"
        />   
    </SlantedDiv>
  )
}

export default Imagesection