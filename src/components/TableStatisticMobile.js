import React from 'react'
import upDown from '../images/sort.svg'
import {data} from "../data/data"

function TableStatisticMobile() {

    console.log(data);
  return (
    <div className="tableMobile">
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
              <span className='flex'><img src={upDown} />и</span>
              </th>
              <th scope="col" className="textColor text-sm font-medium  text-gray-900 px-6 py-4">
              <span className='flex'><img src={upDown} />Г</span>
              </th>
              <th scope="col" className="textColor text-sm font-medium  text-gray-900 px-6 py-4">
              <span className='flex'><img src={upDown} />П</span>
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

export default TableStatisticMobile