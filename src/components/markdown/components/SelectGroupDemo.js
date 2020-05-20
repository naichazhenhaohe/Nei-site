import React, { useState } from 'react'
import { Select, Isolator } from 'nei-ui'

const Option = Select.Option

const countries = ['CN', 'USA', 'UK']
const provinces = {
  CN: ['Beijing', 'Shanghai', 'Guangdong'],
  UK: ['London', 'Lincoln', 'Oxford'],
  USA: ['New York', 'Ohio', 'Washington']
}

export default function() {
  const [country, setCountry] = useState(countries[0])
  const [province, setProvince] = useState(provinces[country][0])
  const selectCountry = next => {
    setCountry(next)
    setProvince(provinces[next][0])
  }
  const selectProvince = next => {
    setProvince(next)
  }
  return (
    <Isolator>
      <p style={{ margin: '10px 0' }}>
        {country} - {province}
      </p>
      <Select initValue={countries[0]} value={country} onChange={selectCountry} placeholder="请选择国家">
        {countries.map(country => (
          <Option value={country} key={country}>
            {country}
          </Option>
        ))}
      </Select>
      <Select value={province} onChange={selectProvince} placeholder="请选择省份">
        {provinces[country].map(province => (
          <Option value={province} key={province}>
            {province}
          </Option>
        ))}
      </Select>
    </Isolator>
  )
}


