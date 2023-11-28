import React from 'react';
import Table from 'react-bootstrap/Table';
import { BiSolidPencil } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { TiPlus } from "react-icons/ti";
import { useBooks } from '../context/books.context';

export default function Home() {

    const {books,handleDelete} = useBooks();

    return (
        <div  className='text-center mt-3'style={{ marginBottom: '1rem' }}>
            <h1 style={{color:'brown',textAlign:'center'}} className='text-center mt-3'>📚REACT PROJECT ON LIBRARY MANAGEMENT📚</h1>
            <Link to='/add'><Button style={{color:'white', background:'blue',fontSize:'bold',cursor:'pointer'}} className='button mt-5' size='sm' variant="primary"><TiPlus /> Add New</Button>{' '}</Link>
            <Table className='mt-2' striped bordered hover>
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>AUTHOR</th>
                        <th>ISBN NUMBER</th>
                        <th>PUBLISH DATE</th>
                        <th>BIOGRAPHY</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((item,i) => <BookList key={i} data={item} handleDelete={handleDelete} />)
                    }
                </tbody>
            </Table>
        </div>
    )
}

function BookList({ data, handleDelete }) {
    return (
        <>
            <tr className='row'>
                <td>{data.title}</td>
                <td>{data.author}</td>
                <td>{data.isbn}</td>
                <td>{data.date}</td>
                <td>{data.bio}</td>
                <td>
                    <Link to={`/Edit/${data.title}`}><BiSolidPencil style={{fontSize:'1rem',paddingRight:'1.7rem',color:'orange'  }}className='ms-3' /></Link>
                    <FaTrash style={{fontSize:'1rem',paddingLeft:'1rem',color:'red' }} onClick={() => handleDelete(data)} className='ms-3' />
                </td>
            </tr>
        </>
    )
}