import React from 'react'

import { PieChart } from 'react-minimal-pie-chart'

import { ByCountry } from '../data/BillionaireData'

const BillionaireCountriesChart: React.FC = () => {
  return <PieChart startAngle={-90} data={ByCountry} />
}

export default BillionaireCountriesChart
