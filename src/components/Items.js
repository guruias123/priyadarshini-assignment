import React from 'react'
import item1 from './images/item1.png'
import item2 from './images/item2.png'
import item3 from './images/item3.png'
import item4 from './images/item4.png'
import mask from './images/mask1.png'
import group from './images/group.png'
import './Items.scss'

const Items = () => {
  return (
    <div className='Item-container'>

        <div className='left-items'>
            <div className='item-1'>
                <img src={item1} />
                <p>End-to-end Solution</p>
                <hr />
                <p>We span the whole process from intelligent sensors to machine analysis</p>
            </div>

            <div className='item-1'>
                <img src={item2} />
                <p>Device as a Service</p>
                <hr />
                <p>The ability to scale devices up and down as needed, pushing cost from capital expenditures to operating expense</p>
            </div>
        </div>

        <div className='left-items right'>
        <div className='item-1'>
                <img src={item3} />
                <p>Actionable Insights</p>
                <hr />
                <p>Intelligent sensors/devices and Artificial Intelligence solutions to provide early and actionable insights into machine health</p>
            </div>

            <div className='item-1'>
                <img src={item4} />
                <p>Fastest time to value</p>
                <hr />
                <p>Plug and play solutions that ensures a rapid time-to-value without having to build complicated custom solutions</p>
            </div>
        </div>

        <div className='items-right-desc'>
            <img src={mask} />
            <div className='items-right-sub'>
                <h3>The Intellithink <span>Advantage</span></h3>
                <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90.011"
          height="22.831"
          viewBox="0 0 90.011 22.831"
        >
          <g
            id="Group_245"
            data-name="Group 245"
            transform="translate(-526.739 -1293.625)"
          >
            <path
              id="Path_323"
              data-name="Path 323"
              d="M-.087,7.031s10.773-16.021,20.774-.4,21.8-.421,21.8-.421"
              transform="matrix(0.999, -0.035, 0.035, 0.999, 528.998, 1300.315)"
              fill="none"
              stroke="#e64054"
              stroke-width="5"
            />
            <path
              id="Path_324"
              data-name="Path 324"
              d="M-.087,7.031s10.773-16.021,20.774-.4,22.006-.425,22.006-.425"
              transform="matrix(0.999, -0.035, 0.035, 0.999, 571.521, 1298.009)"
              fill="none"
              stroke="#e64054"
              stroke-width="5"
            />
          </g>
        </svg>
                <p>Intellithink combines the potential of vibration and current signature analysis with AI to detect fault conditions and the extent of these faults.</p>
                <button>Know More</button>
            </div>
        </div>
            <img className='pie' src={group} />

    </div>
  )
}

export default Items