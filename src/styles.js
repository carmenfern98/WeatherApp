/** @jsxImportSource @emotion/react*/
import {css,keyframes} from '@emotion/react'
import styled from '@emotion/styled/macro'

export const theme = {
    light:{
    colors:{ primary:"#a1c9e6",
        secondary: "#003366",
        tertiary: "#FFFFFF",
    },
    fonts:{
        secondary:"'Quicksand', sans-serif",
        primary:"'Dancing Script', cursive",
    },
    fontSize:{
        primary: "5rem",
        secondary:"1rem",
        tertiary: "3rem",
    }
},
    dark:{
        colors:{primary:"#000000",
            secondary:"#FFFFFF",
            tertiary:"#404040"
        },
        fonts:{
            secondary:"'Quicksand', sans-serif",
            primary:"'Dancing Script', cursive",
        },
        fontSize:{
            primary: "5rem",
            secondary:"1rem",
            tertiary: "3rem",
        }
    }
    }
export const PageWrapper= styled.div`
position:relative;
min-height: 100vh;
background: ${(props)=>props.theme.colors.primary};
display:flex;
flex-direction: column;
justify-content:flex-start;`

export const CardWrapper = styled.div`
background: ${(props)=>props.theme.colors.tertiary};
margin: 100px;
padding: 10px;
border-radius:5px;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
flex-direction:column;
height:auto;
width:auto;
`
export const HeadText = styled.div`
font-family:${(props)=>props.theme.fonts.primary};
font-size:${(props)=> props.theme.fontSize.primary};
color:${(props)=>props.theme.colors.secondary};
text-align:center;
`
export const CityText = styled.div`
font-family: ${(props)=>props.theme.fonts.primary};
font-size:${(props)=>props.theme.fontSize.tertiary};
color:${(props)=>props.theme.colors.secondary}`

export const CardText= styled.div`
font-family: ${(props)=>props.theme.fonts.secondary};
font-size:${(props)=>props.theme.colors.secondary};
color:${(props)=>props.theme.colors.secondary};`

export const ButtonStyleA= styled.button`

padding:5px 10px;
margin: 10px;
border-radius:5px;
background: ${(props)=>props.theme.colors.tertiary};
color: ${(props)=>props.theme.colors.secondary};
font-family:${(props)=>props.theme.fonts.secondary};
`
export const ButtonContainer= styled.div`
display: flex;
justify-content: flex-end;
`
export const InputContainer= styled.div`
display:flex;
justify-content: center;`

export const InputStyle= styled.input`
text-align:center;
font-size:${(props)=> props.theme.fontSize.secondary};
font-weight:bold;
font-family: ${(props)=>props.theme.fonts.secondary};
`
export const ImageSpin= keyframes`
from {transform:rotate(0deg);} to {transform: rotate(360deg);}`

export const ImageContainer=styled.div`
height:10rem;
width:10rem;
margin:10px;
padding:5px;
display: flex;
justify-content: center;
align-items: center;
`
export const ResizedImage =styled.img`
width:100%;
height:100%;
object-fit:contain;
animation:${ImageSpin} 10s linear infinite;
`

export const TitleBox=styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`
export const SpinnerImage=styled.img`
width:50px;
height:50px;
animation: ${ImageSpin} 1.5s linear infinite;
object-fit:cover;
`
export const LoadingContainer= styled.div`
display:flex;
justify-content: center;
align-items:center;
text-align: center;
margin:10px;`