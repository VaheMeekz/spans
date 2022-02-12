import React from 'react'
import upDown from '../images/sort.svg'
import {data} from "../data/data"

function TableStatistic() {

    console.log(data);
  return (
    <div>
        <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center">
          <thead className="border-b bg-gray-50">
            <tr>
              <th scope="col" className="textColor text-sm font-medium  text-gray-900 px-6 py-4">
              <span className='flex'><img src={upDown} />Сезон</span>
              </th>
              <th scope="col" className="textColor text-sm font-medium  text-gray-900 px-6 py-4">
              <span className='flex'><img src={upDown} />Кол-во игр</span>
              </th>
              <th scope="col" className="textColor text-sm font-medium  text-gray-900 px-6 py-4">
              <span className='flex'><img src={upDown} />Гол</span>
              </th>
              <th scope="col" className="textColor text-sm font-medium  text-gray-900 px-6 py-4">
              <span className='flex'><img src={upDown} />Пас</span>
              </th>
              <th scope="col" className="textColor text-sm font-medium  text-gray-900 px-6 py-4">
              <span className='flex'><img src={upDown} />Гол + пас</span>
              </th>
              <th scope="col" className="textColor text-sm font-medium  text-gray-900 px-6 py-4">
              <span className='flex'><img src={upDown} /> Рейтинг</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {
                data.map((dataInfo) => {
                    return(
                        <tr className="bg-white border-b" key={dataInfo.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dataInfo.season}</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {dataInfo.games}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {dataInfo.goal}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {dataInfo.passing}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {dataInfo.goalAndPass}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {dataInfo.reating}
              </td>
            </tr>
                    )
                })
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default TableStatistic