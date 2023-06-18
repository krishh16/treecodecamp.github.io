import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import Courses from '../CoursesList'

export default function Home() {
  return (
    <div className='dark:bg-gray-900'>
      <NavBar/>
        {/* Name which will be retrieved from the db */}
        <div className='text-center font-semibold text-white' style={{width: '100%', height: '100%'}}>
          <h1 style={{fontSize:'30px'}}>Learn to code -- for free</h1>
          <h1 style={{fontSize:'30px'}}>Build projects,</h1>
          <h1 style={{fontSize:'30px'}}>Earn certifications.</h1>
          <h2>Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:</h2>
          <div className='flex justify-between'>
            <img src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/31_social-512.png" className='w-1/3'  style={{margin:'30px', height: '100px', width: '100px'}} alt="" />
            <img  className='w-1/3' style={{ margin:'30px', height: '100px', width: '100px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAw1BMVEX///99wUIAp+D3uhbvSSP3uABzcnNvbm9sa2z/+/ppaGn8/vsApN/3tgDxaVPvRRz4ubDuOgD0kYN1vjLJ47buMQByvSr729jk8du64PP85ryw2fGBxur60oNrvuf5zGyRyWTvQROs1o784bCUlJShoaHIx8iJiInl5eXR0dHz8vNhYGGurq68vLx9fH3c3Nz5w77wYEj2pJy63aGLx1rtHAD0iHum04RpuRD97+7s9ebg8frR6vf97tL+9OH96sdVU1V7l2DaAAADpklEQVR4nO2XaZPUNhBAlYOW3DkIIUAIuQjWLduQQALkIP//V6Vb9ngN2DOzjKtCUf0+rG1Nu/0stdq1SgmCIAiCIAiC8CHSbEG/fbbJngaPn3y5zpNflfrt6c/rPP1mR4Wvbt1c59bXSv1y+6N17u6r8Ok6D48p3BYFURAFURAFURAFURAFURCFFYUNg50Vnt1Z59nvSv3x/O46z/dUeHFvixdKvfx2i5c7KrwH/Hl/i7+U+vu7Lf7ZUeHB51t8r9QPX2zxaFeFj9epCjc+WUcUREEUREEUREEUREEUREEU/keFo/9H3FhnV4X7P27xQKlHP23xakcFQRA+PKL1Pp4V2HVdfOsynXn3EQoanbtzIltEzM18aejSKmVRw2UGMQN6X+isORXaagCcZR0CaFIo2fSXKXhds6YO2nMUwDeLK1ZQxYaLDJKHnOg45JrutAIO40UwMClcSuMBqwKeo9AXY6Ywa7AzfE9wcbJyxZaOkg2O6rMrXKSpK9by2BzgxlkcaLxGKBd7MC7G2CH46IYTCsDvXhMm0G2s2i7natVlNMYg0FthHvpaqlQnzBgw1IDMzw3ApwZ1UM2/yHNLUGqN+Xg5sELR6Kq7MXFSGOevIJjee92TggaPmhRsHesNICVOGrRvPSsEoynEgwYTFBssOK0QUNf672knHhR4bQYELEk1g+W1BWPDEIcMpmtoMei3yKqcfgi8BbSnQ+CjCqGnAgshcEAK6aSConi+O5vymoLXpkxhpFAfRvE4jlkumrFy6orgYTUR9HDNciSFcd6tpmVcKCQYN9akULcNzTyM23Uw0HMD0uP2LajLISMta+qvqUA36CZpfs+FwqBh7k+Ht0oZ+lEr0Mo0ylNlAEtYY6YGRxusXF+Bd2N0yEW5VDBLBX1Q8LMCNqqxVPSGZq/VFyoE2r5U882bs4BvzcJhyWfBVAxQNdcHV+w7LcTYJGuOhUJDadwbCnx008seklNfQf669LVBNZrL8R0U+PuUw+sK3Bag1mA3K6huGuMpGlTtew3VAz/TFHJItFO4YcwKvHDHP5aTAjeTOq/L1kTdkr641tbWNCkoakDY2hZra+pyW4qvp44aRm8t96xwpZCoUijDcQU046bKuU5wzFgbNP+l713Wem7QowKP1UZc1NSsda4VSuWsazfnfKmf4gtlwOPd0ZVSQ8PV0fEHp4wrHlvv20Jdv5t+X4zVJeLz6SuVytXFVTxFtE4JgiAIgiAIgiBcxH+fGsOmHEHDigAAAABJRU5ErkJggg==" alt="" />
            <img className='w-1/3'  style={{margin:'30px', height: '100px', width: '100px'}} src="data:image/png;base64,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" alt="" />
          </div>
        </div>
        <div className="text-white text-center m-10">
          <h2 style={{fontSize: '25px'}}>"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."</h2>
          <h4 style={{fontSize: '25px'}}>-Martin Fowler</h4>
          <Courses/>
        </div>
      <Footer/>
      </div>
  )
}
