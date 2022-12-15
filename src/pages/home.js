import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export default function Home(){
    const navigate = useNavigate()

    function Navigate(name){
        navigate(name)
    }

    return (
        <>
            <Button onClick={()=>Navigate('/concepts')}></Button>
        
        </>
    )
}

const Button = styled.button`
    background-color: #c8a2c8;
    color: #ffffff;
    width: 300px;
    height: 150px;`