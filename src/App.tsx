
import './App.css'

function App() {

// это данные
    const tracks = [    
      
      { id: 1, title: 'Музыкальный трек номер №1', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
      { id: 2, title: 'Втрой музыкальный трек №2', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
      { id: 3, title: 'Будет третий музыкальный трек №3', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},      
      { id: 4, title: 'Ещё один такой же музыкальный №4', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
      { id: 5, title: 'Последний музыкальный трек №5', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},

    ]
  
//возвращение return (алгоритм отрисовки)
  return (
    
    <div>

      <h1> Музыкальный плейлист... </h1>

      <ul>

            {
              // когда нужно получить массив одних элементов на основе других элементов используется MAP
              // метод массива Map - возвращает новый массив , в отличие от forEach
            tracks.map((track:{id: number; title: string; url: string}) => {
              return (

                //когда используется список, когда передаем массив элементов у каждого имелемента специальный проп key
                //у каждого элемента который является корнем, у li должен быть так как он объединяет
                <li className='playlist' key={track.id}>
                  <div>
                    { track.title }  
                  </div>
        
                  <audio src={track.url}
                  controls></audio>
               </li>
              )
        } )}


      </ul>  

    </div>    

  )
}

export default App
