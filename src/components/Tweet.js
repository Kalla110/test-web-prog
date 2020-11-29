import styled from 'styled-components';
import { StyleGuide } from './StyleGuide';
import moment from 'moment';
import { random } from 'lodash';

const TweetContainer = styled.div`
display: flex;
flex: 1;
flex-direction: column;
position: relative;
padding: 30px 10px;
justify-content: flex-start;
 align-items:stretch;
background-color: ${StyleGuide.colors.background.input};
border-radius: ${StyleGuide.borders.input};
cursor: pointer;
transition: .3s;
:hover{
    opacity: .5;
}
`;

const Image = styled.img`
max-width: 100%;
max-height: 200px;
height: auto;
align-self: center;
object-fit: cover;
margin: 10px;
border-radius: ${StyleGuide.borders.input};
`;

const IDContainer = styled.div`
position: absolute;
top:10px;
right:10px;
`;

const TimeContainer = styled.div`
position: absolute;
bottom:10px;
left:10px;
`;

const Text = styled.p`
    font-size: 1em;
    padding: 1px;
    margin: 2px 5px;
    color: ${StyleGuide.colors.font.primary};
    text-align:left;
`;

export const Tweet = ({ id, text, createdAt, image, ...props }) => {
    console.log("Hui");

    return (
        <TweetContainer>
            <IDContainer>
                <Text style={{ opacity: '0.5', fontSize: '.8em' }}>
                    {`#${id}`}
                </Text>
            </IDContainer>
            {image?.uri &&
                <Image src={image.uri} alt="pic" />
            }
            <Text style={{ margin: '10px 5px' }}>{text}</Text>
            {/* {createdAt && */}
            <TimeContainer>
                <Text style={{ opacity: '0.5', fontSize: '.8em' }}>
                    {`${moment().subtract(random(1, 120), 'minutes').format('DD.MM.YYYY - HH:mm')}`}
                    {/* {`${moment().diff(moment().subtract(random(1, 120), 'minutes'))}`} */}
                </Text>
            </TimeContainer>
            {/* } */}
        </TweetContainer>
    );
} 