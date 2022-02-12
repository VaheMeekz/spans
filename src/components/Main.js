// import { Accordion } from '@mui/material'
import React from 'react'
import DropDown from './DropDown'
import SortDropDown from './SortDropDown'
import TableStatistic from './TableStatistic'
import AccordionComp from '../components/AccordionComp'
import ava from "../images/Ava.svg"
import {ligthImageData} from "../data/data"
import {lightImageDataFull} from "../data/data"
import light from "../images/light.svg"
import darkLight from "../images/darkLight.svg"
import { Button } from '@mui/material'
import facebook from "../images/facebook.svg"
import vk from "../images/vk.svg"
import toe from "../images/toe.svg"
import TableStatisticMobile from './TableStatisticMobile'

function Main() {
  return (
    <div className='contaainer'>

    <div className='userInfo'>
        <div className='userRaiting'>
            <div className='userRaitingsInfo'>
                <img src={ava} alt="no img"/>

                <div className='userInfoTexts'>
                    <span>89.40</span><small>999<i class="fa-solid fa-arrow-up"></i></small>
                    <p>Елишакашвили</p>
                    <p>Михо</p>
                </div>
            </div>

            <span><i class="fa-solid fa-pencil"></i>Редактировать</span>
        </div>
        <AccordionComp />
    </div>
    <div className='mainInfo'>
    <div className='statistica'>
        <div className='lightningSlice'>
            <div className='topIconsMain'>
                <div className='topIcons'>
                    {ligthImageData.map((lightImage) => {
                           return(
                            <img src={light} alt="no img" />
                        ) 
                    }) }
                </div>

                <div className='topIconsDark'>
                    <img src={darkLight} />
                    <img src={darkLight} />
                </div>
                <span className='line'></span>
            </div>


            <div className='bottomInconsMain'>
            {lightImageDataFull.map((lightImage) => {
                return(
                    <img src={light} alt="no img" />
                )
            })}
            </div>
        </div>
        <div className='mainStatistic'>
        <div className="seasons">
            <Button className='seasonsBtn seasonAll'>Все сезоны</Button>
            <Button className='seasonsBtn'>Сезон 2020/21</Button>
        </div>
        <div className='seasonBlocks'>
                <div className='seasonBlock'>
                    <span className='seasonGame'>Игры</span>
                    <span className='seasonResult'>36</span>
                </div>
                <div className='seasonBlock'>
                    <span className='seasonGame'>Гол</span>
                    <span className='seasonResult'>67</span>
                </div>
                <div className='seasonBlock'>
                    <span className='seasonGame'>Пас</span>
                    <span className='seasonResult'>136</span>
                </div>
                <div className='seasonBlock'>
                    <span className='seasonGame'>Пас+Гол</span>
                    <span className='seasonResult'>136</span>
                </div>
        </div>
        </div>
        <div className='shareSlice'>
        <div>
            <span><small>Поделиться</small></span>
            <div className='socLinks'>
                <img src={facebook} alt="no img" />
                <img src={vk} alt="no img" />
                <img src={facebook} alt="no img" />
                <img  className='toe' src={toe}/> 
            </div>
            <div className='toeTwo'>
                <img className='toe' src={toe} /> 
                <img className='toe' src={toe} /> 
            </div>

            <div className="toeThree">
                <img className='toe' src={toe} /> 
                <img className='toe' src={toe} /> 
                <img className='toe' src={toe} /> 
            </div>
        </div>
        </div>
    </div>

    <div className='dropdown'>
    <SortDropDown />
    </div>

    <div className='statisticTable'>
    <TableStatistic />
    </div>
    

    </div>

    </div>
  )
}

export default Main