import React from 'react'

const Table = ({ children, ...props }) => {
  return (
    <table {...props}>
      {children}
      <style jsx>
        {`
          table {
            border-collapse: collapse;
            margin: 5vh 0;
            border: 1px solid #bbb;
          }
        `}
      </style>
    </table>
  )
}

const Td = ({ children, ...props }) => {
  return (
    <td {...props}>
      {children}
      <style jsx>
        {`
          td {
            border-right: 1px solid #bbb;
            text-align: center;
          }
          td:last-child {
            padding: 1vh 1vw;
            border: none;
          }
        `}
      </style>
    </td>
  )
}

const Th = ({ children, ...props }) => {
  return (
    <th {...props}>
      {children}
      <style jsx>
        {`
          th {
            border-right: 1px solid #bbb;
            color: #000;
          }
          th:last-child {
            padding: 1vh 1vw;
            border: none;
          }
        `}
      </style>
    </th>
  )
}
const Thead = ({ children, ...props }) => {
  return (
    <thead {...props}>
      {children}
      <style jsx>
        {`
          thead {
            border-bottom: 1px solid #bbb;
          }
        `}
      </style>
    </thead>
  )
}

const Tr = ({ children, ...props }) => {
  return (
    <tr {...props}>
      {children}
      <style jsx>
        {`
          tr {
            border-bottom: 1px solid #bbb;
          }
          tr:last-child {
            border: none;
          }
        `}
      </style>
    </tr>
  )
}

const T = { Table, Td, Th, Thead, Tr }

export default T
