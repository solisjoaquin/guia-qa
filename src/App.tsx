import { useState } from 'react'
import './App.css'
import { repositories } from './repositories'
import { SingleCheck } from './components/singleCheck'

function App() {
  const [selectedRepo, setSelectedRepo] = useState(repositories[0])

  return (
    <div className='p-4 font-mono max-w-4xl'>
      <div>
        <select 
          className='p-2 border border-gray-300 rounded-md'
          value={selectedRepo.name} 
          onChange={(e) => setSelectedRepo(repositories.find((repo) => repo.name === e.target.value)!)}>
          {repositories.map((repo) => (
            <option 
              className='font text-lg'
              key={repo.name} 
              value={repo.name}>
              {repo.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h2 className='text-3xl md:text-4xl font-bold pt-4'>
          Selected repository: <span className='text-orange-600'>{selectedRepo.name}</span>
        </h2>
        <div className='pt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
          {selectedRepo.environment.map((env) => (
            <div 
              className='border border-gray-300 rounded-md p-4'
              key={env.name}>
              <h3 className='text-xl md:text-2xl font-bold py-2'>
                {env.name}
              </h3>
              <div>
                {env.platform.map((platform, index) => (
                  <div key={index}>
                    <div className='flex gap-2'>
                      <h4 className='text-lg font-bold py-2'>
                        {platform.name}
                      </h4>
                      {/* <input type='checkbox' /> */}
                    </div>
                    
                    <a 
                      className='text-orange-600 hover:underline break-words'
                      href={platform.url} 
                      target='_blank' 
                      rel='noreferrer'>
                      {platform.url}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {selectedRepo.casuisticas &&
          <div className='pt-4'>
            <h2 className='text-xl md:text-2xl font-bold'>Casuisticas</h2>
            <div>
              {selectedRepo.casuisticas.map((casuistica) => (
                <SingleCheck 
                  key={casuistica.userId} 
                  casuistica={casuistica}
                />
              ))}
            </div>
          </div>
        }
      </div>
      
    </div>
  )
}

export default App
