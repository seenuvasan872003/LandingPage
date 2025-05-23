import SlantedDiv from './SlantedDiv';

const Imagesection = ({ theme}) => {
  return (
    <SlantedDiv theme={theme} className={`${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
        <img 
            src="https://i.ibb.co/sdRcKzX1/c872f192-f36f-4038-98ac-13708e49957d.jpg"
            alt="Image preview"
            className=" rounded" 
          />
    </SlantedDiv>
  )
}

export default Imagesection