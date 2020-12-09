import React from 'react'

export default function SensItem ({name, type, data}) {
    return (
        <tr>
            <td> { name } </td>
            <td> { type } </td>
            <td> { data } </td>
        </tr>
    )
}