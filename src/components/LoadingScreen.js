import styled from 'styled-components';
import { StyleGuide } from './StyleGuide';
import Loader from 'react-loader-spinner';

const DimmedBackground = styled.div`
position: absolute;
top:0;
left:0;
bottom: 0;
right: 0;
background-color: ${StyleGuide.colors.background.dim};
border-radius: ${StyleGuide.borders.container};
`;

const LoadingContainer = styled.div`
display: flex;
justify-content:center;
align-items:center;
position: absolute;
margin: 50px 0px;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

export const LoadingScreen = ({ props }) => {
    return (
        <DimmedBackground>
            <LoadingContainer>
                <Loader
                    type="TailSpin"
                    color="#e6e6e6"
                    height={100}
                    width={100}
                    timeout={30000} //3 secs
                />
            </LoadingContainer>
        </DimmedBackground>
    );
} 