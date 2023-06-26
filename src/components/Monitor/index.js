import React from 'react'
import '../Monitor/Monitor.css'
import '../Monitor/SecondS.css'

import BarrelGif from '../../images/barrellbb.gif'
import Collection from '../../images/collection.png'

const Monitor = () => {
  return (
    <div>

    <div className='Monitor'>
      
    <div className='MonitorJustify'>

      <div className='MonitorHome'>

        <div className='MonitorHomeText'>
          <h3>LBB - June 25, 2023</h3>
          <p>Get ready to embark on an imaginative adventure with LBB creatures that will leave you captivated!</p>
          <br/>
          <p>LBB is a captivating collection of 3333 unique and randomly generated NFT creatures residing on the Solana blockchain. These enchanting creatures, easily identifiable at any scale, hold a special place within the vibrant LBB community.</p>
          <p>The metadata of each LBB creature is securely stored on Arweave, a decentralized and permanent data storage platform. With 89 delightful traits to choose from, each LBB creature boasts its own distinctive combination, ensuring that no two creatures are alike.</p>
          
        </div>
        <div className='MonitorHomeImage'>
          <img src={BarrelGif}/>
        </div>
      </div>

    </div>
    </div>
    <section class="skewed"></section>


      <div className='MonitorSecondSecction'>
        <div className='MonitorSecondSectionBox'>
          <div className='MonitorSecondImage'>
            <img src={Collection}/>
          </div>
          <div className='MonitorSecondText'>
          <h3>LBB</h3>
          <p>Immerse yourself in the world of LBB creatures, where your imagination knows no bounds. Discover the endless possibilities and the profound uniqueness that each LBB creature possesses. Let your creativity soar as you explore the mystical realm of LBB and its extraordinary creatures that are eagerly awaiting your embrace.</p>
          <p>Mint Date: June 25, 2023</p>
          <p>Royalties: 2.5% of each secondary sale is sent to the LBB treasury</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Monitor